import about from "@/assets/images/about.jpg";
import Image from "next/image";

export const metadata = {
  title: "About | Artistic Pixel",
  description: "This is the about page of Artistic Pixel website.",
};

const page = () => {
  return (
    <section className="mb-20 px-5 container mx-auto">
      <div className="flex justify-between items-center flex-col">
        <div className="text-center">
          <p className="xl:text-xl">About Us</p>
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
            Know a little more about us
          </h2>
        </div>
      </div>
      <div className="lg:flex items-center justify-between my-10 relative w-full container m-auto pt-6">
        <Image src={about} alt="about" width={500} className="mt-10 lg:mt-0" />

        <div className="text-justify lg:w-3/6 mx-auto text-xl">
          <p className="mb-5">
            Founded on the principles of creativity and excellence, Artistic
            Pixel thrives on solving complex challenges through cutting-edge
            technology and design innovation.
          </p>
          <p>
            Artistic Pixel is a forward-thinking digital service agency
            dedicated to transforming ideas into digital realities. With a team
            of creative minds, technical experts, and innovative strategists, we
            specialize in crafting visually stunning designs, robust digital
            solutions, and impactful marketing strategies. From small businesses
            to large enterprises, we partner with our clients to deliver
            tailor-made services that elevate their brand presence and drive
            measurable
          </p>
          results.
        </div>
      </div>
      <div className="relative w-full container m-auto pt-6">
        <div className="flex flex-col justify-center self-center w-full text-start lg:text-justify">
          <p className="text-xl">
            Artistic Pixel is a forward-thinking digital service agency
            dedicated to transforming ideas into digital realities. With a team
            of creative minds, technical experts, and innovative strategists, we
            specialize in crafting visually stunning designs, robust digital
            solutions, and impactful marketing strategies. From small businesses
            to large enterprises, we partner with our clients to deliver
            tailor-made services that elevate their brand presence and drive
            measurable results.
            <br />
            <br />
          </p>
          <p className="text-xl">
            Founded on the principles of creativity and excellence, Artistic
            Pixel thrives on solving complex challenges through cutting-edge
            technology and design innovation. Our holistic approach ensures
            seamless collaboration with clients, enabling us to create solutions
            that align perfectly with their unique goals.
            <br />
            <br />
          </p>
          <p className="text-xl">
            Whether it’s building a responsive website, designing engaging
            graphics, or strategizing a comprehensive digital marketing plan,
            Artistic Pixel is your trusted partner in navigating the digital
            landscape with confidence and style.
            <br />
            <br />
          </p>
          <p className="text-xl">
            <span className="font-bold underline">Our Mission</span> : At
            Artistic Pixel, our mission is to empower businesses and individuals
            by providing innovative, high-quality digital services that inspire
            growth and creativity. We aim to bridge the gap between ideas and
            execution, delivering solutions that not only meet but exceed
            expectations. Our ultimate goal is to be a catalyst for our clients’
            success, helping them thrive in an ever-evolving digital world while
            leaving a lasting impression on their audiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
