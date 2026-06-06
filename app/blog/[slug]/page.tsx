import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DATA } from "@/lib/data";

interface Props {
    params: { slug: string };
}

// Ensure the build passes if `params` needs to be awaited in Next.js 15+ (but this is standard for Next 14)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = DATA.blog.find((p) => p.slug === params.slug);

    if (!post) {
        return {
            title: "Post Not Found | MD Mukit Hasan",
        };
    }

    return {
        title: `${post.title} | MD Mukit Hasan - Technical Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: ["MD Mukit Hasan"],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
    };
}

export default function BlogPostPage({ params }: Props) {
    const post = DATA.blog.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // A simple heuristic for read time based on word count
    const wordCount = post.content ? post.content.split(/\s+/).length : 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    return (
        <div className="bg-slate-50 dark:bg-[#080d1a] min-h-screen pt-[120px] pb-24 transition-colors duration-300">
            <article className="max-w-3xl mx-auto px-4 md:px-0">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold mb-8 hover:-translate-x-1 transition-transform"
                >
                    <ArrowLeft size={18} />
                    Back to Blog
                </Link>

                <div className="mb-10">
                    <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4">
                        <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{readTime} min read</span>
                    </div>
                    <h1 className="font-outfit text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                        {post.title}
                    </h1>
                </div>

                {/* Using Tailwind Typography for article content */}
                <div className="prose prose-slate dark:prose-invert lg:prose-xl max-w-none">
                    {/* Since our content is just a string, we'll render it safely. In a real app with markdown, we'd use a markdown parser here. */}
                    {post.content?.split("\n\n").map((paragraph, idx) => {
                        if (paragraph.startsWith("## ")) {
                            return <h2 key={idx}>{paragraph.replace("## ", "")}</h2>;
                        } else if (paragraph.startsWith("### ")) {
                            return <h3 key={idx}>{paragraph.replace("### ", "")}</h3>;
                        } else if (paragraph.startsWith("* ")) {
                            return (
                                <ul key={idx}>
                                    {paragraph.split("\n").map((item, i) => (
                                        <li key={i}>{item.replace("* ", "")}</li>
                                    ))}
                                </ul>
                            );
                        } else if (paragraph.startsWith("```")) {
                            return (
                                <pre key={idx}>
                                    <code>{paragraph.replace(/```[a-z]*\n|```/g, "")}</code>
                                </pre>
                            );
                        }
                        return <p key={idx}>{paragraph}</p>;
                    })}
                </div>
            </article>
        </div>
    );
}
