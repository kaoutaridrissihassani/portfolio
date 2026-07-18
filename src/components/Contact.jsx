import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { SiWechat } from "react-icons/si";
import { useState } from "react";
import WeChatModal from "./WeChatModal";
import wechatQR from "../assets/images/wechat-qr.png";

function Contact() {
  const [openQR, setOpenQR] = useState(false);

  const contacts = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "kaoutaridrissihassani@gmail.com",
      link: "mailto:kaoutaridrissihassani@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/kaoutar-idrissi-hassani-758109220",
      link: "https://www.linkedin.com/in/kaoutar-idrissi-hassani-758109220/",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/kaoutaridrissihassani",
      link: "https://github.com/kaoutaridrissihassani",
    },
    {
      icon: <SiWechat />,
      title: "WeChat",
      value: "Scan QR Code",
      action: () => setOpenQR(true),
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "+212 703 969 612",
      link: "https://wa.me/212703969612",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Based in China • Available Worldwide",
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-28 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="text-center mb-16">
        <span className="text-[#4274D9] font-semibold uppercase tracking-widest">
          Contact
        </span>

        <h2 className="text-5xl font-bold text-[#293681] dark:text-white mt-4">
          Let's Work Together
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto leading-8">
          Have a project in mind? I'm available for freelance opportunities and
          would love to help you organize your business, manage your workflow,
          and create professional digital content.
        </p>

        <div className="inline-flex items-center gap-2 mt-8 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-5 py-2 rounded-full font-medium">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          Available for Freelance Projects
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contacts.map((item, index) => (
          <div
            key={index}
  data-aos="zoom-in"
  data-aos-delay={index * 100}
            onClick={item.action}
            className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 rounded-3xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl hover:border-[#4274D9] transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#D0E7E6] dark:bg-[#4274D9] flex items-center justify-center text-[#293681] dark:text-white text-2xl mb-6">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold text-[#293681] dark:text-white mb-3">
              {item.title}
            </h3>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-[#4274D9] break-all transition"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="mailto:kaoutaridrissihassani@gmail.com"
          className="inline-block bg-[#293681] hover:bg-[#4274D9] text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          Start a Project
        </a>
      </div>

      <WeChatModal
        isOpen={openQR}
        onClose={() => setOpenQR(false)}
        qr={wechatQR}
      />
    </section>
  );
}

export default Contact;