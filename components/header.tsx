"use client";

import React, { useState } from "react";
import { ThemeToggler } from "./theme-toggler";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  const menus = [
    { title: "Home", path: "#" },
    { title: "About", path: "#about" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Services", path: "#services" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <header className="lg:py-8 md:py-4 py-4 text-primary">
      <div className="xl:px-24 lg:px-12 md:px-6 px-4 flex justify-between items-center ">
        <Link href="#" className="text-2xl font-black ">
          JUCCU.
        </Link>

        <nav className="hidden lg:flex space-x-12 text-lg">
          {menus.map((menu: any) => (
            <Link href={menu.path}>{menu.title}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon">
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          <ThemeToggler />
          <Button
            className="xl:hidden lg:hidden"
            size="icon"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
            ) : (
              <Menu className="h-[1.2rem] w-[1.2rem] transition-all" />
            )}
          </Button>
        </div>
      </div>
      <nav
        className={`xl:hidden lg:hidden md:px-6 z-0 w-full bg-white dark:bg-[#020817] absolute shadow  mt-3 pb-8 px-4 flex flex-col text-lg gap-3 transition-all duration-300 ease-in-out transform ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        } ${open ? "translate-y-0" : "-translate-y-1"}`}
      >
        {menus.map((menu: any) => (
          <Link href={menu.path}>{menu.title}</Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
