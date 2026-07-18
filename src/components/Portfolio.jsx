import { useState } from "react";
import ProjectModal from "./ProjectModal";

import eostyle from "../assets/images/portfolio/eostyle.png";
import bookstore from "../assets/images/portfolio/bookstore.png";
import escape from "../assets/images/portfolio/escape.png";

/* Blue Eyes */
/* Blue Eyes */

import blueeyesLogo from "../assets/images/portfolio/blueeyes/logo.png";
import teambuilding from "../assets/images/portfolio/blueeyes/teambuilding.png";

import blueeyesCover from "../assets/images/portfolio/blueeyes/workshop/cover.png";
import workshop1 from "../assets/images/portfolio/blueeyes/workshop/workshop1.png";
import workshop2 from "../assets/images/portfolio/blueeyes/workshop/workshop2.png";
import workshop3 from "../assets/images/portfolio/blueeyes/workshop/workshop3.png";
import workshop4 from "../assets/images/portfolio/blueeyes/workshop/workshop4.png";
import workshop5 from "../assets/images/portfolio/blueeyes/workshop/workshop5.png";

/* Canva */
import flyer from "../assets/images/portfolio/canva/flyer.png";

import presentationCover from "../assets/images/portfolio/canva/presentation/cover.png";
import presentation1 from "../assets/images/portfolio/canva/presentation/presentation1.png";
import presentation2 from "../assets/images/portfolio/canva/presentation/presentation2.png";
import presentation3 from "../assets/images/portfolio/canva/presentation/presentation3.png";

const projects = [
  {
    id: 1,
    title: "EO STYLE",
    category: "Web Development",
    image: eostyle,
    gallery: [eostyle],
    technologies: ["HTML", "CSS", "JavaScript"],
    description:
      "A responsive fashion e-commerce website featuring product browsing, a modern interface, and a user-friendly shopping experience.",
  },

  {
    id: 2,
    title: "BookStore",
    category: "Mobile Application",
    image: bookstore,
    gallery: [bookstore],
    technologies: ["Flutter", "Firebase"],
    description:
      "A mobile application that allows users to browse, search, and manage digital books through a clean and intuitive interface.",
  },

  {
    id: 3,
    title: "Escape Game",
    category: "Educational Technology",
    image: escape,
    gallery: [escape],
    technologies: ["Genially", "Instructional Design"],
    description:
      "An interactive educational escape game designed to increase student engagement through gamification and problem-solving activities.",
  },

  {
    id: 4,
    title: "Blue Eyes Club",
    category: "Social Media Management",
    image: blueeyesLogo,

    gallery: [
      blueeyesLogo,
      blueeyesCover,
      workshop1,
      workshop2,
      workshop3,
      workshop4,
      workshop5,
      teambuilding,
    ],

    technologies: [
      "Canva",
      "Social Media Management",
      "Content Creation",
      "Event Branding",
      "Presentation Design",
    ],

    description:
      "Managed the club's visual identity and digital communication by creating promotional materials, social media content, event branding, presentations, and supporting workshops and student events.",
  },

  {
    id: 5,
    title: "Canva Design Collection",
    category: "Graphic Design",

    image: presentationCover,

    gallery: [
      presentationCover,
      presentation1,
      presentation2,
      presentation3,
      flyer,
    ],

    technologies: [
      "Canva",
      "Presentation Design",
      "Flyer Design",
      "Graphic Design",
    ],

    description:
      "A collection of Canva designs created for educational institutions, student organizations, workshops, and promotional campaigns with a focus on clean, engaging, and professional visual communication.",
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="portfolio"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <span className="uppercase tracking-widest text-[#4274D9] font-semibold">
          Portfolio
        </span>

        <h2 className="text-5xl font-bold text-[#293681] dark:text-white mt-4">
          Selected Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
          A selection of projects showcasing my experience in web development,
          mobile applications, educational technology, social media management,
          and graphic design.
        </p>
      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
  data-aos="fade-up"
  data-aos-delay={project.id * 100}
            className="group bg-white dark:bg-[#1B1B1B] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            <div className="p-8">
              <p className="uppercase tracking-widest text-sm text-[#4274D9] font-semibold">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mt-3 text-[#293681] dark:text-white">
                {project.title}
              </h3>

              <p className="mt-5 text-gray-600 dark:text-gray-300 leading-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[#D0E7E6] text-[#293681] px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="mt-8 text-[#4274D9] font-semibold hover:translate-x-2 transition"
              >
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}

      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Portfolio;