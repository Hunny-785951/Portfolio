import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, DrawSVGPlugin, ScrollToPlugin);

export * from "gsap";
export { gsap, ScrollTrigger, DrawSVGPlugin, ScrollToPlugin, useGSAP };
export default gsap;
