import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-12">
          <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
            {/* Social links */}
            <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
              <li>
                <Link
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="https://twitter.com/intechgration_"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="https://github.com/in-tech-gration/"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="https://www.instagram.com/intechgration/"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.968 10.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045s-14.019 5.038-14.82 5.596c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622s2.561-10.275 2.646-11.658c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </Link>
              </li>
              {/* <li className="ml-4">
                <Link
                  className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                  href="https://www.instagram.com/intechgration/"
                  aria-label="youtube"
                >
                <Image src={YouTubeLogo} alt="youtube logo"/>
                </Link>
              </li> */}
            </ul>
            {/* Footer links */}
            {/* <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                About
              </a>
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Get in touch
              </a>
              <a
                className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
                href="#0"
              >
                Privacy &amp; Terms
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
