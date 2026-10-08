import { PiStarFourFill } from "react-icons/pi";

export default function Marquee() {
  const baseWords = [
    "Web Apps",
    "Mobile Apps",
    "Landing Pages",
    "Logos & Brand Kits",
    "Social Creatives",
    "Reels & Shorts",
    "YouTube Edits",
  ];

  // Duplicate the array multiple times to ensure there is NEVER empty space
  // This makes the total width much larger than the screen
  const words = [...baseWords, ...baseWords, ...baseWords, ...baseWords];

  return (
    <section className="bg-brand-lime text-brand-dark py-4 md:py-6 overflow-hidden">
      <div className="animate-pingpong flex whitespace-nowrap items-center w-max">
        {words.map((word, i) => (
          <div key={i} className="flex items-center">
            <span
              className="text-lg md:text-xl lg:text-xl font-medium tracking-tighter px-3
             md:px-6 lg:px-10"
            >
              {word}
            </span>
            {/* Star separator after every word for continuous flow */}
            <span className="text-lg md:text-xl lg:text-xl text-brand-dark flex items-center">
              <PiStarFourFill />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
