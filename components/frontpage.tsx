import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MountainIcon } from "lucide-react";
import Image from "next/image";
import Examples from "./hero";

import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

export default function FrontPage() {
  const { isSignedIn } = useUser();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        {!!isSignedIn && <UserButton />}

        {!isSignedIn && (
          <Link className="flex items-center justify-center" href="#">
            <Image
              src={"/logo.png"}
              width={80}
              height={80}
              className="pt-8"
              alt=""
            />
          </Link>
        )}

        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/svg"
          >
            Generate New
          </Link>

          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/features"
          >
            Features
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 flex flex-col items-center gap-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                VectoAI Icon Generator
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Access a library of beautiful icons to use in your projects.
              </p>
            </div>
            <div className="mx-auto rounded-xl border border-gray-100/70 overflow-hidden shadow-sm dark:border-gray-800/70">
              <Image
                alt="Preview"
                className="object-cover object-center"
                height="338"
                src="/logo.png"
                width="600"
              />
            </div>

            <div className="text-center">
              {!isSignedIn ? (
                <div className="mt-10 flex justify-center gap-x-6">
                  <Link
                    href="/sign-up"
                    className="text-sm font-semibold text-gray-900"
                  >
                    <Button>Get started</Button>
                  </Link>
                  <Link
                    href="/sign-up"
                    className="text-sm font-semibold text-gray-900"
                  >
                    <Button>Learn More →</Button>
                  </Link>
                </div>
              ) : (
                <div className="mt-10 flex justify-center gap-x-6">
                  <Link
                    href="/svg"
                    className="text-sm font-semibold text-gray-900"
                  >
                    <Button>Make Icons</Button>
                  </Link>
                  <Link
                    href="/svg"
                    className="text-sm font-semibold text-gray-900"
                  >
                    <Button>Generate New →</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beautifully designed icons
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Easily generate and customize icons for your projects. Access a
                library of beautiful icons to use in your apps.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[1000px] grid gap-4 sm:gap-6 lg:grid-cols-[1fr_200px] lg:gap-10 xl:grid-cols-[1fr_300px] xl:gap-16">
              <div className="mx-auto grid grid-cols-2 items-center justify-center gap-4">
                <CheckCircleIcon className="h-10 w-10 text-gray-500" />
                <p className="text-gray-500">Customizable and Scalable</p>
              </div>
              <div className="mx-auto grid grid-cols-2 items-center justify-center gap-4">
                <CheckCircleIcon className="h-10 w-10 text-gray-500" />
                <p className="text-gray-500">Variety of Icon Styles</p>
              </div>
              <div className="mx-auto grid grid-cols-2 items-center justify-center gap-4">
                <CheckCircleIcon className="h-10 w-10 text-gray-500" />
                <p className="text-gray-500">Export Icons as SVG</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Image"
              className="rounded-full"
              height="310"
              src="/logo.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Accessible and Customizable
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Easily generate and customize icons for your projects. Access
                  a library of beautiful icons to use in your apps.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Tour the Platform
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Examples />
      </main>
    </div>
  );
}
