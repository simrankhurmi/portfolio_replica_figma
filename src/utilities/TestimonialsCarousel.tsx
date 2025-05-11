import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Product Manager",
    quote:
      "This platform has completely transformed the way we manage our tasks. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "James Carter",
    role: "Software Engineer",
    quote:
      "Smooth and intuitive interface. It’s been a game-changer for our development team.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia Lee",
    role: "UX Designer",
    quote:
      "The attention to detail and ease of use is incredible. Fantastic experience overall.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-4">“{testimonials[index].quote}”</p>
            <h4 className="font-semibold">{testimonials[index].name}</h4>
            <span className="text-sm text-gray-500">{testimonials[index].role}</span>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-gray-900 w-4" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
