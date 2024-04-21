import { Heading } from "@/components/heading";
import { Settings2Icon } from "lucide-react";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscription-button";
import SettingsPage from "@/components/settings";

const Settings = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Setting"
        description="Manage your account settings and subscriptions."
        icon={Settings2Icon}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro ? "You are subscribed to Pro" : <SettingsPage />}
        </div>
      </div>
    </div>
  );
};

export default Settings;
