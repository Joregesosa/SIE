import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Link } from '@inertiajs/react';

const Navbar = ({ auth, canLogin, canRegister }) => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">Mi SIE</a>
        <div className="flex space-x-4">
          {canLogin ? (
            <>
              <Link
                href={route('login')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              >
                Log in
              </Link>
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
