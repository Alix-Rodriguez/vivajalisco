import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [logoSize, setLogoSize] = useState("260");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#004857");
        setTextColor("#ffffff");
        setLogoSize("180");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogoSize("260");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Update the URL without triggering a page refresh
      history.pushState(null, null, `/${sectionId}`);
    }
  };

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed uppercase left-0 top-0 w-full z-[50] ease-in duration-300 items-center"
    >
      <div className="navbar  m-auto flex justify-between lg:justify-center items-center  p-4 text-white font-[Anton-Regular]">

      <Image
      className="sm:hidden"
          src="/img/LOGO.png"
          width={logoSize}
          height={20}
          onClick={() => scrollToSection("home")}
        ></Image>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden uppercase text-[1.6rem] font-[Anton-Regular] gap-11 sm:flex items-center"
        >
          <li className="p-4  mt-6 nav-hov-effect" onClick={() => scrollToSection("home")}>
            <p className="cursor-pointer "> <span className="text-azul-light">Ho</span><span className="text-verde-light">me</span> </p>
          </li>
          <li className="p-4 mt-6 nav-hov-effect" onClick={() => scrollToSection("menus")}>
            <p className="cursor-pointer "> <span className="text-azul-light">Abo</span><span className="text-verde-light">ut</span> </p>
          </li>
          <Image
          src="/img/LOGO.png"
          width={logoSize}
          height={20}
          onClick={() => scrollToSection("home")}
        ></Image>
          <li className="p-4 mt-6 nav-hov-effect" onClick={() => scrollToSection("bar")}>
            <p className="cursor-pointer "><span className="text-azul-light">Me</span><span className="text-verde-light">nu</span></p>
          </li>
          <li className="p-4 mt-6 nav-hov-effect" onClick={() => scrollToSection("order-online")}>
            <p className="cursor-pointer "><span className="text-azul-light">Pla</span><span className="text-verde-light">tters</span></p>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-50">
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#004857] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#525252] text-center ease-in duration-300"
          }
        >
          <ul className="font-[Anton-Regular] text-white">
            <Image
              className="absolute right-[35%] top-10"
              src="/img/LOGO.png"
              width={150}
              height={20}
            ></Image>
            <li
              onClick={() => {
                scrollToSection("home");
                handleNav();
              }}
              className="py-6 text-3xl text-[#fff] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Home</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("menus-m");
                handleNav();
              }}
              className="py-6 text-3xl text-[#fff] hover:text-gray-500"
            >
              <p className="nav-hov-effect">About</p>
            </li>
            <li
              onClick={() => {
                scrollToSection("bar");
                handleNav();
              }}
              className="py-6 text-3xl text-[#fff] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Menu</p>
            </li>

            <li
              onClick={() => {
                scrollToSection("order-online");
                handleNav("");
              }}
              className="py-6 text-3xl text-[#fff] hover:text-gray-500"
            >
              <p className="nav-hov-effect">Platters</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
