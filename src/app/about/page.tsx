import { redirect } from "next/navigation";

// There's no separate About page; send old links to the homepage.
export default function AboutPage() {
  redirect("/");
}
