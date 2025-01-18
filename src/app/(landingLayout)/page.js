import Banner from "@/components/AllSection/Home/Banner";
import Brands from "@/components/AllSection/Home/Brands";
import Counter from "@/components/AllSection/Home/Counter";
import NewsLetter from "@/components/AllSection/Home/NewsLetter";
import Reviews from "@/components/AllSection/Home/Reviews";
import Services from "@/components/AllSection/Home/Services";
import ConsultationBanner from "@/components/Shared/ConsultationBanner";

export const metadata = {
  title: "Home | Artistic Pixel",
  description: "This is the homepage of Artistic Pixel website.",
};

const page = async () => {
  return (
    <>
      <Banner />
      <Brands />
      <Services />
      <Counter />
      <ConsultationBanner />
      <Reviews />
      <NewsLetter />
    </>
  );
};

export default page;
