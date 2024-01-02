"use client";

import { useEffect, useState, useRef } from "react";
import { jsPDF } from "jspdf";
import Image from "next/image";
import "../../app/css/style.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../app/firestore";
import Header from "./header";

import signature from "@/public/assets/signature.png";
import paperPlane from "@/public/assets/paper-plane.png";
import Link from "next/link";
import html2canvas from "html2canvas";

import { ICertificate } from "../../types";

const handleGeneratePdf = (certificateTemplate: HTMLDivElement) => {
  const doc = new jsPDF({
    format: "a4",
    unit: "px",
    orientation: "landscape",
    hotfixes: ["px_scaling"],
  });

  const internalWidth = doc.internal.pageSize.getWidth();
  const internalHeight = doc.internal.pageSize.getHeight();

  html2canvas(certificateTemplate).then((canvas) => {
    const img = canvas.toDataURL("image/png");
    doc.addImage(img, "PNG", 0, 0, internalWidth, internalHeight);
    doc.save("WDX-certificate-of-completion");
  });
};

const generateSignatureImageSrc = (name: string) => {
  return "/assets/" + "signature." + name.toLocaleLowerCase().replace(/\s/g, ".") + ".png";
}

const formatDate = (date: number) => {
  const dateObj = new Date(date);
  const month = dateObj.getUTCMonth() + 1; // months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const pMonth = month.toString().padStart(2, "0");
  const pDay = day.toString().padStart(2, "0");
  const pDate = `${pDay}/${pMonth}/${year}`;
  return pDate
}

interface Cofounder {
  fullName: string
  linkedIn: string
}

interface CertificateProps {
  id: string
  data: ICertificate & { cofounders: Cofounder[] }
}

const Certificate = ({ id, data }: CertificateProps) => {

  const certificateTemplateRef = useRef<HTMLDivElement>(null);
  const leadInstructorSignature = generateSignatureImageSrc(data.leadInstructor.fullName);

  // data.cofounders.map( cofounder =>{

  // })

  function generatePDF() {
    if (certificateTemplateRef.current) {
      handleGeneratePdf(certificateTemplateRef.current);
    }
  }

  return (
    <>

      {/* TODO: TEMPORARILY DISABLED */}
      <div className="text-center mt-8 hidden">
        <button className="px-8 py-2 text-white font-bold bg-lime-500 hover:bg-lime-600 rounded-full" onClick={generatePDF}>Generate PDF</button>
      </div>

      <div className="min-w-screen min-h-screen flex justify-center pt-10">
        <div ref={certificateTemplateRef} className="w-4/5 max-w-7xl font-inter">
          <Header />
          {data && (
            <div
              className="shadow-[0px_16px_32px_12px_#00000024]
              h-11/12 sm:h-5/6 py-12 px-8 sm:px-24
              flex flex-col justify-around space-y-4 md:space-y-0
              border-solid border-l-2 border-r-2 border-b-2 rounded-b-2xl">
              <div className="flex justify-between items-center">
                <h1 className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">
                  Certificate of Completion
                </h1>
                <Image
                  className="hidden lg:block"
                  src={paperPlane}
                  alt="paper airplane"
                  width={200}
                />
              </div>

              <div>
                <p className="text-certificateSecondary text-2xl mb-4">Awarded to: </p>
                <p className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">{data.fullName}</p>
              </div>

              <div>
                <p className="text-certificateSecondary text-2xl mb-4">
                  For successfully completing:
                </p>
                <p className=" text-certificatePrimary text-4xl font-bold border-l-8 pl-4 border-orange-400 ">
                  {data.course}
                </p>
                <p className="text-certificateSecondary text-2xl my-4">
                  <strong>Part {data.part} of 3</strong> in the coding bootcamp program offered by <span className="font-bold"> in-tech-gration. </span>
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <p className="py-2 text-certificateSecondary">
                  Certificate Issued:
                  <span className="font-bold pl-1">
                    {formatDate(data.date)}
                  </span>
                </p>
                <p className="py-2 text-certificateSecondary">
                  Valid Cert ID:{" "}
                  <Link href={"/certificate/" + id} className="font-bold">
                    {" "}
                    {`${id}`}
                  </Link>
                </p>
                {/* CO-FOUNDERS */}
                {data.cofounders.map(cofounder => {

                  const cofounderSignature = generateSignatureImageSrc(cofounder.fullName);

                  return (
                    <div key={cofounder.fullName} className="py-2 flex flex-col items-center">
                      <Image
                        src={cofounderSignature}
                        alt="instructor signature"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "150px", height: "auto" }}
                      />
                      <p className="text-certificateSecondary">
                        Co-Founder
                      </p>
                      <p className="text-certificatePrimary font-bold">
                        {cofounder.fullName}
                        <Link target="_blank" href={'https://linkedin.com/in/' + cofounder.linkedIn}>
                          <Image
                            className="ml-2"
                            style={{ display: "inline-block" }}
                            src="/assets/linkedin.icon.svg"
                            width="16"
                            alt=""
                            height="16"
                          />
                        </Link>
                      </p>
                    </div>
                  )
                })}
                {/* LEAD INSTRUCTOR */}
                <div className=" py-2 flex flex-col items-center">
                  <Image
                    src={leadInstructorSignature}
                    alt="instructor signature"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "150px", height: "auto" }}
                  />
                  <p className="text-certificateSecondary">
                    Lead Instructor
                  </p>
                  <p className="text-certificatePrimary font-bold">
                    {data.leadInstructor.fullName}
                    <Link target="_blank" href={'https://linkedin.com/in/' + data.leadInstructor.linkedIn}>
                      <Image
                        className="ml-2"
                        style={{ display: "inline-block" }}
                        src="/assets/linkedin.icon.svg"
                        width="16"
                        alt=""
                        height="16"
                      />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// TEMPORARILY DISABLED DUE TO STATIC GENERATION
