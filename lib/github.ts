export async function fetchGitHubData(username: string) {
    try {
        const [userRes, reposRes, contributionsRes] = await Promise.all([
            fetch(`https://api.github.com/users/${username}`),
            fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`),
            fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
        ]);

        if (!userRes.ok || !reposRes.ok || !contributionsRes.ok) {
            throw new Error("Failed to fetch GitHub data");
        }

        const user = await userRes.json();
        const repos = await reposRes.json();
        const contributions = await contributionsRes.json();

        return {
            user,
            repos,
            contributions
        };
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return null;
    }
}
