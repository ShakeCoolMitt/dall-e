import Navbar from "@/components/navbar";

import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div
        className="hidden h-full md:flex md:w-50
      md:flex-col md:fixed md:inset-y-0 z-[80] md:px-4 bg-slate-900"
      >
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
