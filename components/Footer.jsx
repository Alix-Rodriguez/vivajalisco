import React from "react";
import Image from "next/image";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-screen lg:h-[30vh] relative grid lg:grid-cols-3 w-full bg-[#67BFB1] text-white items-center justify-items-center">
      <div className="grid content-center lg:justify-items-start justify-items-center">
        <p className=" text-[1.4rem] lg:text-center leading-none font-[100]">xxxx xxxxx xx xx xxxx xxx <br /> xxxxxxx, xx xxxxx</p>
        <p className="font-[800] text-[2rem] lg:text-[2rem] 2xl:text-[2.5rem]">(xxx)xxx-xxxx</p>
      </div>
      <div className="text-center flex flex-col lg:flex-row items-center lg:text-left gap-4">
        <h2 className="uppercase lg:text-right text-center font-[Anton-Regular] lg:text-[2rem] text-[4rem] leading-none">
          xxxxx xx
          <br /> xxxxxxxxx
        </h2>
        <ul className="text-[1.3rem] ">
          <li className="font-[700]">Monday through Saturday</li>
          <li>11:00 AM to 9:00 PM</li>
          <li className="font-[700]">Sundays</li>
          <li>11:00 AM to 8:00 PM</li>
        </ul>
      </div>
      <div className=" text-[1.2rem] lg:justify-self-center text-">
        <h6 className="">
          {" "}
          <span className="">Follow</span> us:
        </h6>
        <div className="flex text-[2.5rem] gap-2 justify-center lg:justify-start">
          <Link
            href="/"
            target="_blank"
          >
            <AiFillInstagram className=" rounded-lg"></AiFillInstagram>
          </Link>
          <Link href="/" target="_blank">
            <AiFillFacebook className="rounded-lg"></AiFillFacebook>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
