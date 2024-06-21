import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';

const Navbar = ({ auth, canLogin, canRegister }) => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Mi TRC</a>
        <div className="flex space-x-4">
          {canLogin ? (
            <>
              <InertiaLink
                href="/login"
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Log in
              </InertiaLink>
              {canRegister && (
                <InertiaLink
                  href="/register"
                  className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                  Register
                </InertiaLink>
              )}
            </>
          ) : (
            <InertiaLink
              href="/dashboard"
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Dashboard
            </InertiaLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
