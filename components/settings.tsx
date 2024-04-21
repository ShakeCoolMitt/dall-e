import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CheckIcon, CrownIcon } from "lucide-react";
import { SubscriptionButton } from "./subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid max-w-5xl items-center justify-center gap-8 px-4 text-center md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-6xl xl:gap-10">
        <div className="flex flex-col justify-center space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Upgrade to VectoAI Pro
            </h2>
            <p className="max-w-[500px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Unlock advanced features and create stunning icons with our Pro
              plan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <SubscriptionButton isPro={isPro} />
            <Link
              className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/features"
            >
              View Pricing
            </Link>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-stretch justify-center gap-4">
          <Card className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 flex flex-col items-start gap-4">
            <CrownIcon className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Pro Features</h3>
            <ul className="space-y-2 text-left">
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5" />
                Unlimited icon generation
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5" />
                Advanced editing tools
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5" />
                Priority support
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon className="h-5 w-5" />
                Custom branding
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SettingsPage;
