import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper itams-center flex justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            alt="organizy logo"
            width={128}
            height={30}
          />{" "}
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <DesktopNav />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end">
          <SignedOut>
            <Button asChild>
              <Link href="/sign-in">login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
