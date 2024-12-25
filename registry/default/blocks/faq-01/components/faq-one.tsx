"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/registry/default/blocks/faq-01/components/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import { Badge } from "@/registry/default/ui/badge";
import { FAQ_SECTIONS, FAQItem, ViewType } from "./data";

interface FAQAccordionProps {
  category: string;
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ category, items }) => (
  <div className="">
    <Badge variant={"outline"} className="py-2 px-6 rounded-md">
      {category}
    </Badge>
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

export default function FAQSection() {
  const [activeView, setActiveView] = useState<ViewType>("general");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-2">FAQs</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently asked questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Need help with something? Here are our most frequently asked
          questions.
        </p>
      </header>

      <div className="flex justify-center sticky top-2">
        <Tabs
          defaultValue="general"
          onValueChange={(value) => setActiveView(value as ViewType)}
          className="mb-8 max-w-xl border rounded-xl bg-background"
        >
          <TabsList className="w-full justify-start h-12 p-1">
            <TabsTrigger value="general">General FAQs</TabsTrigger>
            <TabsTrigger value="icons">Untitled UI Icons</TabsTrigger>
            <TabsTrigger value="library">Webflow Library</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <FAQAccordion
        category={FAQ_SECTIONS[activeView].category}
        items={FAQ_SECTIONS[activeView].items}
      />
    </div>
  );
}
