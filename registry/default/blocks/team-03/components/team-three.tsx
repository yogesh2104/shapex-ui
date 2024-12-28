"use client";
import Image from "next/image";
import Marquee from "./marquee";
import { useEffect, useState } from "react";

const teamMembers = [
  {
    name: "Liam Brown",
    role: "Founder & CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Emma Watson",
    role: "Lead Design",
    imageUrl:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    name: "Sophia Davis",
    role: "Lead Engineering",
    imageUrl:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Noah Wilson",
    role: "Lead Finance",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Isabella Martinez",
    role: "Janitor",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "James Anderson",
    role: "Marketing Department",
    imageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
];

const TeamCard = ({
  name,
  role,
  imageUrl,
}: {
  name: string;
  role: string;
  imageUrl: string;
}) => {
  return (
    <div className="w-60 mx-auto rounded-xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 bg-white dark:bg-gray-800">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 hover:opacity-90"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
      </div>
    </div>
  );
};

const TeamThree = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const firstRow = teamMembers.slice(0, teamMembers.length / 2);
  const secondRow = teamMembers.slice(teamMembers.length / 2);

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              We are designers, developers, and dreamers united by our passion
              for creating exceptional user experiences. At ShapeX UI, we
              believe that great interfaces are born from the perfect blend of
              innovation, intuition, and attention to detail.
            </p>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300">
              Join Our Team
            </button>
          </div>
          <div className=" flex h-[30rem] flex-row items-center justify-center overflow-hidden rounded-lg bg-secondary gap-6 md:shadow-xl w-full">
            <Marquee pauseOnHover vertical className="[--duration:20s] ">
              {firstRow.map((review) => (
                <TeamCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee
              reverse
              pauseOnHover
              vertical
              className="[--duration:20s]  "
            >
              {secondRow.map((review) => (
                <TeamCard key={review.name} {...review} />
              ))}
            </Marquee>
            <Marquee pauseOnHover vertical className="[--duration:20s] ">
              {secondRow.map((review) => (
                <TeamCard key={review.name} {...review} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamThree;
