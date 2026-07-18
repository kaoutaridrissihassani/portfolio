import { FaLaptopCode, FaClock, FaGlobe } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      {/* Left Side */}
      <div data-aos="fade-right">
        <span className="text-[#4274D9] font-semibold uppercase tracking-widest">
          About Me
        </span>

        <h2 className="text-5xl font-bold mt-4 text-[#293681] dark:text-white">
          Your Reliable
          <br />
          Virtual Assistant
        </h2>

        <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8 text-lg">
          I'm <strong>Kaoutar Idrissi Hassani</strong>, a Virtual Assistant
          helping entrepreneurs and small businesses save time by handling
          administrative tasks, organizing workflows, managing emails,
          creating Canva designs, and supporting social media management.
        </p>

        <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-lg">
          My goal is simple: reduce your workload so you can focus on growing
          your business while I take care of the details.
        </p>

        <p className="mt-8 text-gray-600 dark:text-gray-300 leading-8 text-lg"><strong>✓ ALX Certified Virtual Assistant</strong></p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-[#293681] hover:bg-[#4274D9] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="grid gap-6"
  data-aos="fade-left">

        <div className="bg-white dark:bg-slate-800 p-7 rounded-3xl shadow-md dark:shadow-none border border-gray-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#D0E7E6] dark:bg-[#4274D9] flex items-center justify-center">
              <FaLaptopCode className="text-2xl text-[#293681] dark:text-white" />
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#293681] dark:text-white">
                Administrative Support
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-7">
                Email management, scheduling, research, document preparation,
                and accurate data entry.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-7 rounded-3xl shadow-md dark:shadow-none border border-gray-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#D0E7E6] dark:bg-[#4274D9] flex items-center justify-center">
              <FaClock className="text-2xl text-[#293681] dark:text-white" />
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#293681] dark:text-white">
                Time Saving
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-7">
                I handle your daily tasks so you can focus on growing your
                business and serving your clients.
                
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-7 rounded-3xl shadow-md dark:shadow-none border border-gray-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
          <div className="flex gap-5 items-start">
            <div className="w-14 h-14 rounded-2xl bg-[#D0E7E6] dark:bg-[#4274D9] flex items-center justify-center">
              <FaGlobe className="text-2xl text-[#293681] dark:text-white" />
            </div>

            <div>
              <h3 className="font-bold text-xl text-[#293681] dark:text-white">
                Worldwide Remote Support
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mt-2 leading-7">
                Available to collaborate remotely with clients and businesses
                around the world.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;