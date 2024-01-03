import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareDesc, parseISO } from "date-fns";

export type blogPost = {
  meta?: { [key: string]: any };
  slug?: string;
};

const blogDir = "blogs";

// Returns an array of blogPost in descending order according to their frontMatter date field.
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
  })
  .sort((a, b) => compareDesc(parseISO(a.meta.date), parseISO(b.meta.date)));
