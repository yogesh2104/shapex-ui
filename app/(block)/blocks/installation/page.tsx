import { Code } from "@/components/code"

import { Alert,AlertDescription} from "@/components/ui/alert"
import { Megaphone } from "lucide-react"
import Link from "next/link"

export default function InstallationPage() {

  return (
    <div className="min-h-screen p-8 max-w-4xl">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p>How to install dependencies and structure your app.</p>

        <Alert className="my-6">
            <Megaphone className="h-4 w-4"/>
            <AlertDescription>Note: Same installation process as <Link href="https://ui.shadcn.com/docs/installation" className="underline">shadcn/ui.</Link></AlertDescription>
        </Alert>

        <h1 className="text-4xl font-bold mb-4">Next.js & TypeScript</h1>
        <p className=" text-sm mb-3">Install and configure Next.js with TypeScript. Because components are written in TypeScript. We recommend using TypeScript for your project as well.
        </p>
      </header>

      <div className="space-y-12">
        <section className="relative pl-8 border-l border-gray-800">
          <div className="absolute left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">
            1
          </div>
          <h2 className="text-xl font-semibold mb-4">Create project</h2>
          <p className=" mb-4">
            Run the <code className="bg-gray-800 text-white  px-1.5 py-0.5 rounded text-sm">init</code> command to create a new
            Next.js project or to setup an existing one:
          </p>
          <Code showCopy>npx shadcn@latest init</Code>

          <div className=" border border-gray-800 rounded-lg p-4 mb-4 mt-4">
            <p className=" mb-2">
              You can use the <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">-d</code> flag for defaults
              i.e <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">new-york</code>,{" "}
              <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">zinc</code> and{" "}
              <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">yes</code> for the css variables.
            </p>
            <Code showCopy>npx shadcn@latest init -d</Code>
          </div>
        </section>
        <section className="relative pl-8 border-l border-gray-800">
          <div className="absolute left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">
            2
          </div>
          <h2 className="text-xl font-semibold mb-4">Configure components.json</h2>
          <p className=" mb-4">
            You will be asked a few questions to configure{" "}
            <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">components.json</code>:
          </p>
          <Code showLineNumbers showCopy>
            {`Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Do you want to use CSS variables for colors? › no / yes`}
          </Code>
        </section>
        <section className="relative pl-8 border-l border-gray-800">
          <div className="absolute left-0 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm">
            3
          </div>
          <h2 className="text-xl font-semibold mb-4">That's it</h2>
          <p className=" mb-4">You can now start adding components to your project.</p>
          <Code showCopy>npx shadcn@latest add button</Code>
          <p className=" mb-4 mt-4">
            The command above will add the <code className="bg-gray-800 text-white px-1.5 py-0.5 rounded text-sm">Button</code>{" "}
            component to your project. You can then import it like this:
          </p>
          <Code showLineNumbers showCopy>
            {`import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}`}
          </Code>
        </section>
      </div>
    </div>
  )
}

