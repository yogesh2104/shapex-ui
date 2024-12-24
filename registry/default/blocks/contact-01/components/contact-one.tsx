import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactForm() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "123 Business Avenue",
      subContent: "Suite 100, Enterprise City",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "example@acme.com",
      subContent: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "0000 000 000",
      subContent: "Mon-Fri 9AM-6PM",
    },
    {
      icon: MessageCircle,
      title: "How Can We Help?",
      content: "Tell us your problem",
      subContent: "We will get back to you ASAP",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-2rem)] rounded-xl bg-gradient-to-b from-gray-900 to-gray-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold leading-7 text-blue-400">
            CONTACT US
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s Solve This Together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <item.icon className="h-6 w-6 text-blue-400" />
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{item.content}</p>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.subContent}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Card className="backdrop-blur-sm bg-gray-800/50 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-white mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                {["name", "email", "message"].map((field) => (
                  <div
                    key={field}
                    className={`transition-all duration-300`}
                  >
                    <label
                      htmlFor={field}
                      className="text-sm font-medium text-gray-300 mb-2 block"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}*
                    </label>
                    {field === "message" ? (
                      <Textarea
                        id={field}
                        name={field}
                        placeholder={`Enter your ${field}`}
                        required
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 min-h-[160px] focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    ) : (
                      <Input
                        id={field}
                        name={field}
                        type={field === "email" ? "email" : "text"}
                        placeholder={`Enter your ${field}`}
                        required
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    )}
                  </div>
                ))}

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
