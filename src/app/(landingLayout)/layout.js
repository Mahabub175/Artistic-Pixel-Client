import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-350px)] pt-20 lg:pt-24 xl:pt-32">
        {children}
      </div>
    </>
  );
};

export default LandingLayout;
