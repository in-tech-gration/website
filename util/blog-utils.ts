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

// Returns string array of all distince categories of blogs
export const getBlogCategories = () => {
  let categories: string[] = [];

  blogPosts.forEach((post) =>
    post.meta?.categories.forEach(
      (category: string) =>
        !categories.includes(category) && categories.push(category)
    )
  );

  return categories.sort((a, b) => a.localeCompare(b));
};

// Returns an array with previous and next blog post, if they exists, of the current blog post displayed
export const prevNextBlogPosts = (currentSlug: string) => {
  let adjacentBlogPosts: blogPost[] = [{}, {}];
  const currentIndex = blogPosts.findIndex(
    (blogPost) => blogPost.slug === currentSlug
  );
  const nextIndex = currentIndex + 1;
  const prevIndex = currentIndex - 1;

  if (nextIndex <= blogPosts.length - 1) {
    adjacentBlogPosts[0] = blogPosts[nextIndex];
  }
  if (prevIndex >= 0) {
    adjacentBlogPosts[1] = blogPosts[prevIndex];
  }

  return adjacentBlogPosts;
};
