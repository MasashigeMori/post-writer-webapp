import { NavItem } from "@/types";
import { siteConfig } from "@/config/site";
import Link from "next/link"
import { useLockBodyScroll } from "@uidotdev/usehooks";

interface MobileNavProps {
  items: NavItem[];
}

export default function MobileNav({items}: MobileNavProps) {
  // ハンバーガーメニュー表示中はスクロールできなくする。カスタムフック
  useLockBodyScroll();
  return (
    <div className="fixed top-16 inset-0 z:50 p-6 shadow-md md:hidden animate-in slide-in-from-bottom-80">
      <div className="grid gap-6 bg-popover p-4 text-popover-foreground shadow-md">
        <Link href={"/"} className="font-bold">
          {siteConfig.name}
        </Link>
        <nav className="text-sm flex gap-4">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}