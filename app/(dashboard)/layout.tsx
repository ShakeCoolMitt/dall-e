import Navbar from "@/components/navbar";

import Sidebar from "@/components/sidebar";

import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative">
      <div
        className="hidden h-full md:flex md:w-50
      md:flex-col md:fixed md:inset-y-0 md:px-4 bg-slate-900"
      >
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
