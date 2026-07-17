import productModel from "../models/productModel.js";

export const generateSitemap = async (req, res) => {
    try {
        const baseUrl = "https://ddollylamb.com";

        // Get all active products
        const products = await productModel
            .find({ isDeleted: false })
            .select("slug updatedAt");

        // Static pages
        const staticPages = [
            {
                url: `${baseUrl}/`,
                priority: "1.0",
                changefreq: "daily",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/about`,
                priority: "0.8",
                changefreq: "monthly",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/contact`,
                priority: "0.8",
                changefreq: "monthly",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/collection`,
                priority: "0.9",
                changefreq: "daily",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/privacy-policy`,
                priority: "0.4",
                changefreq: "yearly",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/terms-of-use`,
                priority: "0.4",
                changefreq: "yearly",
                lastmod: new Date().toISOString(),
            },
            {
                url: `${baseUrl}/cookies-policy`,
                priority: "0.4",
                changefreq: "yearly",
                lastmod: new Date().toISOString(),
            },
        ];

        let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
        xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

        // Static Pages
        staticPages.forEach((page) => {
            xml += `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
      </url>`;
        });

        // Product Pages
        products.forEach((product) => {
            if (!product.slug) return;

            xml += `
      <url>
        <loc>${baseUrl}/product/${product.slug}</loc>
        <lastmod>${product.updatedAt.toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
        });

        xml += `</urlset>`;

        res.header("Content-Type", "application/xml");
        res.send(xml);

    } catch (error) {
        console.error(error);
        res.status(500).send("Error generating sitemap");
    }
};