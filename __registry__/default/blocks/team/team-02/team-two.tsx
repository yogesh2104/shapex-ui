import { Button } from "@/registry/default/ui/button";
import { TeamCard } from "./team-card";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
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
  {
    name: "Mai Senpai",
    role: "Human Resources",
    imageUrl: "/placeholder.svg",
  },
  {
    name: "Saylor Twift",
    role: "Middle Management",
    imageUrl: "/placeholder.svg",
  },
];

const Team = () => {
  return (
    <div className="">
      <div className="p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="text-center mb-10">
          <h1 className="mb-12 text-lg font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl">
            We are designers, developers,and dreamers
            <br />
            united by our passion for creating
            <br />
            exceptional user experiences.
          </h1>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="lg">
              Browser Components
            </Button>
          </div>
        </div>
      </div>
      <div className="-mt-10 p-2 flex justify-center">
        <div className="max-w-xl md:max-w-3xl  grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;