"use client";

import Link from "next/link";
import logoImg from "@/app/assets/kentec.jpeg";
import Image from "next/image";
import NavLink from "./nav_link";
import profileDefault from "@/app/assets/profile.png";
import { FaHamburger, FaTimes, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProviders, useSession, signIn, signOut } from "next-auth/react";
import UnreadMessageCount from "./UnreadMessageCount";

export default function Navbar() {
  const { data: session } = useSession();
  const profileImage = session?.user?.image;

  const [openMenu, setOpenMenu] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();

    window.addEventListener("resize", () => {
      setIsProfileMenuOpen(false);
    });
  }, []);

  function handleProfileMenuOpen() {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  }

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

        <nav className="hidden md:flex gap-3">
          <ul className="flex gap-4">
            <li>
              <NavLink href="/stamp">Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Us</NavLink>
            </li>
            {session?.user?.isAdmin && (
              <li>
                <NavLink href="/stamp/create_stamp">Create Stamp</NavLink>
              </li>
            )}
          </ul>
          {!session && (
            <div className="hidden md:block">
              <div className="flex items-center">
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      className="flex items-center"
                      onClick={() => signIn(provider.id)}
                      key={provider.name}
                    >
                      <FaGoogle className="text-white mr-2 cursor-pointer" />
                      <span className="cursor-pointer hover:underline hover:underline-offset-8">
                        Login or Register
                      </span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {session && (
            <div className="flex gap-2">
              {session?.user?.isAdmin && (
                <Link href="/messages" className="relative group">
                  <button className="relative rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">View Notifications</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </button>
                  <UnreadMessageCount />
                </Link>
              )}

              <div className="relative">
                <div>
                  <button
                    className="cursor-pointer relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    type="button"
                    onClick={handleProfileMenuOpen}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">open user menu</span>
                    <Image
                      src={profileImage || profileDefault}
                      alt="profile image"
                      width={30}
                      height={30}
                      className="h-6 w-6 rounded-full"
                    />
                  </button>
                </div>

                {isProfileMenuOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {session?.user?.isAdmin && (
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700"
                        onClick={() => {
                          setIsProfileMenuOpen(false);
                        }}
                      >
                        Your Profile
                      </Link>
                    )}
                    <Link
                      href="/stamp/saved"
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                      }}
                    >
                      Saved Stamps
                    </Link>
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        signOut({ callbackUrl: "/" });
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          aria-label="Toggle Menu"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaTimes size={34} /> : <FaHamburger size={34} />}
        </button>
      </header>

      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "90%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="h-[450px] md:hidden transition-all duration-800 ease-in-out absolute z-20"
          >
            <nav className="h-full w-[200px] bg-gray-500/90 relative">
              {session && (
                <div className="flex justify-around px-6 py-4 w-full">
                  {session?.user?.isAdmin && (
                    <Link href="/messages" className="relative group">
                      <button className="relative rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View Notifications</span>
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                          />
                        </svg>
                        <UnreadMessageCount />
                      </button>
                    </Link>
                  )}

                  <div className="relative">
                    <div>
                      <button
                        className="cursor-pointer relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        type="button"
                        onClick={handleProfileMenuOpen}
                      >
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">open user menu</span>
                        <Image
                          src={profileImage || profileDefault}
                          alt="profile image"
                          width={30}
                          height={30}
                          className="h-6 w-6 rounded-full"
                        />
                      </button>
                    </div>

                    {isProfileMenuOpen && (
                      <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {session?.user?.isAdmin && (
                          <Link
                            href="/profile"
                            className="block px-4 py-2 text-sm text-gray-700"
                            onClick={() => {
                              setIsProfileMenuOpen(false);
                            }}
                          >
                            Your Profile
                          </Link>
                        )}
                        <Link
                          href="/stamp/saved"
                          className="block px-4 py-2 text-sm text-gray-700"
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                          }}
                        >
                          Saved Stamps
                        </Link>
                        <button
                          className="block px-4 py-2 text-sm text-gray-700"
                          onClick={() => {
                            setIsProfileMenuOpen(false);
                            signOut({ callbackUrl: "/" });
                          }}
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <ul className="flex z-20 w-[200px] flex-col gap-4 p-6 bg-gray-500/90">
                <li className="w-full" onClick={() => setOpenMenu(!openMenu)}>
                  <NavLink href="/stamp" className="hover:bg-gray-800 w-full">
                    Gallery
                  </NavLink>
                </li>
                <li className="w-full" onClick={() => setOpenMenu(!openMenu)}>
                  <NavLink href="/about" className="hover:bg-gray-800 w-full">
                    About Us
                  </NavLink>
                </li>

                {session && (
                  <li className="w-full" onClick={() => setOpenMenu(!openMenu)}>
                    <NavLink
                      href="stamp/create_stamp"
                      className="hover:bg-gray-800 w-full"
                    >
                      Create Stamp
                    </NavLink>
                  </li>
                )}
              </ul>
              {!session && (
                <div className="md:block px-6 absolute bottom-0 py-4">
                  <div className="flex items-center">
                    {providers &&
                      Object.values(providers).map((provider) => (
                        <button
                          className="flex items-center"
                          onClick={() => signIn(provider.id)}
                          key={provider.name}
                        >
                          <FaGoogle className="text-white mr-2 cursor-pointer" />
                          <span className="cursor-pointer hover:underline hover:underline-offset-8">
                            Login or Register
                          </span>
                        </button>
                      ))}
                  </div>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
