import { counterData } from "@/assets/data/homeData";

const Counter = () => {
  return (
    <div className="container mx-auto px-5 mt-10 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-10">
      {counterData?.map((item) => (
        <div
          key={item?.id}
          className="text-center space-y-3 border-2 hover:border-primary duration-300 rounded-xl p-5"
        >
          <h2 className="text-5xl font-bold">{item?.count}</h2>
          <div>
            <h3 className="text-xl font-bold text-primary">{item?.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Counter;
