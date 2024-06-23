"use client";

import { NavItem } from "@/types"
import Link from "next/link"
import { ReactNode, useState } from "react";
import MobileNav from "./mobile-nav";
import { siteConfig } from "@/config/site";

interface MainNavProps {
  items: NavItem[];
  children?: ReactNode; //あとで使うかもしれないのでとりあえずチルドレンも引数に入れておく
}

export default function MainNav({items}: MainNavProps) {
  const [showMobileMenu,setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className="flex items-center md:gap-10">
      <Link 
        href={"/"} 
        className="hidden md:flex items-center space-x-2">
        <span 
          className="font-bold hidden sm:inline-block">
          {siteConfig.name}
        </span>        
      </Link>
      <nav className="md:flex gap-6 hidden">
        {items?.map((item, index) => (
          <Link 
            key={ index }
            href={ item.href }
            className="text-lg sm:text-sm font-medium hover:text-foreground/80">
            { item.title }
          </Link>          
        ))}
      </nav>
      <button 
        className="md:hidden" 
        onClick={()=> setShowMobileMenu(!showMobileMenu)}
      >
        <span>メニュー</span>
      </button>
      {/* showMobileMeuがTrueの時メニュー表示 */}
      {showMobileMenu && <MobileNav items={items}/>}
    </div>
  )
}