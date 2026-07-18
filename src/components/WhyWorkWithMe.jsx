import {
  FaClock,
  FaComments,
  FaTasks,
  FaLightbulb,
} from "react-icons/fa";

const features = [
  {
    icon: <FaClock size={32} />,
    title: "On-Time Delivery",
    description:
      "I respect deadlines and ensure every task is completed on time without compromising quality.",
  },
  {
    icon: <FaComments size={32} />,
    title: "Clear Communication",
    description:
      "You'll always stay updated with fast responses and transparent communication throughout every project.",
  },
  {
    icon: <FaTasks size={32} />,
    title: "Well Organized",
    description:
      "From email management to project organization, I keep everything structured and easy to manage.",
  },
  {
    icon: <FaLightbulb size={32} />,
    title: "Creative Problem Solving",
    description:
      "I enjoy finding practical solutions and creating professional digital content tailored to your needs.",
  },
];

function WhyWorkWithMe() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">

        <span className="uppercase tracking-widest text-[#4274D9] font-semibold">
          Why Work With Me
        </span>

        <h2 className="text-5xl font-bold text-[#293681] dark:text-white mt-4">
          Reliable Support You Can Count On
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto leading-8">
          I combine organization, creativity, and technical skills to help
          entrepreneurs and businesses save time and work more efficiently.
        </p>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#1B1B1B] rounded-3xl shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
          >

            <div className="w-16 h-16 rounded-2xl bg-[#D0E7E6] text-[#293681] flex items-center justify-center mx-auto mb-6">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold text-[#293681] dark:text-white mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyWorkWithMe;