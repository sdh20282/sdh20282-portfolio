'use client';

import { NavbarTitle } from './title';
import { NavbarList } from './list';

export function Navbar() {
  return (
    <nav className='fixed inset-x-0 top-0 z-[100]'>
      <div className='flex items-center justify-between px-12 py-8 text-white'>
        <NavbarTitle />
        <NavbarList />
      </div>
    </nav>
  );
}