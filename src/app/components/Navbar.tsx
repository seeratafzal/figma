import React from 'react'
import logo from "@/public/logo.png"
import Image from 'next/image' ;
export default function navbar() {
  return (
    <>
 <div className="navbar">
  <div className="logo">
 <Image src={logo} width={185} height={41} alt="picture of auther"/>
 <div className="navbtns">
        <ul className="head">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/shop"}>
            <li>Shop</li>
          </Link>
          <Link href={"/blog"}>
            <li>Blog</li>
          </Link>
          <Link href={"/contact"}>
            <li>Contact</li>
          </Link>
        </ul>
        </div>

        <div className="icons">
        <MdPersonOutline />
        <CiSearch />
        <GoHeart />
        <AiOutlineShoppingCart />

        </div>


      </div>
    </>
  );
}

