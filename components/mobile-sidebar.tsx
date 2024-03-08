"use client";

import { Button } from "./ui/button";
import { MenuSquareIcon } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Button variant="ghost" size="icon" className="md:hidden">
      <MenuSquareIcon size={24} />
    </Button>
  );
};

export default MobileSidebar;
