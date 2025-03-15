import Link from "next/link";
import logoImg from "@/app/assets/kentec.jpeg"
import Image from "next/image";
import NavLink from "./nav_link";

export default function Navbar() {
    return (
        <header className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
                <Image src={logoImg} alt="Kentec logo" width={40} priority className="rotate-0 hover:rotate-320 transition-all duration-700 ease-in-out"/> 
                <span className="text-3xl select-none">Kentec</span>
            </Link>

            <nav className="">
                <ul className="flex gap-4">
                    <li>
                        <NavLink href="/stamp">Gallery</NavLink>
                    </li>
                    <li>
                    <NavLink href="/about">About Us</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
