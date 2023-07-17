"use client";

import React, { useEffect } from "react";
import { auth } from "@/lib/firebase-config";
import { getRedirectResult } from "firebase/auth";
import { useRouter } from "next/navigation";

const SignInRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (userCred) => {
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
            router.push("/");
          }
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  }, []);

  return (
    <div>
      <h2>Redirecting...</h2>
    </div>
  );
};

export default SignInRedirect;
