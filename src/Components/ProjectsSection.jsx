import React from "react";

function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Web App",
      description:
        "A modern online store built with React and Tailwind CSS, featuring a functional shopping cart.",
      tags: ["React", "Tailwind", "Node.js"],
      github: "https://github.com/jackson-tuyikunde/project1",
      demo: "https://project-demo.com",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal professional space showcasing my skills in web development and UI/UX design.",
      tags: ["JSX", "Animations", "Grid"],
      github: "https://github.com/jackson-tuyikunde/portfolio",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-34 px-6 md:px-16 md:py-50 bg-white text-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Featured <span className="text-green-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium">
            A selection of my recent work and experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 p-6 shadow-md hover:shadow-xl transition duration-300 bg-gray-50"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-green-500"
                >
                  GitHub →
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-gray-800 hover:text-green-500"
                >
                  Live Demo →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 font-medium">
            Want to see more of my work?
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://github.com/Jackson-tj74"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-green-500 transition"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tuyikunde-jackson"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-black rounded-lg font-semibold hover:border-green-500 hover:text-green-500 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;