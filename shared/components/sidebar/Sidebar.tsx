import { Atom, CircleDotIcon, ClockIcon, LayoutDashboardIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { MenuItem } from "../../interfaces/menu";

const menuItems: MenuItem[] = [
  {
    path: '/dashboard/main',
    title: 'Dasboard',
    subtitle: 'Visualización',
    icon: <LayoutDashboardIcon />,
  },
  {
    path: '/dashboard/counter',
    title: 'Counter',
    subtitle: 'Contador Client Side',
    icon: <ClockIcon />,
  },
  {
    path: '/dashboard/pokemons',
    title: 'Pokemons',
    subtitle: 'Static Generation',
    icon: <CircleDotIcon />,
  },
  {
    path: '/dashboard/favorites',
    title: 'Favorites',
    subtitle: 'Favorite pokemons',
    icon: <StarIcon />,
  },
]

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed left-0 h-screen overflow-y-scroll">
      <div id="logo" className="my-4 px-6 ">
        <div className="flex gap-2">
          <Atom />
          <h1><span className="text-blue-500">My</span> Dashboard</h1>
        </div>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" src="https://avatars.githubusercontent.com/u/80226284?v=4" alt="User avatar" width={50} height={50} />
          </span>
          <span className="text-sm md:text-base font-bold">
            Ronny Endara
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((menuItem) => (<SidebarMenuItem key={menuItem.path} {...menuItem} />))
        }
      </div>
    </div>
  )
}