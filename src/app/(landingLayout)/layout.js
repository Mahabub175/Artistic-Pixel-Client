import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-100px)] pt-20 lg:pt-24 xl:pt-32">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default LandingLayout;
