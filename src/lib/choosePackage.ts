import { scroller } from "react-scroll";
import { SELECT_PACKAGE_EVENT, type SelectPackageDetail, type TierName } from "@/lib/packages";

// Pre-selects a package in the Contact form and scrolls to it. Kept out of
// packages.ts because that file is also imported by the server route.
export function choosePackage(service: string, tier?: TierName) {
  window.dispatchEvent(
    new CustomEvent<SelectPackageDetail>(SELECT_PACKAGE_EVENT, { detail: { service, tier } }),
  );
  scrollToSection("contact");
}

export function scrollToSection(id: string) {
  scroller.scrollTo(id, { smooth: true, duration: 500 });
}
