'use client'
import React from "react";
import { FloatingDock } from "../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconMail,

} from "@tabler/icons-react";
import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    // {
    //   title: "Home",
    //   icon: (
    //     <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    //   target: "_blank",
    // },



    // MARK: Add Logo Later 

    // {
    //   title: "Aceternity UI",
    //   icon: (
    //     <Image
    //       src="/img/bigCat/Lion1.jpg"
    //       width={50}
    //       height={50}
    //       alt="Aceternity Logo"
    //       className="rounded-full"
    //     />
    //   ),
    //   href: "#",
    //   target: "_blank",
    // },

    
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-700 dark:text-neutral-300" />
      ),
      href: "mailto:lucian.rosu.atc@gmail.com",
      target: "_blank",
    },

    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-700 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/lucian-rosu-atc/",
      target: "_blank",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-700 dark:text-neutral-300" />
      ),
      href: "https://github.com/lucianRosuAtc",
      target: "_blank",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-700 dark:text-neutral-300" />
      ),
      href: "https://x.com/LucianRosuATC",
      target: "_blank",
    },
  ];
  return (
    <div className="flex items-center justify-center mb-10">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
