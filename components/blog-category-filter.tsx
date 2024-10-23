import { getBlogCategories } from "@/util/blog-utils";
import React from "react";

const BlogCategoryFilter = (props: {
  selectedCategory?: string | string[];
}) => {
  const selectedCategory = props.selectedCategory;
  const blogCategories: string[] = getBlogCategories();

  return (
    <div className="flex justify-evenly mt-10 items-center gap-4">
      <div className="text-2xl font-bold">Filter: </div>
      <div>
        {blogCategories.map((cat) => (
          <a
            key={cat}
            href={`?category=${cat}`}
            className={`mx-2 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-300 ${
              selectedCategory === cat && "bg-amber-400"
            }`}
          >
            {cat}
          </a>
        ))}
      </div>
      <div>
        <a
          href={`/blog`}
          className={`${
            !selectedCategory && "hidden"
          } mx-2 relative z-10 rounded-full border border-gray-600 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100`}
        >
          Clear
        </a>
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
