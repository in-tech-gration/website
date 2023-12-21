"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "../app/css/style.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../app/firestore";
import Header from "./certificate/header";

import signature from "@/public/assets/signature.png";
import paperPlane from "@/public/assets/paper-plane.png";
import Link from "next/link";

interface Certificate {
  signatory_role: string;
  signatory_name: string;
  date: any;
  name: string;
  course: number;
}

const Certificate = ({ id }: { id: string }) => {
  const [data, setData] = useState<Certificate | object>({});

  useEffect(() => {
    const getData = async () => {
      const data = await getDoc(doc(db, "certificates", id));

      if (data.exists()) {
        setData(data.data());
      } else {
        setData({}); // Provide a default value if documentData is undefined
        // set certNotFound state to true
        return {};
      }
    };
    getData();
  }, []);

  return (
    <div
      className="
      min-w-screen min-h-screen       flex justify-center
      pt-10

      "
    >
      <div className="w-4/5 font-inter">
        <Header />
        {data && (
          <div
            className="
              h-11/12 sm:h-5/6 py-12 px-8 sm:px-24
              flex flex-col justify-around space-y-4 md:space-y-0
              border-solid border-l-2 border-r-2 border-b-2 rounded-b-2xl
              "
          > 
          <div className="flex justify-between items-center">

            <h1 className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">
              Certificate of Completion
            </h1>
            <Image className="hidden lg:block" src={paperPlane}  alt="paper airplane" width={200} / >
          </div>

            <p className="text-certificateSecondary">Awarded to</p>
            <p className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">
              {
                // @ts-ignore
                data.name
              }
            </p>
            <p className="text-certificateSecondary">
              for successfully completing
            </p>
            <p className=" text-certificatePrimary text-4xl font-bold ">
              {
                // @ts-ignore
                `WDX.180.${data.course}`
              }
            </p>
            <p className="text-certificateSecondary">
              part {" "} 
              {
                //@ts-ignore
                `${data.course}`
              } {" "}
               of 3 courses in the coding bootcamp program offered by
              <span className="font-bold"> in-tech-gration. </span>
            </p>

            <div className="  flex flex-col md:flex-row md:items-end justify-around">
              {
                // @ts-ignore
                data.date && (
                  <p className="py-2 text-certificateSecondary">
                    Certificate Issued <span className="font-bold">{` ${
                      // @ts-ignore
                      data.date?.toDate().toDateString()
                    }`}
                    </span>
                  </p>
                )
              }
              <p className="py-2 text-certificateSecondary">
                Valid Cert id: <Link href={'/certificate/'+id} className="font-bold"> {`${id}`}</Link>
              </p>
              <div className=" py-2 flex flex-col items-center">
                <Image src={signature} alt="instructor signature" />
                <p className="text-certificateSecondary border-t-2">
                  {
                    // @ts-ignore
                    data.signatory_role
                  }
                </p>
                <p className="text-certificatePrimary font-bold">
                  {
                    // @ts-ignore
                    data.signatory_name
                  }
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;
