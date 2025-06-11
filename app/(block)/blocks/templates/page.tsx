import { Clock, Sparkles } from "lucide-react";

export default function Templates(){
    return(
        <div className="h-[calc(100vh-9rem)] flex items-center justify-center bg-background">
            <div className="w-full max-w-2xl border-border bg-card">
                <div className="p-8 text-center space-y-8">
                <header>
                    <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
                    Coming Soon
                    </h1>
                </header>
                <p className="text-lg text-foreground/80 animate-fadeIn">
                    Something amazing is in the works. Stay tuned!
                </p>
                <div className="flex justify-center gap-6 py-4">
                    <Clock className="w-8 h-8 text-foreground animate-spin-slow" />
                    <Sparkles className="w-8 h-8 text-foreground animate-bounce" />
                </div>
                </div>
            </div>
        </div>
    )
}