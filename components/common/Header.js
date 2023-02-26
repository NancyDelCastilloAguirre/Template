/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

//HEADER SETUP
const logoUrl = "https://cdn-icons-png.flaticon.com/512/6915/6915672.png";
const navigation = {
  categories: [],
  pages: [{ name: "Demo", href: "/demo" }],
};

const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true"/>
      <div className="relative z-20">
        {/* DESKTOP */}
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <Link href="/">
              <a className="flex">
                <img className="h-8 w-auto sm:h-10" src={logoUrl} alt="" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 ">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            
            {/* HEADER DEKTOP RIGHT SECTION BUTTONS */}
            <WalletMultiButton /><div className="flex items-center md:ml-12">Connectarse</div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/">
                    <a>
                      {" "}
                      <img className="h-8 w-auto" src={logoUrl} alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="-mr-2">
                  
                </div>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {navigation.pages.map((page) => (
                  <Link key={page.name} href={page.href}>
                    <a className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                      {page.name}
                    </a>
                    <WalletMultiButton />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
