export async function fetchGitHubData(username: string) {
    const urls = {
        user: `https://api.github.com/users/${username}`,
        repos: `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        contributions: `https://github-contributions-api.deno.dev/${username}.json`
    };

    try {
        console.log(`[GitHub] Fetching data for: ${username}`);

        const headers: HeadersInit = process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {};

        const userPromise = fetch(urls.user, { headers, next: { revalidate: 3600 } })
            .then(res => res.ok ? res.json() : null)
            .catch(err => { console.error(`[GitHub] Failed to fetch User: ${urls.user}`, err); return null; });

        const reposPromise = fetch(urls.repos, { headers, next: { revalidate: 3600 } })
            .then(res => res.ok ? res.json() : [])
            .catch(err => { console.error(`[GitHub] Failed to fetch Repos: ${urls.repos}`, err); return []; });

        const contributionsPromise = fetch(urls.contributions, { next: { revalidate: 3600 } })
            .then(res => res.ok ? res.json() : null)
            .then(data => {
                if (!data || !data.contributions) return null;
                
                const flatContributions = data.contributions.flat();
                const totalByYear: Record<string, number> = {};
                
                const mappedContributions = flatContributions.map((item: any) => {
                    let level = 0;
                    if (item.contributionCount > 0) {
                        if (item.contributionLevel === "FIRST_QUARTILE") level = 1;
                        else if (item.contributionLevel === "SECOND_QUARTILE") level = 2;
                        else if (item.contributionLevel === "THIRD_QUARTILE") level = 3;
                        else if (item.contributionLevel === "FOURTH_QUARTILE") level = 4;
                        else level = 1;
                    }
                    
                    const year = item.date.substring(0, 4);
                    if (year) {
                        totalByYear[year] = (totalByYear[year] || 0) + item.contributionCount;
                    }
                    
                    return {
                        date: item.date,
                        count: item.contributionCount,
                        level: level
                    };
                });
                
                return {
                    total: totalByYear,
                    contributions: mappedContributions
                };
            })
            .catch(err => { console.error(`[GitHub] Failed to fetch Contributions: ${urls.contributions}`, err); return null; });

        const [user, repos, contributions] = await Promise.all([userPromise, reposPromise, contributionsPromise]);

        return {
            user: user || { followers: 0, public_repos: 0 },
            repos: repos || [],
            contributions: contributions || { contributions: [], total: {} }
        };
    } catch (error) {
        console.error("[GitHub] Critical Fetch Failure:", error);
        return {
            user: { followers: 0, public_repos: 0 },
            repos: [],
            contributions: { contributions: [], total: {} }
        };
    }
}
