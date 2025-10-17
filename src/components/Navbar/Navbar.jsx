import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },

    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-black"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Sidharth</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Sankar</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <a
                  href={`#${item.id}`}
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`cursor-pointer hover:text-[#8245ec] ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/ssidharthsankar03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-sidharth-sankar-5897b7230/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] z-50 rounded-lg shadow-lg">
            {/* Logo */}
            <div className="flex justify-center py-4">
              <span className="text-[#8245ec]">&lt;</span>
              <span className="text-white">Sidharth</span>
              <span className="text-[#8245ec]">/</span>
              <span className="text-white">Sankar</span>
              <span className="text-[#8245ec]">&gt;</span>
            </div>

            {/* Mobile Menu Items */}
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleMenuItemClick(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 py-4">
              <a
                href="https://github.com/ssidharthsankar03"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/s-sidharth-sankar-5897b7230/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
