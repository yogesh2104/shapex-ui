import { MainHeader } from "@/components/header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <>
      <MainHeader />
      <main className="flex flex-1 flex-col mt-2">{children}</main>
    </>
  );
}
