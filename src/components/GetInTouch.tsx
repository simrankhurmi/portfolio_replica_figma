
import ContactForm from "../components/ContactForm";



const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center  p-[80px]  bg-[#080808] ">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h1 className="font-extrabold text-[34px] text-[#fff]">Get In Touch</h1>
        <p className="text-[#9C9C9C] text-[14px] leading-loose max-w-[570px] tracking-wide mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.         </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default GetInTouch;
