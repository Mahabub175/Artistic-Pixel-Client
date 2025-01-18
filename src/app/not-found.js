import NotFoundAnimation from "@/components/Shared/NotFoundAnimation";
import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <Link href="/">
        <button className="bg-primary hover:bg-transparent duration-300 hover:text-primary text-white w-full font-bold px-20 py-3 rounded-full hover-fade border-2 border-primary mt-10">
          Return Home
        </button>
      </Link>
    </section>
  );
};

export default NotFound;
