import { Heading } from "@/components/heading";
import { Settings2Icon } from "lucide-react";

const Settings = () => {
  return (
    <Heading
      title="Setting"
      description="Settings"
      icon={Settings2Icon}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
    />
  );
};

export default Settings;
