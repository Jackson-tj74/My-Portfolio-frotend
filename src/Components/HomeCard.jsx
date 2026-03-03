import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const HomeCard = () => {
  return (
    <div className="bg-white font-sans text-gray-900">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

          {/* Hero Text */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Crafting <span className="text-green-500">Digital</span> Stories
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              I’m a Full-Stack Developer delivering modern, responsive, and elegant web applications that elevate your brand online.
            </p>
            <div className="flex gap-4">
              <Link
                to="/projects"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="border-2 border-green-500 text-green-500 px-8 py-4 rounded-full font-bold hover:bg-green-500 hover:text-white transition"
              >
                Contact Me
              </Link>
            </div>
          </div>


          <div className="order-1 md:order-2 flex justify-center items-center relative py-25 md:py-0">


            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-green-400/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <div className="relative group">
              
              <div className="relative w-54 h-54 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] md:border-[10px] border-white ring-1 ring-gray-100 transition-all duration-700 ease-in-out group-hover:scale-[1.02] group-hover:rotate-1">
                <img
                  src="/pic1.jpg"
                  alt="Tuyikunde Jackson"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

            
              <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-4 bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-gray-50 animate-bounce transition-transform group-hover:scale-110">
                <span className="text-3xl md:text-5xl lg:text-6xl select-none" role="img" aria-label="laptop">
                  💻
                </span>
              </div>

             
              <div className="absolute inset-0 border-2 border-dashed border-green-500/30 rounded-full -m-4 md:-m-6 animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Services I Offer</h2>
          <p className="text-gray-500 mt-3">Building modern solutions tailored to your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", icon: "💻" },
            { title: "UI/UX Design", icon: "🎨" },
            { title: "Cloud Solutions", icon: "☁️" },
          ].map((service, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-green-500 text-white text-3xl mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500">High-quality solutions using modern technologies tailored to your project.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold">What Clients Say</h2>
        </div>
        <TestimonialCard />
      </section>

      {/* Footer */}

    </div>
  );
};


const testimonials = [
  {
    id: 1,
    name: "NIYOMUFASHA Alice",
    email: "niyoalice@gmail.com",
    message:
      "From start to finish, the experience was smooth and professional. The results exceeded expectations.",
    image: "/pic1.jpg",
  },
  {
    id: 2,
    name: "Tyga Brown",
    email: "tygabrown780@gmail.com",
    message:
      "What impressed us most was how well they understood our goals. Every suggestion felt tailored.",
    image: "/pic2.jpg",
  },
];

const TestimonialCard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto px-6 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

        {/* Image */}
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Testimonial Content */}
        <div className="bg-green-50 p-8 rounded-3xl shadow-lg relative flex-1">
          <span className="text-green-500 text-6xl absolute -top-6 left-6">“</span>
          <p className="text-gray-700 italic text-lg">{testimonials[current].message}</p>
          <div className="mt-6 text-right">
            <p className="font-bold text-gray-900">{testimonials[current].name}</p>
            <p className="text-green-500 text-sm">{testimonials[current].email}</p>
          </div>
        </div>
      </div>


      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 rounded-full cursor-pointer transition-all ${i === current ? "w-10 bg-green-500" : "w-3 bg-gray-300"
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeCard;