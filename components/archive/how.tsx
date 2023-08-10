export default function How() {
    return (
        <section className="bg-black text-white sectionSize text-center">

          <h2 className="secondaryTitle bg-underline2 bg-no-repeat bg-100% ">three phases</h2>

        <div className="flex flex-col md:flex-row">
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <p className=" border-2 rounded-full bg-secondary text-black h-12 px-5 flex justify-center items-center mb-3">
              1st phase
            </p>
            <h3 className="font-montserrat font-medium text-xl mb-2"></h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              2
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">Sleep</h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-1 mx-8 flex flex-col items-center my-4">
            <div className="border-2 rounded-full bg-secondary text-black h-12 w-12 flex justify-center items-center mb-3">
              3
            </div>
            <h3 className="font-montserrat font-medium text-xl mb-2">Rave</h3>
            <p className="text-center font-montserrat">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>
    )
  }