

import { useState } from "react"
import { FaBars, FaTimes, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = ["Home", "About", "Services", "Portfolio", "Contact"]

  return (
    <div className="container mx-auto bg-[#1B1B1B] px-4 sm:px-[95px] py-[25px] top-0 relative">
      <div className="flex justify-between items-center">
        {/* Logo or Brand Name could go here */}
        <div className="text-[#9C9C9C] font-bold text-xl">My Portfolio</div>
        {/* NAV LINKS — Hidden on small screens, visible on lg and above */}
        <div className="hidden lg:block">
          <ul className="flex flex-wrap gap-6 sm:gap-12">
            {navLinks.map((link, index) => (
              <li key={index} className="hover:text-secondary cursor-pointer text-[#9C9C9C] text-[14px]">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* ICONS + HAMBURGER */}
        <div className="flex items-center gap-6">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-secondary text-[#9C9C9C]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-secondary text-[#9C9C9C]" />
          </a>
          <a href="mailto:example@gmail.com">
            <FaEnvelope className="text-2xl hover:text-secondary text-[#9C9C9C]" />
          </a>

          {/* Hamburger icon: only visible on small screens */}
          <button className="lg:hidden text-2xl text-[#9C9C9C]" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU - Only visible when menu is open and on screens smaller than lg */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-[#1B1B1B] border-t border-[#333] z-50">
          <ul className="flex flex-col gap-4 p-6">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-secondary cursor-pointer text-[#9C9C9C] text-[16px] border-b border-[#333] pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
