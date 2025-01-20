import Link from "next/link";
import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import { Facebook, Linkedin } from "lucide-react";
import X from "@/components/X";

interface TeamMember {
  name: string;
  role: string;
  roleColor: string;
  bio: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Emma Watson",
    role: "Founder & CEO",
    roleColor: "text-blue-500",
    bio: "Used to work at IBM but quit because of robotz.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
  {
    name: "Liam Brown",
    role: "Lead Design",
    roleColor: "text-blue-500",
    bio: "Hello, I like not doing anything at all. Let's DM.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Sophia Davis",
    role: "Lead Engineering",
    roleColor: "text-blue-500",
    bio: "Prodigy with record-breaking 176 IQ and many awards.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Noah Wilson",
    role: "Lead Finance",
    roleColor: "text-blue-500",
    bio: "Hello, I like money. It is the only purpose of in my life.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    name: "Isabella Martinez",
    role: "Janitor",
    roleColor: "text-blue-500",
    bio: "I'm just here to clean the floor, that's all. Nothing special.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    name: "James Anderson",
    role: "Marketing Department",
    roleColor: "text-blue-500",
    bio: "I don't choose this job. It choose me. Do you get it?",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    name: "Mai Senpai",
    role: "Human Resources",
    roleColor: "text-blue-500",
    bio: "I like managing people and controlling them.",
    image: "/placeholder.svg",
  },
  {
    name: "Saylor Twift",
    role: "Middle Management",
    roleColor: "text-blue-500",
    bio: "Ex-Singer but decided to work on startups.",
    image: "/placeholder.svg",
  },
];

const TeamOne = () => {
  return (
    <div className=" w-full p-6 bg-gradient-to-t from-white via-blue-50 to-pink-600 flex items-center justify-center">
      <div className="p-2 bg-pink-300 rounded-3xl">
        <div className="bg-white rounded-3xl  p-8 max-w-7xl w-full">
          <div className="mb-8">
            <p className="text-pink-700 font-medium mb-4">We&apos;re Hiring!</p>
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <h1 className="text-4xl font-bold text-gray-900">
                Let&apos;s Meet Our Team
              </h1>
              <div className="flex gap-2">
                <Button variant="outline" className="rounded-full">
                  About Us
                </Button>
                <Button className="rounded-full text-white bg-blue-600 hover:bg-blue-700">
                  Job Openings
                </Button>
              </div>
            </div>
            <p className="text-gray-500 max-w-2xl">
              Gravida in fermentum et sollicitudin ac orci phasellus egestas.
              Molestie a iaculis at erat pellentesque adipiscing commodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 relative w-40 h-40">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className={`${member.roleColor} font-medium mb-2`}>
                  {member.role}
                </p>
                <p className="text-gray-500 mb-4">{member.bio}</p>
                <div className="flex items-center gap-2">
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <X width={16} height={16} className="" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
