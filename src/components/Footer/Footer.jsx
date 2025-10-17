import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">
          S Sidharth Sankar
        </h2>
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },

            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>
        {/* Social Media Icons */}

        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaFacebook />,
              link: "https://m.facebook.com/triples.01/",
            },
            {
              icon: <FaTwitter />,
              link: "https://x.com/Sidhart21712931?t=5RYOGKKc_FHMLUrrax2K-g&s=09",
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/s-sidharth-sankar-5897b7230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/itz_sid_here_03?igsh=MXNidW9vNmFjcjkwMQ==",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      {/* Copyright */}

      <p className="text-sm text-gray-400 mt-6 flex justify-center items-center">
        © 2025 S Sidharth Sankar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
