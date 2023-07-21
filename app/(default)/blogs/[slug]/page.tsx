import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import Button from "@/components/mdx/Button";
import { MDXRemote } from "next-mdx-remote/rsc";
import CustomLink from "@/components/mdx/CustomLink";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
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
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}

export default function Post({ params }: any) {
  const props = getPost(params);

  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-20">
      <article className="prose prose-sm md:prose-base lg:prose-lg mx-auto">
        <h1>{props.frontMatter.title}</h1>

        {/* @ts-expect-error Server Component*/}
        <MDXRemote
          source={props.content}
          components={{ Button, a: CustomLink }}
          options={options}
        />
      </article>
    </section>
  );
}
