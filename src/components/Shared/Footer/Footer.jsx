import Image from "next/image";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="container mx-auto px-5 mb-10 border-b pb-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <Image src={logo} alt="logo" width={150} height={150} />
            <p>© 2025 ArtisticPixel. All rights reserved.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {["Portfolio", "About", "Contact", "Pricing", "How It Works"].map(
              (item, index) => (
                <p
                  key={index}
                  className="border-b border-transparent hover:border-primary hover:text-primary duration-300"
                >
                  {item}
                </p>
              )
            )}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
