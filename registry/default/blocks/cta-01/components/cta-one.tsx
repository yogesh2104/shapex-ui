import { cn } from "@/registry/default/lib/utils";
import { buttonVariants } from "@/registry/default/ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

const CallToActionOne = () => {
  return (
    <div className="bg-[#151413] p-2 mx-auto flex justify-center items-center h-64 mb-8 rounded-xl mt-5 w-full">
      <div className="text-center max-w-xl">
        <h1 className="text-xl md:text-3xl text-white font-bold mb-6 capitalize">
          {getRandomFromArray()}
        </h1>
        <div
          className={cn(
            `group flex justify-center items-center gap-2`,
            buttonVariants({ variant: "outline" }),
          )}
        >
          <Link href="/debate">Try Now</Link>
          <MoveRight className="size-4 group-hover:-rotate-45 " />
        </div>
      </div>
    </div>
  );
};

export default CallToActionOne;

const callToActionData = [
  "Get Started for Free Today!",
  "Claim Your Exclusive Offer Now!",
  "Discover How It Works – Watch the Demo!",
  "Join Thousands of Happy Customers – Sign Up Now!",
  "Boost Your Results in Just Minutes – Try It Now!",
];

export function getRandomFromArray() {
  return callToActionData[Math.floor(Math.random() * callToActionData.length)];
}
