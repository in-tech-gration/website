import BlogPostItem from "@/components/blog-post-item";
import WidgetBook from "@/components/widget-book";
import WidgetNewsletter from "@/components/widget-newsletter";
import WidgetSponsor from "@/components/widget-sponsor";
import { blogPosts } from "@/util/blog-utils";

function Blog() {
  const posts = blogPosts;

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
      <div className="grow">
        <div className="max-w-[700px]">
          <div className="space-y-10 max-w-6xl px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Dummy Filters */}
            <ul className="flex flex-wrap text-sm border-b border-slate-100 dark:border-slate-800">
              <li className="px-3 -mb-px">
                <a
                  className="block py-3 font-medium text-slate-800 dark:text-slate-100 border-b-2 border-sky-500"
                  href="#0"
                >
                  Coding
                </a>
              </li>
              <li className="px-3 -mb-px">
                <a
                  className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  href="#0"
                >
                  Startups
                </a>
              </li>
              <li className="px-3 -mb-px">
                <a
                  className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  href="#0"
                >
                  Tutorials
                </a>
              </li>
              <li className="px-3 -mb-px">
                <a
                  className="block py-3 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                  href="#0"
                >
                  Indie Hacking
                </a>
              </li>
            </ul>
            {posts.map((post) => (
              <BlogPostItem post={post} />
            ))}
          </div>
        </div>
      </div>
      {/* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0 pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="space-y-6">
          <WidgetNewsletter />
          <WidgetSponsor />
          <WidgetBook />
        </div>
      </aside>
    </div>
  );
}

export default Blog;
