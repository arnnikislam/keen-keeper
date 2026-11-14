"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link
          href="/"
          className={`${pathname === "/" && "bg-[#244D3F] text-white"}`}
        >
          <RiHome2Line />
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/timeline"
          className={`${pathname === "/timeline" && "bg-[#244D3F] text-white"}`}
        >
          <RiTimeLine />
          Timeline
        </Link>
      </li>
      <li>
        <Link
          href="/stats"
          className={`${pathname === "/stats" && "bg-[#244D3F] text-white"}`}
        >
          <TfiStatsUp />
          Stats
        </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" height="100" width="150" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal text-lg space-x-2">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
