import BlogPostItem from "@/components/blog-post-item";
import { blogPosts } from "@/util/blog-utils";

export const metadata = {
  title: "intechgration - Blog",
  description: "intechgration - Blog",
};

function Blog() {
  return (
    <section className="bg-secondary mt-4 h-full flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pb-16 md:pb-20">
          <div className="grow">
            <div className="max-w-[700px]">
              <div className="space-y-10 max-w-6xl px-4 sm:px-6 pt-32 pb-12 md:pt-40 md:pb-20">
                {/* Dummy Filters */}
                <ul className="flex flex-wrap text-sm border-b border-slate-800">
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 font-medium text-slate-800 border-b-2 border-sky-500"
                      href="#0"
                    >
                      Coding
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Startups
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li className="px-3 -mb-px">
                    <a
                      className="block py-3 text-slate-500 hover:text-slate-600"
                      href="#0"
                    >
                      Indie Hacking
                    </a>
                  </li>
                </ul>
                {blogPosts.map((post) => (
                  <BlogPostItem key={post.meta ? post.meta.id : ''} post={post} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
