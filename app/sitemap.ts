import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mukit-portfolio-site.vercel.app' // Update this to your custom domain once connected

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Since it's a single page app with scroll sections, we mainly just need the root.
        // If you add individual blog pages later, you would generate them here.
    ]
}
