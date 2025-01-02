import Image from "next/image";
import HeroImage from "@/picture/Hero.png";

export default function Hero() {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="relative w-full h-full">
        <div className="relative">
          <Image
            src={HeroImage}
            layout="responsive"
            width={1440}
            height={100}
            alt="sorry"
          />

          <div className="absolute inset-0 flex justify-end items-center">
            <div className="bg-[#FFF3E3] max-w-[90%] sm:max-w-xs md:max-w-md lg:max-w-md rounded-md p-8 md:p-12 text-center md:text-left">
              <h4 className="font-bold text-base md:text-sm">New Arrival</h4>
              <h1 className="text-2xl md:text-3xl  lg:text-4xl font-extrabold text-[#B88E2F] mt-1 md:mt-2">
                Discover Our <br /> New Collection
              </h1>
              <p className="mt-2 md:mt-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque dolore
              </p>
              <button className="mt-4 md:mt-6 bg-[#B88E2F] text-white py-2 px-8 md:px-12 rounded font-bold">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
