import { useState } from "react";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = () => {
    setFormData({
      email: "",
      mobile: "",
      message: "",
    })
  };

  const handleSubmit = () => {
  };

  return (
    <div className="flex justify-center items-center  max-w-[600px] w-full">
      <form
        onSubmit={handleSubmit}
        className=" p-6 rounded-md shadow-md max-w-[600px] w-full"
      >
        <div className="mb-4">
          <label htmlFor="email" className="block text-white  text-[14px] mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-3 bg-[#fff] text-[#333] rounded-md border border-[#9C9C9C] 
              focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="mobile"
            className="block text-white  text-[14px] mb-2"
          >
            Mobile:
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            placeholder="Enter mobile"
            className="w-full p-3 bg-[#fff] text-[#333] rounded-md border border-[#9C9C9C] focus:outline-none focus:border-secondary"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-white text-[14px] mb-2"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
            className="w-full p-3  bg-[#fff] text-[#333]  rounded-md border border-[#9C9C9C] focus:outline-none focus:border-secondary"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#3F8E00] text-white p-3 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
