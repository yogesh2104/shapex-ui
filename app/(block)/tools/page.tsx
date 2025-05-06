import DevTools from "@/components/tools/Dev-tools";


export default async function BlocksPage() {
  return (
    <div className="mx-auto p-6"> 
      <main>
        <section>
            <h2 className="text-2xl font-semibold mb-6">Why Use Our Tools?</h2>
            <div className="rounded-lg p-2">
                <p className="mb-4">Our development tools are designed to help you:</p>
                <ul className="space-y-3 p-4">
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">•</span>
                        <div>
                        <span className="font-semibold">Save time</span> by generating code automatically
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">•</span>
                        <div>
                        <span className="font-semibold">Visualize changes</span> with real-time previews
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">•</span>
                        <div>
                        <span className="font-semibold">Learn best practices</span> through well-structured output
                        </div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-blue-500 font-bold mr-2">•</span>
                        <div>
                        <span className="font-semibold">Customize every detail</span> with fine-grained controls
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <DevTools/>
      </main>
    </div>
  )
}
