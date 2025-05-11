import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaEnvelope, FaArrowRight, FaBars, FaTimes, FaHtml5, FaCss3Alt, FaReact, FaJs, FaFigma, FaWordpress, FaGitAlt } from "react-icons/fa";
import image1 from "../assets/images/image 11.png";
import { SiMaterialdesign, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import Navbar from "./Navbar";

const HeroSection = () => {


  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
    { name: "React Js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "Material UI", icon: <SiMaterialdesign className="text-blue-600 text-3xl" /> },
    { name: "Tailwind", icon: <TbBrandTailwind className="text-teal-400 text-3xl" /> },
    { name: "Figma", icon: <FaFigma className="text-pink-500 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
    { name: "Next JS", icon: <TbBrandNextjs className="text-white text-3xl" /> },
    { name: "WordPress", icon: <FaWordpress className="text-blue-600 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  ];

  return (
    <div className="w-full bg-[#080808] text-2xl text-white px-8 sm:px-[85px]">
      {/* HEADER */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 pt-[80px] align-middle justify-center pb-[57px] gap-6">
        <div className="grid grid-col-1 justify-center order-2 md:order-1 ">
          <div className="flex flex-col max-w-[538px] w-full justify-center">
            <div className="max-w-[492px] w-full  sm:justify-center ">
              <h1 className="text-[44px] font-extrabold pb-[10px] tracking-[2px] text-center sm:text-left">
                Your Name Here
              </h1>
              <p className="text-[14px] leading-custom tracking-[2px] text-[#9C9C9C] pb-[30px] leading-[24px] text-center sm:text-left">
                Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-center">
              <button className="max-w-[308px] w-full text-white p-4 rounded flex items-center gap-2 hover:bg-green-600 bg-[#3F8E00] ">
                <p className="font-bold text-[16px] tracking-[2px]">Let's Get Started</p>
                <FaArrowRight className="w-5 h-5 fill-white stroke-[#62BA1B] stroke-[2]" />
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-col-1 justify-center order-1 md:order-2">
          <div className="max-H-[350px] max-w-[350px] ">
            <img
              src={image1}
              alt="Placeholder"
              className="w-full h-full object-cover border rounded-[180px]"
            />
          </div>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <div className="flex flex-col justify-center mx-auto">
        <p className="text-[18px] leading-[2px] text-[#fff] pb-[30px] justify-center ml-[56px]">Skills</p>
        <div className="flex flex-wrap gap-6 justify-center pb-[30px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-[#1B1B1B] border border-[#9C9C9C] rounded-[5px] px-6 py-4"
            >
              {skill.icon}
              <p className="text-[14px] tracking-[2px] text-[#9C9C9C]">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
