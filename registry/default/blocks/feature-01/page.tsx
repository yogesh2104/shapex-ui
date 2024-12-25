import FeatureOne from "@/registry/default/blocks/feature-01/components/feature-one";
import { Eye, PackageSearch, Settings } from "lucide-react";

export default function Page() {
  const data = [
    {
      id: 1,
      title: "1. Choose Your Component",
      content:
        "Select the component that best suits your needs from Eldora UI's versatile collection, designed to simplify and enhance your development process.",
      image: "/placeholder.svg",
      icon: <PackageSearch className="size-6 text-primary" />,
    },
    {
      id: 2,
      title: "2. Add Utility Helpers",
      content:
        "Enhance functionality by incorporating utility helpers that align with the selected component, ensuring seamless integration and customization.",
      image: "/placeholder.svg",
      icon: <Settings className="size-6 text-primary" />,
    },
    {
      id: 3,
      title: "3. Copy and Paste the Code",
      content:
        "Simply copy and paste the provided code into your project, making the process quick and hassle-free. You're now ready to see the magic in action!",
      image: "/placeholder.svg",
      icon: <Eye className="size-6 text-primary" />,
    },
  ];

  return <FeatureOne data={data} />;
}
