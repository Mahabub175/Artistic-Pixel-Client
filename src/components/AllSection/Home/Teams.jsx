import { teamData } from "@/assets/data/homeData";
import Image from "next/image";

const Teams = () => {
  return (
    <section className="container mx-auto px-5 mt-10 lg:mt-32 mb-44">
      <div className="text-center">
        <p className="xl:text-xl">OUR TEAM</p>
        <h2 className="text-2xl lg:text-3xl xl:text-5xl font-bold mt-2">
          Meet The Team
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
        {teamData?.slice(0, 4)?.map((item) => (
          <div
            key={item?.id}
            className="text-center border rounded-xl mt-32 pb-4 group hover:shadow-lg cursor-pointer hover:border-primary duration-300 flex flex-col"
          >
            <div className="mx-auto">
              <Image
                src={item?.image}
                alt={item?.name}
                height={200}
                width={200}
                className="rounded-xl mx-auto -mt-32"
              />
            </div>

            <div className="flex-grow"></div>

            <p className="text-xl font-semibold mt-6 mb-2">{item?.name}</p>
            <p className="text-primary font-semibold">{item?.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
