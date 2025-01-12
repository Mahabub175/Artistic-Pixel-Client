import Banner from "@/components/AllSection/Home/Banner";
import Counter from "@/components/AllSection/Home/Counter";
import Services from "@/components/AllSection/Home/Services";

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
    </>
  );
};

export default page;
