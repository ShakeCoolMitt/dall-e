import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  CheckCircleIcon,
  ImportIcon,
  MountainIcon,
  ReplaceIcon,
  XIcon,
} from "lucide-react";
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
              className="pt-5 rounded-lg object-cover object-center"
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Unleash Your Creativity with AI-Powered Icons
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Generate unique, customizable icons with our advanced AI
                    technology. Elevate your designs and projects with stunning,
                    one-of-a-kind visuals.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {!isSignedIn ? (
                    <>
                      <Link
                        href="/sign-up"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Sign Up
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/svg"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Generate Icons
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <Image
                src="/logo.png"
                width="550"
                height="550"
                alt="Hero"
                layout="responsive"
                className="mx-auto overflow-hidden rounded-xl object-bottom w-full aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Unlock Your Creative Potential
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-powered icon generator offers a wide range of features
                  to help you create stunning visuals for your projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-12">
              <div className="bg-white dark:bg-gray-950 rounded-lg p-4 flex flex-col items-start justify-start space-y-2">
                <ReplaceIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                  Customization
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Easily customize the size, color, and style of your icons to
                  perfectly fit your design.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-4 flex flex-col items-start justify-start space-y-2">
                <XIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                  AI-Driven Designs
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our advanced AI technology generates unique, high-quality
                  icons tailored to your needs.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg p-4 flex flex-col items-start justify-start space-y-2">
                <ImportIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50">
                  Export Options
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Download your icons in a variety of formats, including SVG,
                  PNG, and more, to use in your projects.
                </p>
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
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
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
