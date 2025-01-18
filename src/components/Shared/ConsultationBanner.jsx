import Link from "next/link";
import simpleBanner from "@/assets/images/simple-banner.png";
import Image from "next/image";

const ConsultationBanner = () => {
  return (
    <section className="mt-10 lg:mt-32">
      <div className="bg-primary py-20 rounded-xl container mx-auto flex flex-col lg:flex-row items-center">
        <div className="pl-10 lg:pl-16 text-white mb-10 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold lg:w-5/6">
            Set Your Business on the Path to Greatness!
          </h1>
          <p className="text-lg font-semibold mt-8 lg:w-4/6">
            Our team acts as your virtual concierge, managing guest inquiries,
            securing bookings, and offering round-the-clock support
          </p>
          <Link
            href="/consultation"
            className="bg-white px-10 py-3 rounded-xl mt-10 text-primary font-bold inline-block"
          >
            Get Free Consultancy
          </Link>
        </div>
        <div>
          <Image src={simpleBanner} alt="simple-banner" height={300} />
        </div>
      </div>
    </section>
  );
};

export default ConsultationBanner;
