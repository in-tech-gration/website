import React from "react";
import { blogPost, prevNextBlogPosts } from "@/util/blog-utils";
import Link from "next/link";

interface BlogNavaigationProps {
  blogSlug: string;
}

const BlogNavigation = ({ blogSlug }: BlogNavaigationProps) => {
  const adjacentBlogPosts = prevNextBlogPosts(blogSlug);
  const prevPostSlug = adjacentBlogPosts[0].slug;
  const nextPostSlug = adjacentBlogPosts[1].slug;

  return (
    <div className={`flex ${prevPostSlug ? "justify-between" : "justify-end"}`}>
      <Link
        className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
          !prevPostSlug && "hidden"
        }`}
        href={`/blog/${prevPostSlug}`}
        aria-disabled={prevPostSlug === undefined}
      >
        Previous
      </Link>
      <Link
        className={`flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ${
          !nextPostSlug && "hidden"
        }`}
        href={`/blog/${nextPostSlug}`}
        aria-disabled={nextPostSlug === undefined}
      >
        Next
      </Link>
    </div>
  );
};

export default BlogNavigation;
