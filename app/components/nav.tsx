"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { user } = useUser();
  const [loggedin, setIsLogged] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLogged(pathname.includes("sign-in") || pathname.includes("sign-up"));
  }, [pathname]);

  return !loggedin && (
    <header className="fixed top-0 left-0 w-full bg-gray-900 z-50">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-teal-600 dark:text-teal-300" href="#">
          <span className="sr-only">Home</span>
          <Image alt="logo" src={"/logo.png"} width={100} height={100} className="p-2" />
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {["من نحن", "مميزاتنا", "فريق العمل", "الخدمات"].map((item) => (
                <li key={item}>
                  <a
                    className="transition hover:text-gray-500/75 text-white hover:text-white/75"
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            {!user ? (
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md px-5 py-2.5 text-sm font-medium text-white transition bg-blue-600"
                  href="/sign-in"
                >
                  تسجيل دخول
                </Link>

                <Link
                  className="hidden rounded-md px-5 py-2.5 text-sm font-medium transition hover:text-teal-600/75 sm:block bg-gray-800 text-white hover:text-white/75"
                  href="/sign-up"
                >
                  إنشاء حساب
                </Link>
              </div>
            ) : (
              <div>
                <UserButton afterSignOutUrl="/" />
              </div>
            )}

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
