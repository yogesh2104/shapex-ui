"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const FloatingIcon = ({
  children,
  initialX,
}: {
  children: React.ReactNode;
  initialX: number;
}) => {
  const [isClient, setIsClient] = useState(false);
  const controls = useAnimation();

  const startFloating = async () => {
    if (isClient) {
      while (true) {
        await controls.start({
          x: initialX + Math.random() * 30 - 15,
          y: Math.random() * 30 - 15,
          transition: {
            duration: 3,
            ease: "easeInOut",
          },
        });
      }
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  startFloating();

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragConstraints={{
        top: -200,
        left: -200,
        right: 200,
        bottom: 200,
      }}
      whileDrag={{ scale: 1.1 }}
      initial={{ x: initialX, y: 0 }}
      animate={controls}
      className="cursor-move"
    >
      {children}
    </motion.div>
  );
};

const SocialIcon = ({
  icon: Icon,
  color,
  ...props
}: {
  icon: typeof Facebook;
  color: string;
  [key: string]: any;
}) => (
  <div
    className={`p-3 rounded-full ${color} shadow-lg hover:shadow-xl transition-shadow`}
  >
    <Icon className="w-6 h-6 text-white" />
  </div>
);

const NewsletterOne = () => {
  return (
    <div className="relative py-10 bg-gray-50 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
          Whatever you make grow your business by email marketing.
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Engage your customers and boost your business with Mailchimp's
          advanced, yet easy-to-use marketing platform.
        </p>

        <div className="text-center mx-auto mb-12 max-w-lg">
          <div className="relative ">
            <Input
              type="email"
              placeholder="Type your email"
              className="shadow-lg h-12 focus-visible:ring-0 text-black border-0 bg-white focus-visible:ring-offset-0"
            />
            <Button
              size="sm"
              className="absolute text-white top-[6px] right-1 bg-blue-500 hover:bg-blue-600"
            >
              Get Start now
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-8 relative h-16">
          <FloatingIcon initialX={-150}>
            <SocialIcon icon={Facebook} color="bg-blue-500" />
          </FloatingIcon>
          <FloatingIcon initialX={-50}>
            <SocialIcon icon={Twitter} color="bg-blue-400" />
          </FloatingIcon>
          <FloatingIcon initialX={50}>
            <SocialIcon icon={Instagram} color="bg-pink-500" />
          </FloatingIcon>
          <FloatingIcon initialX={150}>
            <SocialIcon icon={Mail} color="bg-red-500" />
          </FloatingIcon>
        </div>
      </div>
    </div>
  );
};

export default NewsletterOne;
