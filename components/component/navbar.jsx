"use client"
import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle closing the sheet
  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="mr-6 hidden md:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <b className="mx-2 font-extrabold text-xl">BlogPost.com</b>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              href="/"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={closeSheet}
            >
              Home
            </Link>
            <Link
              href="/createPost"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={closeSheet}
            >
              Create Post
            </Link>
            <Link
              href="/about"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={closeSheet}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex w-full items-center py-2 text-lg font-semibold"
              prefetch={false}
              onClick={closeSheet}
            >
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <b className="mx-2 font-extrabold text-xl">BlogPost.com</b>
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-6">
        <Link
          href="/"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/createPost"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Create Post
        </Link>
        <Link
          href="/contact"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}

// Export the component to be used elsewhere
export default Navbar;

function MenuIcon(props) {
  return (
    <Image
      {...props}
      src="/menu.svg"
      alt="Menu Icon"
      width="24"
      height="24"
    />
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
