import React from "react";
import { Send, Mail } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/registry/default/ui/badge";
import { UserImage } from "./user-image";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const NewsletterTwo = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-y-0 -left-4 w-1/2 bg-gradient-to-r from-blue-50 to-transparent" />
        <div className="absolute top-0 left-1/2 w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 rotate-45 bg-blue-50" />
      </div>

      <div className="relative px-4 py-16 mx-auto sm:px-6 lg:px-8 max-w-7xl sm:py-24">
        <div className="grid items-center max-w-5xl grid-cols-1 mx-auto lg:grid-cols-2 gap-y-12 lg:gap-x-16">
          <div className="lg:order-2">
            <div className="text-center lg:text-left">
              <Badge
                variant={"outline"}
                className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-600 rounded-full bg-blue-50"
              >
                <Mail className="w-4 h-4 mr-2" />
                Newsletter
              </Badge>

              <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 sm:text-xl lg:text-3xl">
                Delivering in-depth analysis industry-specific developments.
              </h2>

              <p className="mt-4 text-lg text-gray-600">
                Get updates on new design, UX laws, technology news, valuable
                resources, and expert tips to stay ahead.
              </p>

              <form className="mt-8 space-y-4 sm:space-y-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                  <div className="relative flex-1">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="shadow-lg w-full rounded-lg px-4 py-3 h-12 focus-visible:ring-0 text-black border-0 bg-white focus-visible:ring-offset-0 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3 mt-4 sm:mt-0 text-base font-medium text-white bg-blue-600 border border-transparent rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    Subscribe
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
              <p className="text-xs mt-2 text-gray-600">
                By subscribing, you agree to our{" "}
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline">
                  Terms and Conditions
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-normal items-center mt-8">
              <div className="flex items-center  justify-center lg:justify-start">
                <UserImage items={people} />
              </div>
              <p className="ml-4 text-sm font-medium text-gray-500">
                <span className="text-gray-900">Over 10K professionals</span>
                <br /> have already subscribed.
              </p>
            </div>
          </div>

          <div className="lg:order-1">
            <div className="overflow-hidden rounded-xl bg-white shadow-xl">
              <img
                className="w-full h-full object-cover"
                src="https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI"
                alt="Stay connected with our newsletter"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterTwo;
