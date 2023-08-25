"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';




const Header = () => {
  const router = useRouter({Link});
  return (
    <div>
      <div className="flex justify-between px-10 bg-gray-300 py-3 rounded-xl w-[98%] mx-auto mt-2 border-2 border-purple-500">
        <div>
          <Link className="font-semibold" href="/">
            Home
          </Link>
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="h-full">
              <Link
                className={router.pathname == '/blogs' ? 'font-semibold' : ''}
                href="/blogs"
              >
                Blog
              </Link>
            </li>

            <li className="h-full">
              <Link
                className={router.pathname == '/about' ? 'font-semibold' : ''}
                href="/about"
              >
                About
              </Link>
            </li>

            <li className="h-full">
              <Link
                className={router.pathname == '/contact' ? 'font-semibold' : ''}
                href="/contact"
              >
                Contact
              </Link>
            </li>

            <li className="h-full">
              <Link
                className={router.pathname == '/login' ? 'font-semibold' : ''}
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
