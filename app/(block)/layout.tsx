import { MainHeader } from "@/components/header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pre-build Blocks.",
  description:
    "Boost your web application's performance with reusable blocks built on shadcn/ui, Framer Motion, designed for efficiency and scalability.",
}


interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <MainHeader />
      <main className="flex flex-1 flex-col">{children}</main>
    </>
  );
}
