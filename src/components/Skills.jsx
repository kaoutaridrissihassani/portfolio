import {
  FaLaptopCode,
  FaPalette,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      icon: <FaBriefcase size={35} />,
      title: "Virtual Assistance",
      items: [
        "Email Management",
        "Calendar Scheduling",
        "Data Entry",
        "Travel Planning",
      ],
    },
    {
      icon: <FaPalette size={35} />,
      title: "Design & Content",
      items: [
        "Canva Design",
        "Social Media",
        "Presentations",
        "Video Editing",
      ],
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Web Development",
      items: [
        "React",
        "HTML & CSS",
        "JavaScript",
        "Flutter",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <span className="text-[#4274D9] font-semibold uppercase tracking-widest">
          Skills
        </span>

        <h2 className="text-5xl font-bold text-[#293681] dark:text-white mt-4">
          My Skills
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl mx-auto leading-8">
          A combination of technical, creative, and organizational skills to
          support businesses efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
  data-aos="zoom-in"
  data-aos-delay={index * 100}
            className="
              bg-white
              dark:bg-slate-800
              rounded-3xl
              p-8
              border
              border-gray-100
              dark:border-slate-700
              shadow-sm
              hover:-translate-y-2
              hover:shadow-2xl
              hover:border-[#4274D9]
              transition-all
              duration-300
            "
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D0E7E6] dark:bg-[#4274D9] text-[#293681] dark:text-white flex items-center justify-center mb-6">
              {skill.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#293681] dark:text-white mb-6">
              {skill.title}
            </h3>

            <ul className="space-y-4">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-gray-600 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-[#4274D9]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;