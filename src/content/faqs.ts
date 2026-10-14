import type { Faq } from "@/types/content";

// Confirmed client facts or general plumbing knowledge only.
export const faqs: Faq[] = [
  {
    question: "Do you offer emergency plumbing service?",
    answer:
      "Yes. Emergency dispatch is available 24/7, every day. Call (888) 308-3262 any time.",
    categories: ["emergency", "general"],
  },
  {
    question: "What are your business hours?",
    answer:
      "Routine appointments are Monday–Friday 7:00 AM–6:00 PM and Saturday 8:00 AM–4:00 PM. We're closed Sundays for routine appointments, but emergency dispatch runs 24/7, every day.",
    categories: ["general"],
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the Las Vegas valley, including Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin and Sunrise Manor.",
    categories: ["service-area", "general"],
  },
  {
    question: "What plumbing services do you offer?",
    answer:
      "Emergency plumbing, general repair, drain cleaning, hydro jetting, sewer line services and camera inspections, water heater services, leak detection, pipe repair and repiping, fixture repair and installation, water treatment, and commercial plumbing.",
    categories: ["services", "general"],
  },
  {
    question: "How do I request service?",
    answer:
      "Call (888) 308-3262 or fill out the Request Service form on this page. We'll follow up to confirm your request.",
    categories: ["general"],
  },
  {
    question: "What counts as a plumbing emergency?",
    answer:
      "Generally, anything causing active water damage or making the property unsafe or unusable: a burst pipe, a major leak, sewage backing up, no water at all, or a heavily leaking water heater. If you're unsure, call and describe what's happening.",
    categories: ["emergency"],
  },
  {
    question: "What's the difference between drain cleaning and hydro jetting?",
    answer:
      "Drain cleaning (snaking) clears a blockage in the line. Hydro jetting uses high-pressure water to scour the inside of the pipe, which can remove grease and buildup that keeps clogs coming back.",
    categories: ["services"],
  },
  {
    question: "Do you work on both homes and businesses?",
    answer:
      "Yes. We provide residential and commercial plumbing service.",
    categories: ["general", "services"],
  },
  {
    question: "What types of water heaters are there?",
    answer:
      "The two common types are tank water heaters, which store and heat a reservoir of water, and tankless water heaters, which heat water on demand. A technician can help you weigh which fits your property.",
    categories: ["services"],
  },
  {
    question: "What are the signs of a slab leak?",
    answer:
      "Common signs include an unexplained rise in your water bill, the sound of running water when everything is off, warm spots on the floor, damp flooring, or reduced water pressure. Leak detection can confirm the cause.",
    categories: ["services"],
  },
  {
    question: "Do you serve Henderson, Summerlin and other nearby cities?",
    answer:
      "Yes. In addition to Las Vegas, we cover Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin and Sunrise Manor.",
    categories: ["service-area"],
  },
  {
    question: "What should I do while waiting for a plumber in an emergency?",
    answer:
      "If it's safe to do so, shut off the main water valve to stop the flow, turn off the water heater if it's involved, and move belongings away from the water. Then call us for emergency dispatch.",
    categories: ["emergency"],
  },
];

export const locationFaqs = faqs.filter(
  (f) =>
    f.categories.includes("service-area") || f.categories.includes("emergency"),
);
