import { MainHeader } from "@/components/header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <MainHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      {/* <SiteFooter /> */}
    </div>
  )
}
