import {
  FaUserTie,
  FaInstagram,
  FaPalette,
  FaDatabase,
  FaPlane,
  FaLanguage,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserTie size={28} />,
    title: "Virtual Assistance",
    description:
      "Administrative support, email management, calendar scheduling, research, and workflow organization.",
  },
  {
    icon: <FaInstagram size={28} />,
    title: "Social Media Management",
    description:
      "Content scheduling, account management, engagement, and social media organization.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "Digital Content Creation",
    description:
      "Professional Canva designs, presentations, flyers, social media posts, and branded digital content.",
  },
  {
    icon: <FaDatabase size={28} />,
    title: "Data Entry & Research",
    description:
      "Accurate data entry, Excel, Google Sheets, online research, and database management.",
  },
  {
    icon: <FaPlane size={28} />,
    title: "Travel Planning",
    description:
      "Flight research, hotel booking, itinerary planning, and travel organization.",
  },
  {
    icon: <FaLanguage size={28} />,
    title: "Multilingual Support",
    description:
      "Professional communication in Arabic, French, English, and German for international clients.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto px-6 py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <span className="text-[#4274D9] font-semibold uppercase tracking-widest">
          Services
        </span>

        <h2 className="text-5xl font-bold text-[#293681] dark:text-white mt-4">
          How I Can Help Your Business
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-5 max-w-2xl mx-auto leading-8">
          I provide reliable virtual assistance and digital support that
          helps entrepreneurs stay organized, save time, and focus on
          growing their business.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
  data-aos="fade-up"
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
            <div
              className="
                w-16
                h-16
                rounded-2xl
                bg-[#D0E7E6]
                dark:bg-[#4274D9]
                text-[#293681]
                dark:text-white
                flex
                items-center
                justify-center
                mb-6
                transition-all
                duration-300
              "
            >
              {service.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#293681] dark:text-white mb-4">
              {service.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;