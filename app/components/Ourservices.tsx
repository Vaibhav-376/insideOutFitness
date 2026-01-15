"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Ourservices = () => {
    const services = [
        { id: 1, title: "Coach-Led Performance Training", desc: "With Our Personalized Programs, You Can Lose Weight Sustainably And Get A Healthier, Leaner Physique By Burning Fat. Begin Your Path To Becoming A Fitter Version Of Yourself Right Now.", img: "/homepage/services1.jpeg" },
        { id: 2, title: "Team Performance Training", desc: "With Targeted Programs Designed To Help You Build Lean Muscle And Get Stronger, You Can Define Your Body Effectively. Start Your Journey Today.", img: "/homepage/services2.jpeg" },
        { id: 3, title: "Nutritional Coaching", desc: "Stay Strong And Fit With Our Easy-To-Follow Home Workouts That Need Minimal Equipment. Explore A Variety Of Plans", img: "/homepage/services3.jpeg" },
        { id: 4, title: "Rehab & Recovery", desc: "Make Every Gym Session Count With Guided Plans Designed To Get You Results.", img: "/homepage/services4.jpeg" }
    ]
    return (
        <div>
            <motion.div
                initial={{opacity: 0,x: -50}}
                whileInView={{opacity:1 ,x:0}}
                transition={{duration:1.4,ease:"easeOut"}}
                viewport={{once:true,amount:0.3}}
            >
<section className="max-w-7xl mx-auto px-6 py-16">
  <h2 className="text-3xl font-bold text-center mb-8 text-[#211551]">
    Our Services
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {services.map((service) => (
      <div
        key={service.id}
        className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg"
      >
        {/* Image Wrapper */}
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={service.img}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-[#211551]">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

            </motion.div>

        </div>
    )
}

export default Ourservices