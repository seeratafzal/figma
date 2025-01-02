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
            image: "/Images.png",
            description: "Stylish cafe chair",
        },
        {
            name: "Leviosa",
            price: "Rp 2.500.000",
            age: 25,
            image: "/Images (6).png",
            description: "Stylish cafe chair.",
          },
          {
            name: "Lolito",
            price: "Rp 7.000.000",
            age: 28,
            image: "/Images (1).png",
            description: "Luxury big sofa.",
          },
          {
            name: "Respira",
            price: "Rp 500.000",
            age: 28,
            image: "/Images (2).png",
            description: "Outdoor bar table & stool.",
          },
          {
            name: "Grifo",
            price: "Rp 1.500.000",
            age: 28,
            image: "/Images (3).png",
            description: "Night lamp.",
          },
          {
            name: "Muggo",
            price: "Rp 150.000",
            age: 28,
            image: "/image s.png",
            description: "Small mug.",
          },
          {
            name: "Pingky",
            price: "Rp 7.000.000",
            age: 28,
            image: "/Images (4).png",
            description: "Cute bed set",
          },
          {
            name: "Potty",
            price: "Rp 500.000",
            age: 28,
            image: "/image 8.png",
            description: "Minimalist flower pot.",
          },
    ];
}