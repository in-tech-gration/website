import Link from "next/link";
import ThemeToggle from "./theme-toggle";

export default function Header({ nav = true }: { nav?: boolean }) {
  return (
    <header className="z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Desktop navigation */}
          {nav && (
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <ThemeToggle />
                </li>
                <li>
                  <Link
                    className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </li>
                {/* <li className="ml-3">
                  <Link
                    className="btn-sm text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm"
                    href="/signup"
                  >
                    Join The Community
                  </Link>
                </li> */}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
