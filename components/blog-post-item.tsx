import { FunctionComponent } from "react";
import { blogPost } from "@/util/blog-utils";

type BlogPostItemProps = {
  post: blogPost;
};

const BlogPostItem: FunctionComponent<BlogPostItemProps> = ({ post }) => {
  if (!post.meta) {
    return null;
  }

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(post.meta.date)
  );

  return (
    <article
      key={post.meta ? post.meta.id : ""}
      className="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <a href={`/blog/${post.slug}`}>
        <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
          {/* eslint-disable-next-line */}
          <img
            alt=""
            src={post.meta?.image}
            className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
          />

          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </a>

      <div className="flex flex-col">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={post.meta.date} className="text-gray-500">
            {formattedDate}
          </time>
          {post.meta.categories.map((cat: string) => {
            return (
              <a
                key={cat}
                href={`?category=${cat}`}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 cursor-default"
              >
                {cat}
              </a>
            );
          })}
        </div>
        <div className="group relative max-w-xl grow">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" />
              {post.meta.title}
            </a>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">
            {post.meta.description}
          </p>
        </div>
        <div className="mt-6 flex border-t border-gray-900/5 pt-6">
          <div className="relative flex items-center gap-x-4">
            {/* eslint-disable-next-line */}
            <img
              alt=""
              src={post.meta.authorImg}
              className="h-10 w-10 rounded-full bg-gray-50"
            />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href={"#"} className="cursor-default">
                  <span className="absolute inset-0" />
                  {post.meta.author}
                </a>
              </p>
              <p className="text-gray-600">{post.meta.role}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostItem;
