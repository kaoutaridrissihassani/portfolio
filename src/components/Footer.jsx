import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer data-aos="fade-up" className="bg-[#293681] dark:bg-slate-950 text-white mt-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              KI Studio
            </h2>

            <p className="text-[#D0E7E6] leading-8">
              Virtual Assistant & Digital Creator helping entrepreneurs,
              startups, and businesses stay organized, save time, and grow
              through professional digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-[#95CCDD] transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-[#95CCDD] transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-[#95CCDD] transition">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="hover:text-[#95CCDD] transition">
                  Skills
                </a>
              </li>

              <li>
                <a href="#portfolio" className="hover:text-[#95CCDD] transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-[#95CCDD] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Let's Connect
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/kaoutaridrissihassani"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4274D9] transition-all duration-300 hover:scale-110"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/kaoutar-idrissi-hassani-758109220"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4274D9] transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:kaoutaridrissihassani@gmail.com"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4274D9] transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope size={22} />
              </a>

              <a
                href="https://wa.me/212703969612"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4274D9] transition-all duration-300 hover:scale-110"
              >
                <FaWhatsapp size={22} />
              </a>

            </div>

            <p className="text-[#D0E7E6] mt-6 leading-7">
              Let's build something amazing together.
            </p>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-[#D0E7E6] text-center md:text-left">
            © {new Date().getFullYear()} KI Studio. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-5 md:mt-0 w-12 h-12 rounded-full bg-[#4274D9] hover:bg-[#95CCDD] hover:text-[#293681] transition-all duration-300 hover:scale-110 flex items-center justify-center"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;