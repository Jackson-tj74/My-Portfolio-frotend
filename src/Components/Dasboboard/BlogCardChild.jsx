import React from "react";
import BlogSection from "./BlogSection";

const blogs = [
  {
    id: 1,
    title: "Understanding React Hooks",
    author: "Jackson",
    date: "2026-03-25",
    shortDesc: "Learn how React hooks can simplify your components and state management.",
    link: "#"
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    author: "Jackson",
    date: "2026-03-20",
    shortDesc: "Boost your productivity using Tailwind CSS for building modern UI fast.",
    link: "#"
  },
  {
    id: 3,
    title: "Portfolio Dashboard Design",
    author: "Jackson",
    date: "2026-03-18",
    shortDesc: "Step-by-step guide to designing a clean and modern portfolio dashboard.",
    link: "#"
  },
];

export default function BlogSectionI() {
  return (
    <div className="px-6 md:px-10">
      <BlogSection blogs={blogs} />
    </div>
  );
}