import Image from "next/image";

export default function Products() {
  interface Card {
    name: string;
    age: number;
    description: string;
    image: string;
    price: string;
  }
  const data: Card[] = [
    {
      name: "syltherine",
      price: "Rp 2.500.000",
      age: 30,
      image: "/images/img-1.png",
      description: "Stylish cafe chair",
    },
    {
      name: "Leviosa",
      price: "Rp 2.500.000",
      age: 25,
      image: "/images/img-2.png",
      description: "Stylish cafe chair.",
    },
    {
      name: "Lolito",
      price: "Rp 7.000.000",
      age: 28,
      image: "/images/img-3.png",
      description: "Luxury big sofa.",
    },
    {
      name: "Respira",
      price: "Rp 500.000",
      age: 28,
      image: "/images/img-4.png",
      description: "Outdoor bar table & stool.",
    },
    {
      name: "Grifo",
      price: "Rp 1.500.000",
      age: 28,
      image: "/images/img-5.png",
      description: "Night lamp.",
    },
    {
      name: "Muggo",
      price: "Rp 150.000",
      age: 28,
      image: "/images/img-6.png",
      description: "Small mug.",
    },
    {
      name: "Pingky",
      price: "Rp 7.000.000",
      age: 28,
      image: "/images/img-7.png",
      description: "Cute bed set",
    },
    {
      name: "Potty",
      price: "Rp 500.000",
      age: 28,
      image: "/images/img-8.png",
      description: "Minimalist flower pot.",
    },
  ];

  return (
    <div className="w-[1236px] h-[1084px] top-[1610px] left-[102px] gap-[0px] border-t-[1px] opacity-[0] relative">
      {" "}
      {data.map((item, index) => (
        <div key={index} className="border">
          {" "}
          <h3>{item.name}</h3> <p>{item.description}</p> <p>{item.price}</p>{" "}
        </div>
      ))}{" "}
    </div>
  );
}

