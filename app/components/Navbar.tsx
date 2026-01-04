"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: any;
}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);
  const navBg =
    isDarkMode && isScroll
      ? "bg-white/30 backdrop-blur-lg text-white"
      : isDarkMode
        ? "bg-[var(--dark-theme)] text-white"
        : isScroll
          ? "bg-white/30 backdrop-blur-lg shadow-sm text-gray-900"
          : "text-gray-900";

  const openMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translate(-16rem)";
  };
  const closeMenu = () => {
    if (!sideMenuRef.current) return;
    sideMenuRef.current.style.transform = "translate(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`${
          isDarkMode ? "hidden" : "block"
        } fixed top-0 right-0 w-11/12 -z-10 translate-y-[86%]`}
      >
        <Image
          src={assets.header_bg_color}
          alt="background"
          className="w-full"
        ></Image>
      </div>

      {/* <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ' : ''} ${isDarkMode ? 'bg-darkTheme shadow-white/20' : ''}`}> */}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${navBg}`}
      >
        <a href="#top">
          {/* <Image src={isDarkMode ? assets.manoshri_logo_dark : assets.manoshri_logo_white} alt="portfolio logo" className='w-28 cursor-pointer mr-14' /> */}
          <h2 className="text-3xl">Portfolio</h2>
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white shadow-sm bg-opacity-50"
          } ${isDarkMode ? "border border-white bg-transparent" : ""}`}
        >
          <li>
            <a
              href="#top"
              className={`font-ovo  ${
                isDarkMode && isScroll ? "text-white" : "text-black"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`font-ovo  ${
                isDarkMode && isScroll ? "text-white" : "text-black"
              }`}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`font-ovo  ${
                isDarkMode && isScroll ? "text-white" : "text-black"
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`font-ovo  ${
                isDarkMode && isScroll ? "text-white" : "text-black"
              }`}
            >
              My work
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`font-ovo  ${
                isDarkMode && isScroll ? "text-white" : "text-black"
              }`}
            >
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex imtes-center gap-4">
          <button onClick={() => setIsDarkMode((prev: any) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon-icon"
              className="w-6"
            ></Image>
          </button>

          <a
            href="#contact"
            className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo ${
              isDarkMode ? "border-white/50" : ""
            }`}
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt="contact me"
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu-black"
              className="w-6"
              onClick={openMenu}
            />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transiton duration-500 ${
            isDarkMode ? "bg-darkHover text-white" : ""
          }`}
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close-menu"
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
