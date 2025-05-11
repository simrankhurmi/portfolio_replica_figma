
import client1 from "../assets/images/image 6.png";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: client1,
  },
  {
    id: 2,
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: client1,
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: client1,
  },
  {
    id: 4,
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Client Name",
    image: client1,
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center  p-[80px]  bg-[#080808] ">
      {/* Heading Section */}
      <div className="text-center mb-10 ">
        <h1 className="font-extrabold text-[34px] text-[#fff] mb-[10px]">Testimonials</h1>
        <p className="text-[#9C9C9C] text-[14px] leading-loose max-w-[570px] tracking-wide mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Testimonials Grid (2 per row) */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 gap-[30px] max-w-[890px]">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative p-[30px] border border-[#292929] rounded-lg shadow-md max-w[445px]"
          >
            {/* Quote Icon */}
            <span className="absolute top-[-10px] left-[-5px] text-[#fff] text-[50px] font-bold opacity-40">
              “
            </span>

            {/* Testimonial Text */}
            <p className="text-[14px] leading-normal tracking-wide text-[#9C9C9C]">
              {testimonial.text}
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-3 mt-[30px]">
              <img src={testimonial.image} className="h-[50px] w-[50px] rounded-full" alt={testimonial.name} />
              <p className="font-bold text-[16px] text-[#fff]">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
