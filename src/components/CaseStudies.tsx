import React from 'react';
import caseImg from '../assets/images/image 2.png';
import caseImg2 from '../assets/images/Mask group.png';
import caseImg3 from '../assets/images/image 3.png';

const CaseStudies = () => {
  return (
    <div className="flex flex-col items-center p-[80px] ">
      {/* Heading Section */}
      <div className="text-center max-w-[570px] w-full">
        <h1 className="font-extrabold text-[34px] mb-[10px]" >CaseStudies</h1>
        <p className="text-[#9C9C9C] text-[14px] leading-loose tracking-[2px] ">
          Solving user & business problems since last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* section1*/}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-[890px] mt-[60px]">
        {/* Text Section */}
        <div className="py-[27px]">
          <button className="bg-[#FFF6E9] w-fit max-h-[24px] px-[10px] py-[10px] rounded-full flex items-center justify-center">
            <span className="font-bold text-[12px] tracking-[2px] text-[#FFA217]">FinTech</span>
          </button>

          <h3 className="font-extrabold text-[24px] mt-[20px] tracking-[2px] ">Work Name here</h3>
          <p className="text-[#9C9C9C] text-[14px] leading-[24px] tracking-[2px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="bg-[#FFA217] text-white font-bold text-[14px] px-6 py-2 mt-[48px] rounded-lg flex items-center gap-2 max-w-[350px]">
            View case study
            <span className="text-lg">{'>'}</span> {/* Arrow */}
          </button>

        </div>

        {/* Image Section */}
        <div>
          <img
            src={caseImg}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-[890px] mt-[80px]">
        {/* Image Section */}
        <div className='order-1 md:order-2'>
          <img
            src={caseImg2}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>

        {/* Text Section */}
        <div className="order-2 md:order-1  py-[27px]">
          <button className="bg-[#D0E6FF] w-fit max-h-[24px] px-[10px] py-[10px] rounded-full flex items-center justify-center">
            <span className="font-bold text-[12px] tracking-[2px] text-[#000AFF]">FinTech</span>
          </button>

          <h3 className="font-extrabold text-[24px] mt-[20px] tracking-[2px] ">Work Name here</h3>
          <p className="text-[#9C9C9C] text-[14px] leading-[24px] tracking-[2px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="bg-[#000AFF] text-white font-bold text-[14px] px-6 py-2 mt-[48px] rounded-lg flex items-center gap-2 max-w-[350px]">
            View case study
            <span className="text-lg">{'>'}</span> {/* Arrow */}
          </button>

        </div>


      </div>
      {/* section 3 */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-[890px] mt-[60px]">
        {/* Text Section */}
        <div className="py-[27px]">
          <button className="bg-[#E0FFF8] w-fit max-h-[24px] px-[10px] py-[10px] rounded-full flex items-center justify-center">
            <span className="font-bold text-[12px] tracking-[2px] text-[#2AB090]">FinTech</span>
          </button>

          <h3 className="font-extrabold text-[24px] mt-[20px] tracking-[2px] ">Work Name here</h3>
          <p className="text-[#9C9C9C] text-[14px] leading-[24px] tracking-[2px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
          <button className="bg-[#2AB090] text-white font-bold text-[14px] px-6 py-2 mt-[48px] rounded-lg flex items-center gap-2 max-w-[350px]">
            View case study
            <span className="text-lg">{'>'}</span> {/* Arrow */}
          </button>

        </div>

        {/* Image Section */}
        <div>
          <img
            src={caseImg3}
            alt="Placeholder"
            className="w-full h-full object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
