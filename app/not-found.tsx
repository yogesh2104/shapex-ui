"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeft, TriangleAlert, Construction } from "lucide-react";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="bg-background">
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto max-w-xl w-full p-10 text-center animate-fadeIn">
          <div className="relative">
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-destructive/20" />
                <div className="relative rounded-full bg-destructive/10 dark:bg-destructive/20 p-4">
                  <TriangleAlert className="size-12 text-destructive animate-pulse" />
                </div>
              </div>
            </div>

            
            <div className="absolute -top-4 -right-4 text-muted-foreground/10">
              <Construction className="size-24 rotate-12 animate-float" />
            </div>
            <div className="absolute -bottom-4 -left-4 text-muted-foreground/10">
              <Construction className="size-24 -rotate-12 animate-float-delayed" />
            </div>

            <div className="relative space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                404
              </h1>
              <h2 className="text-2xl font-semibold text-foreground">
                Page not found
              </h2>
              <p className="text-muted-foreground">
                The page you are looking for doesn&apos;t exist or has been moved.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => router.back()}
                  variant="secondary"
                  className="w-full sm:w-auto group transition-all"
                >
                  <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Go back
                </Button>

                <Link 
                  href="/" 
                  className={buttonVariants({ 
                    variant: "default",
                    className: "w-full sm:w-auto"
                  })}
                >
                  Take me home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}