const FirebaseCertificate = ({ id }: { id: string }) => {

  const [data, setData] = useState<Certificate | null>(null);
  const certificateTemplateRef = useRef<HTMLDivElement>(null);
  const [certNotFound, setCertNotFound] = useState(false);

  useEffect(() => {
    const getData = async () => {

      try {
        const data = await getDoc(doc(db, "certificates", id));

        if (data.exists()) {

          const { date, name, course, signatory_name, signatory_role } = data.data();

          setData({
            date,
            name,
            course,
            signatory_name,
            signatory_role
          });

        } else {

          setData(null); // Provide a default value if documentData is undefined
          // set certNotFound state to true
          setCertNotFound(true);

        }

      } catch (error) {

        console.error("[ ERROR ][ Certificate()]", error);
        setCertNotFound(true);

      }

    };
    getData();
  }, [id]);

  function generatePDF() {
    if (certificateTemplateRef.current) {
      handleGeneratePdf(certificateTemplateRef.current);
    }
  }

  // HANDLING ERROR CASES:
  if (certNotFound) {
    return (
      <section className="grid items-center border-8 border-red-500 h-screen">
        <h1 className="text-center font-bold text-4xl">ERROR: <span className="font-normal">Something seems to be wrong here...</span></h1>
      </section>
    )
  }

  if (!data) {
    return (
      <section className="grid items-center border-8 border-orange-500 h-screen">
        <h1 className="text-center font-bold text-4xl">Searching: <span className="font-normal">for a valid certificate...</span></h1>
      </section>
    )
  }

  return (
    <>

      {/* TODO: TEMPORARILY DISABLED */}
      <div className="text-center mt-8 hidden">
        <button className="px-8 py-2 text-white font-bold bg-lime-500 hover:bg-lime-600 rounded-full" onClick={generatePDF}>Generate PDF</button>
      </div>

      <div className="min-w-screen min-h-screen flex justify-center pt-10">
        <div ref={certificateTemplateRef} className="w-4/5 font-inter">
          <Header />
          {data && (
            <div
              className="
              shadow-[0px_16px_32px_12px_#00000024]
              h-11/12 sm:h-5/6 py-12 px-8 sm:px-24
              flex flex-col justify-around space-y-4 md:space-y-0
              border-solid border-l-2 border-r-2 border-b-2 rounded-b-2xl
              "
            >
              <div className="flex justify-between items-center">
                <h1 className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">
                  Certificate of Completion
                </h1>
                <Image
                  className="hidden lg:block"
                  src={paperPlane}
                  alt="paper airplane"
                  width={200}
                />
              </div>

              <div>
                <p className="text-certificateSecondary text-2xl mb-4">Awarded to</p>
                <p className=" text-certificatePrimary text-4xl sm:text-5xl  font-bold ">{data.name}</p>
              </div>

              <div>
                <p className="text-certificateSecondary text-2xl mb-4">
                  for successfully completing
                </p>
                <p className=" text-certificatePrimary text-4xl font-bold border-l-8 pl-4 border-orange-400 ">
                  {
                    // @ts-ignore
                    `WDX.180.${data.course}`
                  }
                </p>
                <p className="text-certificateSecondary text-2xl my-4">
                  Part {data.course} of 3 in the coding bootcamp program offered by <span className="font-bold"> in-tech-gration. </span>
                </p>
              </div>

              <div className="  flex flex-col md:flex-row md:items-end justify-around">
                {
                  // @ts-ignore
                  data.date && (
                    <p className="py-2 text-certificateSecondary">
                      Certificate Issued{" "}
                      <span className="font-bold">
                        {` ${
                          // @ts-ignore
                          data.date?.toDate().toDateString()
                          }`}
                      </span>
                    </p>
                  )
                }
                <p className="py-2 text-certificateSecondary">
                  Valid Cert id:{" "}
                  <Link href={"/certificate/" + id} className="font-bold">
                    {" "}
                    {`${id}`}
                  </Link>
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
    </>
  );
};

export default Certificate;
