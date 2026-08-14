import { PiStarFourFill } from "react-icons/pi";

export default function Marquee() {
  const baseWords = [
    "Product Design",
    "Web Development",
    "Mobile Apps",
    "AI Automation",
    "Brand Systems",
  ];

  // Duplicate the array multiple times to ensure there is NEVER empty space
  // This makes the total width much larger than the screen
  const words = [...baseWords, ...baseWords, ...baseWords, ...baseWords];

  return (
    <section className="bg-[#D6FF43] text-[#0B0D12] py-4 md:py-6 overflow-hidden">
      <div className="animate-pingpong flex whitespace-nowrap items-center w-max">
        {words.map((word, i) => (
          <div key={i} className="flex items-center">
            <span className="text-xl md:text-2xl font-medium tracking-tighter px-6 md:px-10">
              {word}
            </span>
            {/* Star separator after every word for continuous flow */}
            <span className="text-xl md:text-2xl text-[#0B0D12] flex items-center">
              <PiStarFourFill />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
