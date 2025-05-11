
import { FaArrowRight } from "react-icons/fa";
import caseImg from '../assets/images/img-work1.png';
import caseImg2 from '../assets/images/img-work2.png';
const RecentWork = () => {

  const cardData = [
    {
      imgSrc: caseImg,
      title: "Work name here",
      description: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u.",
      buttonText: "Know More",
    },
    {
      imgSrc: caseImg2,
      title: "Work name here",
      description: "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
      buttonText: "Know More",
    },
    // Add more cards as needed
  ];


  return (
    <>
      <div className="flex flex-col items-center pt-[80px]">
        <div className="text-center max-w-[570px] px-[80px]">
          <h1 className="font-extrabold text-[34px] mb-[10px]">Recent Work</h1>
          <p className="text-[#9C9C9C] text-[14px] leading-loose tracking-[2px]">
            Solving user & business problems since the last 15+ years. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-[890px] p-[80px]">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-2"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-[445px] h-[300px] object-cover mb-4 rounded"
              />
              <h2 className="text-[#080808] text-[24px] font-extrabold mb-2">{card.title}</h2>
              <p className="text-[#9C9C9C] text-[14px] font-normal mb-4">{card.description}</p>
              <button className="bg-[#3F8E00] hover:bg-green-600 text-white py-2 px-4 rounded flex items-center gap-2 text-[14px] font-bold">
                {card.buttonText}
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default RecentWork





