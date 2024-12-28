import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

export function TeamCard({ name, role, imageUrl }: TeamMemberProps) {
  return (
    <div className="group relative cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-blue-600 mix-blend-color" />
        <Image
          src={imageUrl}
          alt={`${name}, ${role}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm md:text-md font-semibold">{name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{role}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </div>
  );
}
