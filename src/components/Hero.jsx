import profile from "../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto pt-36 px-6 grid lg:grid-cols-2 gap-16 items-center min-h-screen"
    >
      {/* Left Side */}
      <div  data-aos="fade-right">
        <span className="inline-block bg-[#D0E7E6] dark:bg-[#4274D9] text-[#293681] dark:text-white px-4 py-2 rounded-full font-medium">
          Virtual Assistant
        </span>

        <h1 className="text-5xl lg:text-6xl font-bold mt-8 leading-tight text-[#293681] dark:text-white">
          Helping Businesses
          <br />
          Stay Organized
          <br />
          & Grow Online
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mt-8 text-lg leading-8 max-w-xl">
          I help entrepreneurs save time by managing administrative tasks,
          organizing workflows, and creating professional digital content.
        </p>

        <div className="flex flex-wrap gap-4 mt-32">
          <a
            href="#contact"
            className="bg-[#293681] hover:bg-[#4274D9] text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </a>

          <a
            href="#portfolio"
            className="border-2 border-[#293681] dark:border-white text-[#293681] dark:text-white px-8 py-4 rounded-full hover:bg-[#293681] hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex justify-center"
  data-aos="fade-left">
        <div className="relative">
          {/* Background Decoration */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#95CCDD] to-[#4274D9] blur-3xl opacity-20"></div>

          <img
            src={profile}
            alt="Kaoutar Idrissi"
            className="relative w-[380px] h-[500px] object-cover rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;