import { blogPosts } from "@/util/blog-utils";
import BlogList from "@/components/blog-list"

export const metadata = {
  title: "Blog | intechgration - coding bootcamp",
  description: "Intechgration's Blog page.",
  openGraph: {
    title: "Blog | intechgration - coding bootcamp",
    description: "Intechgration's Blog page.",
    type: "website",
    url: "https://intechgration.io/blog",
    images: [
      {
        url: "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | intechgration - coding bootcamp",
    description: "Intechgration's Blog page.",
    images: [
      "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
    ],
  },
};

type BlogProps = { searchParams: { [key: string]: string | string[] | undefined } }

function Blog() {

  return <BlogList blogPosts={blogPosts} />

}

export default Blog;