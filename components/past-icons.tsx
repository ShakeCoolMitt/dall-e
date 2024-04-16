import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

import React, { useEffect, useState } from "react";

interface Icon {
  id?: string;
  userId?: string;
  iconUrl?: string;
  createdAt?: Date;
}

export default function PastIcons() {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    async function fetchIcons() {
      try {
        const response = await fetch("/api/icons");
        if (!response.ok) {
          throw new Error("Failed to fetch: " + response.statusText);
        }
        const data = await response.json();
        if (!Array.isArray(data.icons)) {
          throw new Error("Data format error, expected an array");
        }
        setIcons(data.icons);
      } catch (error) {
        console.error("Fetching error:", error);
        // Handle error state in UI as needed
      }
    }
    fetchIcons();
  }, []);

  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container px-4 grid items-center justify-center gap-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your Past Icons
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Here are the icons you have generated in the past. Click on an icon
            for more details.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {icons.map((icon) => (
            <Link
              className="px-8 py-8 inline-flex flex-col items-center p-2 rounded-md border border-gray-200 bg-white shadow-sm hover:shadow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:bg-gray-950 dark:hover:shadow dark:hover:scale-105 dark:focus-visible:ring-gray-300"
              href="#"
              key={icon.id}
            >
              <Image
                alt="Icon"
                className="aspect-[1/1] object-cover rounded-md"
                height={96}
                src={icon.iconUrl ?? ""}
                width={96}
              />
              <span className="mt-2 text-xs font-medium dark:text-gray-400">
                Icon Name
              </span>
              <div className="flex gap-2 mt-2">
                <Link href={icon.iconUrl ?? ""}>
                  <Button size="sm" variant="outline">
                    Download
                  </Button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
