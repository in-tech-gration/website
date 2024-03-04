"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function Form() {
//     // @ts-ignore
//     useEffect( () => { let bodyStyle = document.querySelector("body")?.style.margin; 


//     console.log('body:', document.querySelector("body")?.style)
 
//     // @ts-ignore
//     // bodyStyle = 0; 

//     console.log('bodystyle:', bodyStyle)
// }, []);


  return (
    <div className="-m-2">
    <style jsx global>{`
        body {
          margin: 0;
        
        }
        // *
        // {
        //     border:2px solid red;
        // }
        // h1 {
        //   font-weight: 700;
        // }
        // p {
        //   margin-bottom: 10px;
        // }
      `}</style>

      <iframe className="-m-22"
        data-tally-src="https://tally.so/embed/31d9RW?hideTitle=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="687"
        style={{ marginTop: '100px' }}
        title="intechgration application form"
      ></iframe>
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          // @ts-ignore
          Tally.loadEmbeds();
        }}
      />
    </div>
  );
}
