import Banner from "@/components/AllSection/Home/Banner";
import Counter from "@/components/AllSection/Home/Counter";
import Services from "@/components/AllSection/Home/Services";
import Teams from "@/components/AllSection/Home/Teams";

export const metadata = {
  title: "Home | Artistic Pixel",
  description: "This is the homepage of Artistic Pixel website.",
};

const page = async () => {
  return (
    <>
      <Banner />
      <Services />
      <Counter />
      <Teams />
    </>
  );
};

export default page;
