const page = () => {
  return (
    <div className="mb-10 px-5">
      <div>
        <div className="flex justify-between items-center py-2 flex-col mt-6 lg:mt-10">
          <div className="w-full flex flex-col items-center border-b-gray-500 border-b-2 pb-4">
            <h1 className="text-white sm:text-5xl text-3xl tracking-normal font-bold">
              FAQ
            </h1>
          </div>
        </div>
        <div className="container bg-transparent mx-auto w-full h-full">
          <div className="lg:hidden mt-10">
            {/* Timeline Items */}
            <div className="flex flex-col gap-8">
              {/* Right Timeline Item */}
              <div className="flex flex-col md:flex-row md:items-center mb-8 w-full">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-xl text-emerald-300">
                    Are submissions free here?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    There are two options available; free and paid options. You
                    can submit photos for free here. On the other hand, the paid
                    option will ensure our premium service to get you the
                    highest exposure as a photographer.
                  </p>
                </div>
              </div>

              {/* Left Timeline Item */}
              <div className="flex flex-col md:flex-row-reverse md:items-center mb-8 w-full">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    2
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-xl text-emerald-300">
                    How many photos can I submit here?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    For a single magazine, you have to submit at least 4
                    photographs up to 12 maximums.
                  </p>
                </div>
              </div>

              {/* Right Timeline Item */}
              <div className="flex flex-col md:flex-row md:items-center mb-8 w-full">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    3
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-xl text-emerald-300">
                    What genres of photographs can I submit for the magazine?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    #Beauty #Fashion #Men #Fine Art #Glamour #Nature #Travel
                    #Wedding #Portrait #Fantasy #Photojournalism #Fitness #Hair
                    #Kids.
                  </p>
                </div>
              </div>

              {/* Left Timeline Item */}
              <div className="flex flex-col md:flex-row-reverse md:items-center mb-8 w-full">
                <div className="order-1 md:w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    4
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    For any types of questions or queries Photohouse official
                    mail and contacts are always open for you!!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div
                className="lg:border absolute border-opacity-20 border-emerald-300 h-full"
                style={{ left: "50%" }}
              ></div>
              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300  flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    1
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold  text-xl text-emerald-300">
                    Are submissions free here?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    There are two options available; free and paid options. You
                    can submit photos for free here. On the other hand, the paid
                    option will ensure our premium service to get you the
                    highest exposure as a photographer.
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    2
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold text-xl text-emerald-300">
                    How many photos can I submit here?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    For a single magazine, you have to submit at least 4
                    photographs up to 12 maximums.
                  </p>
                </div>
              </div>

              {/* <!-- right timeline --> */}
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    3
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-800 to-gray-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  <h3 className="mb-3 font-bold  text-xl text-emerald-300">
                    What genres of photographs can I submit for the magazine?
                  </h3>
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    #Beauty #Fashion #Men #Fine Art #Glamour #Nature #Travel
                    #Wedding #Portrait #Fantasy #Photojournalism #Fitness #Hair
                    #Kids.
                  </p>
                </div>
              </div>

              {/* <!-- left timeline --> */}
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="z-20 ring-2 ring-emerald-300 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto text-white font-semibold text-lg">
                    4
                  </h1>
                </div>
                <div className="order-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4">
                  {/* <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3> */}
                  <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                    For any types of questions or queries Photohouse official
                    mail and contacts are always open for you!!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
