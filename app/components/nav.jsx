"use client";

import Link from "next/link";
import logoImg from "@/app/assets/kentec.jpeg";
import Image from "next/image";
import NavLink from "./nav_link";
import { FaHamburger, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="">
      <header className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImg}
            alt="Kentec logo"
            width={40}
            priority
            className="rotate-0 hover:rotate-320 transition-all duration-700 ease-in-out"
          />
          <span className="text-3xl select-none">Kentec</span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-4">
            <li>
              <NavLink href="/stamp">Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Us</NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <FaTimes size={34} />
          ) : (
            <FaHamburger size={34} />
          )}
        </button>
      </header>

      {openMenu && (
        <nav className="h-full md:hidden transition-all duration-800 ease-in-out">
          <ul className="absolute flex h-full z-20 w-[200px] right-0 flex-col gap-4 p-6 bg-gray-500/90">
            <li className="w-full" onClick={()=> setOpenMenu(!openMenu)}>
              <NavLink href="/stamp" className="hover:bg-gray-800 w-full">
                Gallery
              </NavLink>
            </li>
            <li className="w-full" onClick={()=> setOpenMenu(!openMenu)}>
              <NavLink href="/about" className="hover:bg-gray-800 w-full">
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
