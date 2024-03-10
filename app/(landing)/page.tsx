"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import Hero from "@/components/ui/hero";

const LandingPage = () => {
  return (
    <>
      {/* <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1>VectoAi</h1>
        <div>
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        </div>
      </div> */}
    <Hero/>
      {/* <Example/> */}
    </>
  );
};

export default LandingPage;
