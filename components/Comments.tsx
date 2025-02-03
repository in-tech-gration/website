"use client";

import React, { useRef } from "react";
import { useEffect, useState } from "react";

// Source: https://raw.githubusercontent.com/skarthikeyan96/next-blog-utterances/d41504ecb4e95d1c775b6b326e084cec86aac8a9/lib/use-script.js
// Source: https://raw.githubusercontent.com/skarthikeyan96/next-blog-utterances/d41504ecb4e95d1c775b6b326e084cec86aac8a9/components/comments.js

// import useScript from "../lib/use-script";
// we need a function that accepts the script src and couple of other parameters
// @ts-ignore
const useScript = (params) => {

  const { url, theme, issueTerm, repo, ref } = params;
  const [status, setStatus] = useState(url ? "loading" : "idle");

  // run the useEffect when the url of the script changes
  useEffect(() => {
      if (!url) {
        setStatus("idle");
        return;
      }
      // assuming there are no existing script and creating a new script
      const body = ref.current;

      let script = document.createElement("script");
      script.src = url;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.setAttribute("theme", theme);
      script.setAttribute("issue-term", issueTerm);
      script.setAttribute("repo", repo);

      // Add script to document body
      body.appendChild(script);
      // ref.current.appendChild(script);

      // store status of the script

      // @ts-ignore
      const setAttributeStatus = (event) => {
        /**
         * Console.log value from event
            {
                bubbles: false
                cancelBubble: false
                cancelable: false
                composed: false
                currentTarget: null
                defaultPrevented: false
                eventPhase: 0
                isTrusted: true
                path: [script]
                returnValue: true
                srcElement: null
                target: null
                timeStamp: 276483.5
                type: "load"
            }

            based on the type property we will get know whether script is ready or errored out
            */

        setStatus(event.type === "load" ? "ready" : "error");
        
      };
      // @ts-ignore
      // const handleGlobalError = error =>{

      //   console.log( error.filename === "https://utteranc.es/client.js");
      //   console.log( error.message === "Uncaught NoModificationAllowedError: Failed to execute 'insertAdjacentHTML' on 'Element': The element has no parent." );
      //   return false;

      // }

      script.addEventListener("load", setAttributeStatus);
      script.addEventListener("error", setAttributeStatus);
      // window.addEventListener("error", handleGlobalError);

      return () => {
       // useEffect clean up
        if (script) {

          // Fixing: Error: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.
          script.parentNode?.removeChild(script);
          // body.removeChild(script); // Error

          script.removeEventListener("load", setAttributeStatus);
          script.removeEventListener("error", setAttributeStatus);
          // window.removeEventListener("error", handleGlobalError);
        }
      };

  }, [url, issueTerm, theme, repo, ref]);
  return status;
};

// export default useScript;

const Comments = () => {

  const comment = useRef(null);

  const status = useScript({
    url: "https://utteranc.es/client.js",
    theme: "github-light",
    issueTerm: "url", // "pathname"
    repo: "in-tech-gration/website",
    ref: comment
  });

  return (
    <div className="w-full">
        <div ref={comment}></div>
    </div>
  );
};

export default Comments;