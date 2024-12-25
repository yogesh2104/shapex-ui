"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FAQ_SECTIONS } from "./data";
import { OpenContactForm } from "./open-contact-form";

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
