"use client"

import { DogIcon, MessageSquare } from "lucide-react";
import { Heading } from "@/components/heading";

const SvgGen = () => {
  return <div>
    <Heading
      title="SVG"
      description="Our most advanced conversation model."
      icon={DogIcon}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
    />
  </div>;
};

export default SvgGen;
