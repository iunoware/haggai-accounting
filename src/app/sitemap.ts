import { MetadataRoute } from "next";
// import { readFileSync } from "fs";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  // const fileContent = readFileSync("app/blogs/blogData.tsx", "utf-8");
  // const urlMatches = [...fileContent.matchAll(/url:\s*"([^"]+)"/g)];
  // const blogSlugs = urlMatches.map((match) => match[1]);

  // const blogPages = blogSlugs.map((slug) => ({
  //   url: `https://haggaibs.com/blogs/${slug}`,
  //   lastModified: today,
  // }));

  return [
    { url: "https://haggaibs.com", lastModified: today },
    { url: "https://haggaibs.com/about", lastModified: today },

    { url: "https://haggaibs.com/services", lastModified: today },
    { url: "https://haggaibs.com/services/accounting", lastModified: today },
    { url: "https://haggaibs.com/services/payroll", lastModified: today },

    { url: "https://haggaibs.com/industries", lastModified: today },

    { url: "https://haggaibs.com/why-offshore", lastModified: today },

    { url: "https://haggaibs.com/contact", lastModified: today },

    // { url: "https://haggaibs.com/services/supply-chain", lastModified: today },
    // { url: "https://haggaibs.com/careers", lastModified: today },
    // { url: "https://haggaibs.com/pricing", lastModified: today },
    // { url: "https://haggaibs.com/blogs", lastModified: today },
    // ...blogPages,
  ];
}
