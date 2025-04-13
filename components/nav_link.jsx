"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({ href, children }) {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "hover:underline underline-offset-8 transition-all delay-700 duration-700 ease-in-out",
        path.startsWith(href) ? "underline" : "" 
      )}
    >
      {children}
    </Link>
  );
}
