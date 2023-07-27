import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type blogPost = {
  meta: { [key: string]: any };
  slug: string;
};

const blogDir = "blogs";

export const blogPosts: blogPost[] = fs
  .readdirSync(path.join(blogDir))
  .map((filename) => {
    // Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });
