import AboutLinks from "@/components/AllSection/About/AboutLinks";

export const metadata = {
  title: "About | Photohouse Magazine",
  description: "This is the about page of photohouse magazine website.",
};

const page = () => {
  return (
    <section className="mt-10 mb-20 px-5">
      <div className="flex justify-between items-center py-2 flex-col mt-6 lg:mt-10">
        <div className="w-full flex flex-col items-center pb-4">
          <h1 className="text-white sm:text-5xl text-3xl tracking-normal font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="relative w-full container m-auto pt-6">
        <div className="px-[5%] flex flex-col justify-center self-center w-full text-start lg:text-justify">
          <p className="text-xl">
            Photohouse is an international photography organization founded in
            February 2016. During Photohouse&apos;s seven-year journey, it has
            worked to connect thousands of photographers around the world. We
            started our successful Photohouse Magazine in March 2022 and have
            been continuing the legacy successfully ever since.
            <br />
            <br />
          </p>
          <p className="text-xl">
            <span className="font-bold underline">Our Mission</span> :
            Photohouse aims to give a photographer the best exposure by sharing
            remarkable works and photogenic thoughts.
          </p>
        </div>
        <AboutLinks />
      </div>
    </section>
  );
};

export default page;
