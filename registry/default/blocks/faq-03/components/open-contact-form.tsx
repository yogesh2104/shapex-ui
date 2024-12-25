"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/registry/default/blocks/faq-03/hook/use-outside-click";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Label } from "@/registry/default/ui/label";
import { Input } from "@/registry/default/ui/input";
import { Textarea } from "@/registry/default/ui/textarea";
import { Button } from "@/registry/default/ui/button";
import { X } from "lucide-react";

export function OpenContactForm() {
  const [active, setActive] = useState<boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-0 right-6 border bg-white lg:hidden items-center justify-center rounded-full"
              onClick={() => setActive(null)}
            >
              <X className="text-black size-4" />
            </motion.button>
            <motion.div
              layoutId={`card-1`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit p-2 flex flex-col  overflow-hidden"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Send us a message and we'll get back to you soon.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={4}
                        required
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    {" "}
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-sm mx-auto gap-4">
        <motion.button
          layoutId={`card-1`}
          onClick={() => setActive(true)}
          className="p-4 cursor-pointer"
        >
          Can&apos;t find your answer? Contact us
        </motion.button>
      </div>
    </>
  );
}
