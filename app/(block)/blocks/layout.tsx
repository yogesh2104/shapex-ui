import { BlockSideBar } from "@/components/block-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docsConfig } from "@/config/docs";


interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (

    <>
      <div className="container flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-3">
        <aside className="fixed border-r pr-1 top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full pr-3">
            <BlockSideBar items={docsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
