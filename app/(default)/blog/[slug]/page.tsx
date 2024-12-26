import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import Button from "@/components/mdx/Button";
import PostDate from "@/components/post-date";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import CustomLink from "@/components/mdx/CustomLink";
import BlogNavigation from "@/components/blog-navigation/blog-navigation";
import { notFound } from "next/navigation";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
        },
      ],
      rehypeSlug,
    ],
  },
};

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title + " | Blog | intechgration - coding bootcamp",
    description: blog.frontMatter.description,
    date: blog.frontMatter.date,
    image: blog.frontMatter.image,
    categories: blog.frontMatter.categories,
    author: blog.frontMatter.author,
    role: blog.frontMatter.role,
    authorImg: blog.frontMatter.authorImg,
    openGraph: {
      title:
        blog.frontMatter.title + " | Blog | intechgration - coding bootcamp",
      description: blog.frontMatter.description,
      type: "website",
      url: `https://intechgration.io/blog/${blog.slug}`,
      images: [
        {
          url: "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        blog.frontMatter.title + " | Blog | intechgration - coding bootcamp",
      description: blog.frontMatter.description,
      images: [
        "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
      ],
    },
  };
}

export default function Post({ params }: any) {
  // if (process.env.NODE_ENV !== 'development') {
  //   notFound();
  // }

  const props = getPost(params);
  const URL: string = "https://intechgration.io/";

  return (
    <section className="bg-secondary mt-4">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto">
          {/* Post header */}
          <header>
            <h1 className="h1 font-aspekta !mb-4">{props.frontMatter.title}</h1>
            <div className="flex items-center justify-between mb-1">
              {/* Post date */}
              <div className="text-xs text-slate-500">
                Author: <span className="font-bold">{props.frontMatter.author}</span>{" | "}
                <PostDate dateString={props.frontMatter.date} />{" "}
                <span className="text-sky-500">—</span>{" "}
                {props.frontMatter.categories.map(
                  (category: string, index: number, array: string[]) => (
                    <span key={`category-${index}`} className="text-blue-800">
                      {category}
                      {array.length > 1
                        ? index !== array.length - 1
                          ? ", "
                          : " "
                        : " "}
                    </span>
                  )
                )}
              </div>
              {/* Share buttons */}
              <ul className="inline-flex list-none !my-0">
                <li>
                  <a
                    className="flex justify-center items-center text-slate-400 hover:text-sky-500 transition duration-150 ease-in-out"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      props.frontMatter.title
                    )}&url=${encodeURIComponent(`${URL}blog/${props.slug}`)}`}
                    rel="noreferrer noopener"
                    aria-label="Twitter"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex justify-center items-center text-slate-400 hover:text-sky-500 transition duration-150 ease-in-out"
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `${URL}blog/${props.slug}`
                    )}`}
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.023 24 14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257Z" />
                    </svg>
                  </a>
                </li>
                {/* <li>
                  <a
                    className="flex justify-center items-center text-slate-400 hover:text-sky-500 transition duration-150 ease-in-out"
                    href="#0"
                    aria-label="Share"
                  >
                    <svg
                      className="w-8 h-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 14c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .223.029.439.075.649l-3.22 2.012A2.97 2.97 0 0 0 12 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.97 2.97 0 0 0 1.855-.661l3.22 2.012c-.046.21-.075.426-.075.649 0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a2.97 2.97 0 0 0-1.855.661l-3.22-2.012c.046-.21.075-.426.075-.649 0-.223-.029-.439-.075-.649l3.22-2.012A2.97 2.97 0 0 0 20 14Z" />
                    </svg>
                  </a>
                </li> */}
              </ul>
            </div>
          </header>

          <div className="prose text-lg max-w-none prose-p:leading-normal prose-headings:text-slate-800 prose-a:font-medium prose-a:text-sky-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-slate-800 prose-pre:bg-slate-800">
            {/* @ts-expect-error Server Component*/}
            <MDXRemote
              source={props.content}
              components={{ Button, a: CustomLink }}
              // @ts-ignore
              options={options}
            />
          </div>
        </article>
        <BlogNavigation blogSlug={props.slug} />
      </div>
    </section>
  );
}
