'use client';

import Link from "next/link";
import { MenuItem } from "../interfaces/menu";
import clsx from "clsx";
import { usePathname } from "next/navigation";

type Props = MenuItem;

export const SidebarMenuItem = ({ path, icon, title, subtitle }: Props) => {
  const pathname = usePathname();
  return (
    <Link href={path}
      className={
        clsx(
          "w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 transition ease-linear duration-150",
          pathname === path ? 'bg-blue-800' : 'hover:bg-white/5'
        )
      }>
      {icon}
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  )
}