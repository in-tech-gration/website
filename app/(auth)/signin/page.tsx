"use client";

import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "@/lib/firebase-config";

import Link from "next/link";

export default function SignIn() {
  const signIn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // This is a hack. Need to find better way for the desired behaviour
    window.history.replaceState({}, "", "/redirect");
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
                type="button"
                onClick={signIn}
                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
