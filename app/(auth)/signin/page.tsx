"use client";

import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Sign In - Creative",
//   description: "Page description",
// };

import Link from "next/link";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return;
      }

      fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${await userCred.user.getIdToken()}`,
        },
      }).then((response) => {
        if (response.status === 200) {
          router.push("/protected");
        }
      });
    });
  }, []);

  const signIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    signInWithRedirect(auth, provider);
  };

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        <h1 className="h2 font-cabinet-grotesk">Welcome back, Creative!</h1>
      </div>
      {/* Form */}
      <div className="max-w-sm mx-auto">
        <form>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label
                className="block text-gray-500 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-input w-full text-gray-800"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-4">
            <div className="w-full">
              <label
                className="block text-gray-500 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-input w-full text-gray-800"
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-6">
            <Link
              className="font-medium text-sm sm:text-base text-blue-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline"
              href="/signup"
            >
              Join The Community
            </Link>
            <div className="ml-2">
              <button className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm">
                Sign In To Creative
              </button>
            </div>
          </div>
        </form>
        <div className="flex items-center my-6">
          <div
            className="border-t border-gray-200 grow mr-3"
            aria-hidden="true"
          />
          <div className="text-sm text-gray-500 italic">or</div>
          <div
            className="border-t border-gray-200 grow ml-3"
            aria-hidden="true"
          />
        </div>
        <form>
          <div className="flex flex-wrap">
            <div className="w-full">
              <button
                className="btn-sm text-white bg-[#808080] w-full relative flex items-center"
                type="button"
                onClick={signIn}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="13"
                  viewBox="0 0 186.69 190.5"
                >
                  <g transform="translate(1184.583 765.171)">
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z"
                      fill="#4285f4"
                    />
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z"
                      fill="#34a853"
                    />
                    <path
                      clipPath="none"
                      mask="none"
                      d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z"
                      fill="#fbbc05"
                    />
                    <path
                      d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z"
                      fill="#ea4335"
                      clipPath="none"
                      mask="none"
                    />
                  </g>
                </svg>
                <span className="flex-auto pl-16 pr-8 -ml-16">
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
