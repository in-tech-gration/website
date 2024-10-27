import React from "react";

// Returns string array of all distinct categories of blogs
export const getBlogCategories = (blogPosts:any) => {

  // TODO: Convert to Set()
  const categories: string[] = [];

  blogPosts.forEach((post:any) =>{
    return post.meta?.categories?.forEach(
      (category: string) =>
        !categories.includes(category) && categories.push(category)
    )
  });

  return categories.sort((a, b) => a.localeCompare(b));
};

const BlogCategoryFilter = (props: {
  selectedCategory?: string | string[];
  blogPosts?: any
}) => {
  const selectedCategory = props.selectedCategory;
  const blogCategories: string[] = getBlogCategories(props.blogPosts);

  return (
    <div className="flex mt-4 items-center">
      <div className="text-1xl font-bold">Categories: </div>
      <div>
        {blogCategories.map((cat) => (
          <a
            key={cat}
            href={`?category=${cat}`}
            className={`mx-2 relative z-10 rounded-full text-sm px-4 py-1.5 font-medium text-gray-600 hover:bg-gray-300 ${
              selectedCategory === cat ? "bg-amber-400" : "bg-gray-50"
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
          } mx-2 relative z-10 text-sm rounded-full border border-gray-600 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100`}
        >
          Clear
        </a>
      </div>
    </div>
  );
};

export default BlogCategoryFilter;
