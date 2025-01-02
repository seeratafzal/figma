import Image from "next/image";
import Logo from "@/picture/Logo (1).png";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-white-100">
      <div className="logo">
        <Image src={Logo} width={185} height={41} alt="Picture of the author" />
      </div>

      <div className="navbtns">
        <ul className="flex space-x-5 ">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="icons flex items-center space-x-4">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <Link href="/cart"><AiOutlineShoppingCart /></Link>
      </div>
    </div>
  );
}
