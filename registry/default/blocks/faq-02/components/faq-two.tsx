import { Badge } from "@/registry/default/ui/badge";
import { Input } from "@/registry/default/ui/input";
import { Search } from "lucide-react";
import { FAQ_SECTIONS } from "./data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/default/blocks/faq-02/components/accordion";

const FAQTwo = () => {
  return (
    <div className="w-full mx-auto p-6">
      <div className=" rounded-lg border p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="mb-4">
          <Badge
            variant={"outline"}
            className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium"
          >
            FAQs
          </Badge>
        </div>

        <h1 className="text-4xl font-mono font-medium mb-6">
          What can we help you find?
        </h1>

        <div className="relative max-w-md">
          <Input
            type="text"
            className="w-full px-10 py-2 border rounded-md"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {FAQ_SECTIONS?.map((faq) => (
          <Accordion key={faq?.id} type="multiple" defaultValue={[faq.id]}>
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQTwo;
