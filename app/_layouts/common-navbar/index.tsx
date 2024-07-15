'use client';

import { NavbarTitle, NavbarList } from "./components";

export function CommonNavbar() {
  return (
    <nav className='absolute inset-x-0 top-0 z-[100]'>
      <div className='flex items-center justify-between px-12 py-8 text-white'>
        <NavbarTitle />
        <NavbarList />
      </div>
    </nav>
  );
}