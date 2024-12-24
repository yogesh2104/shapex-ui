"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/registry/default/ui/label";

const ContactTwo = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 bg-gradient-to-br from-primary to-secondary text-white p-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg mb-12">
            We'd love to hear from you. Our friendly team is always here to
            chat.
          </p>
        </motion.div>

        {contactMethods.map((method, index) => (
          <ContactMethod key={method.title} {...method} index={index} />
        ))}
      </div>

      <div className="lg:w-1/2 p-12 bg-background flex items-center justify-center">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Send us a message
          </h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </Label>
              <Input id="name" type="text" required placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
              />
            </div>
            <div>
              <Label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </Label>
              <Textarea
                id="message"
                required
                placeholder="Your message"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

interface contactMthd {
  icon: any;
  title: string;
  content: string;
  link: string;
  index: number;
}

const ContactMethod = ({
  icon: Icon,
  title,
  content,
  link,
  index,
}: contactMthd) => (
  <motion.div
    className="flex items-center mb-8"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
      <Icon className="h-6 w-6" />
    </div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <a
        href={link}
        className="text-sm hover:underline"
        target={title === "Office" ? "_blank" : undefined}
        rel={title === "Office" ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    </div>
  </motion.div>
);

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    content: "example@acme.com",
    link: "mailto:example@acme.com",
  },
  {
    icon: MapPin,
    title: "Office",
    content: "123 Business Avenue",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+0 0000 000-00",
    link: "tel:+0000000000",
  },
];

export default ContactTwo;
