import { Button } from "@/registry/default/ui/button";
import { Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/registry/default/ui/card";

const CallToActionOne = () => {
  return (
    <section id="community">
      <div className="container py-10">
        <div className=" mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-2xl md:text-5xl font-bold flex flex-col items-center">
                <Github className="size-16 mb-4" />
                <div>We welcome everyone to join
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[60%] text-xl text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore cupiditate veniam sapiente maxime.
            </CardContent>

            <CardFooter className="flex gap-5">
              <Button asChild  className="rounded-full" size="lg"><a href="https://github.com/yogesh2104/shapex-ui" target="_blank">Fork on Github</a></Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToActionOne;

