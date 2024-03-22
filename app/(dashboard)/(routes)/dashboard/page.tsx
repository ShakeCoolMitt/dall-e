"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { MessageSquare, User } from "lucide-react";
import { Heading } from "@/components/heading";

const DashboardPage = () => {
  return (
    <div>
      <Heading
        title="Dashboard"
        description="Check out your latest image generations"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
    </div>
  );
};

export default DashboardPage;
