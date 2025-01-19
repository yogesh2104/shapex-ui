"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { OpenContactForm } from "./open-contact-form";

const FAQ_SECTIONS = [
  {
    question: "What is ShapeX UI?",
    answer:
      "ShapeX UI is a comprehensive design system and UI kit that helps designers and developers create consistent, beautiful interfaces.",
  },
  {
    question: "Why do I need a UI kit?",
    answer:
      "A UI kit helps maintain consistency across your projects, speeds up your workflow, and ensures best practices in design and development.",
  },
  {
    question: "What is this UI library, and what does it offer?",
    answer:
      "This UI library is built on top of ShadCN UI and includes 30+ pre-designed components such as headers, footers, login forms, sign-up forms, FAQs, CTAs, contact sections, and more. It allows developers to quickly build high-quality user interfaces with ease.",
  },
  {
    question: "Is this library compatible with my project’s tech stack?",
    answer:
      "Yes, the library is compatible with modern JavaScript frameworks like React.js and Next.js. It is designed to integrate seamlessly with Tailwind CSS, as it is built on ShadCN UI principles.",
  },
];


const FAQThree: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-b">
      <div className="container mx-auto px-4">
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </CardTitle>
            <p className="mt-4 text-lg text-gray-300">
              Explore common questions about AuraUI
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-8 mt-8">
            {FAQ_SECTIONS.map((faq, faqIndx) => (
              <div key={faqIndx} className="mb-8">
                <Accordion
                  type="multiple"
                  className="w-full"
                  defaultValue={[faq.question]}
                >
                  <AccordionItem value={faq.question}>
                    <AccordionTrigger className="text-white hover:text-primary hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="mt-12 text-center">
          <OpenContactForm />
        </div>
      </div>
    </section>
  );
};

export default FAQThree;
