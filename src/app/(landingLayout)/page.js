import Banner from "@/components/AllSection/Home/Banner";

export const metadata = {
  title: "Home | Artistic Pixel",
  description: "This is the homepage of Artistic Pixel website.",
};

const page = async () => {
  return (
    <>
      <Banner />
    </>
  );
};

export default page;
