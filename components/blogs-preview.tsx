import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

const BlogsPreview = () => {
  // 1) Set blogs directory
  const blogDir = "blogs";

  // 2) Find all files in the blog directory
  const files = fs.readdirSync(path.join(blogDir));

  // 3) For each blog found
  const blogs = files.map((filename) => {
    // 4) Read the content of that blog
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    // 5) Extract the metadata from the blog's content
    const { data: frontMatter } = matter(fileContent);

    // 6) Return the metadata and page slug
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
      <h2 className="text-2xl font-bold">Latest Blogs</h2>

      <div className="py-2">
        {blogs.map((blog) => (
          <Link href={"/blogs/" + blog.slug} passHref key={blog.slug}>
            <div className="py-2 flex justify-between align-middle gap-2">
              <div>
                <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                <p className="text-gray-400">{blog.meta.description}</p>
              </div>
              <div className="my-auto text-gray-400">
                <p>{blog.meta.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsPreview;
