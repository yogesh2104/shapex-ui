import { Star } from "lucide-react";

interface TestimonialCardProps {
  image: string;
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({
  image,
  quote,
  author,
  role,
}: TestimonialCardProps) {
  return (
    <div className="relative h-[300px] sm:h-[350px] md:h-[500px] w-full overflow-hidden bg-[#f5f0eb] rounded-lg shadow-md">
      <div className="absolute md:max-w-lg lg:max-w-full inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-6 md:mb-16">
            Testimonial
          </h2>

          <div className="relative z-10 bg-white p-4 md:max-w-xl xl:max-w-sm sm:p-6 rounded-sm shadow-sm">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">{quote}</p>
            <div className="text-gray-600 flex items-center justify-between">
              <div className="order-last">
                <p className="font-medium text-sm sm:text-base">{author}</p>
                <p className="text-xs sm:text-sm">{role}</p>
              </div>
              <img
                src={image}
                alt={`${author} avatar`}
                className="w-12 order-1 h-12 sm:w-16 sm:h-16 md:hidden block object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 right-0 w-[55%] h-full hidden md:block"
        style={{
          clipPath:
            "polygon(68% 0, 100% 0, 100% 49%, 100% 100%, 66% 100%, 16% 51%, 16% 52%)",
        }}
      >
        <img
          src={image}
          alt={`${author} background`}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
