import Marquee from "./marquee";
import Image from "next/image";

const Logo = () => {
  return (
    <section id="logos">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500">
          TRUSTED BY LEADING TEAMS
        </h3>
        <div className="relative mt-6">
          <Marquee pauseOnHover className="max-w-full">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((img, idx) => (
              <Image
                key={idx}
                width={112}
                height={40}
                src={`/logo/logo-${img}.svg`}
                className="h-10 w-28 dark:brightness-100 mr-2"
                alt={`logo-${img}.svg`}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
