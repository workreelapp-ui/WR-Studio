// Client reviews shown in the Reviews section. Only reviews with a `quote`
// appear on the live site; in local dev, empty ones show as placeholders so
// it's clear which are still missing. Clients asked us to draft these; each
// one should be approved by that client before it goes live.

export type Review = {
  name: string;
  project: string;
  service: string;
  quote: string;
};

export const reviews: Review[] = [
  { name: "Robbie", project: "Snareobics", service: "Mobile app", quote:
      "WR Studio turned my idea for a drum practice app into something drummers actually enjoy using. They understood what I needed from the exercises and tempo tools straight away, and kept me in the loop the whole way through." },
  { name: "Asif", project: "Siguto", service: "Mobile app", quote:
      "They built Siguto from scratch and made a complicated idea feel simple in the app. Clear communication, quick turnarounds, and I was never left guessing about what was happening next." },
  { name: "Jayke", project: "WorkReel", service: "Mobile app", quote:
      "WR Studio rebuilt WorkReel from the ground up: video, matching, chat, all of it. They think like product people, not just developers, and it shows in the finished app." },
  { name: "Chris", project: "Dr Trilby's Escape Rooms", service: "Website, bookings + artwork", quote:
      "WR Studio built our website, set up online bookings with Resova and designed the artwork for our posters and site. Everything looks like one brand now, and booking a game is quick and easy for our customers." },
  { name: "João", project: "HostyAI", service: "SaaS web app", quote:
      "They understood our product and our users quickly, and turned a lot of moving parts into a SaaS experience that feels clean and easy to use. A team I'd happily work with again." },
  { name: "Crystal", project: "Brandscript", service: "Website", quote:
      "Our new website looks sharp and finally explains what we do clearly. The process was organised, feedback rounds were quick, and the launch went smoothly." },
  { name: "Crystal", project: "Med Tech Mentor", service: "Podcast editing", quote:
      "My podcast episodes look and sound far more professional now. Edits come back on time, and I barely need to give notes anymore." },
  { name: "Bruno Mustone", project: "Clear O2 Marketing", service: "Video + graphics", quote:
      "Fast, reliable and creative. Our videos and graphics finally have a consistent look, and they're always ready when we need them." },
  { name: "Overisa", project: "", service: "Pitch deck editing", quote:
      "They took my pitch deck and made it clear, polished and easy to follow. Exactly what I needed before presenting it." },
];
