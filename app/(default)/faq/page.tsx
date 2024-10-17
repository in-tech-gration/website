import FaqClientComponent from "./FaqClientComponent";

export const metadata = {
  title: "FAQ | intechgration - coding bootcamp",
  description: "Frequently Asked Questions regarding intechgration's course.",
  openGraph: {
    title: "FAQ | intechgration - coding bootcamp",
    description: "Frequently Asked Questions regarding intechgration's course.",
    type: "website",
    url: "https://intechgration.io/faq",
    images: [
      {
        url: "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | intechgration - coding bootcamp",
    description: "Frequently Asked Questions regarding intechgration's course.",
    images: [
      "https://res.cloudinary.com/cloudinaryforme/image/upload/v1694097349/intechgration/intechgration-meta-logo_jyfrfc.png",
    ],
  },
};

export default function Faq() {
  return <FaqClientComponent />;
}
