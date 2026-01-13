"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import OurCoreValues from '../components/OurCoreValues';
import LeadFormSection from '../components/LeadForm';


const AboutUs = () => {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            title: "MOTIVATION",
            desc: "Our team mentality helps you to stay motivated, creates accountability and fosters a real community atmosphere based on a no-ego attitude.",
        },
        {
            title: "COMMUNITY",
            desc: "Train alongside like-minded people in a supportive environment that pushes you to be your best every session.",
        },
        {
            title: "RESULTS",
            desc: "Scientifically designed workouts that deliver real results while keeping training exciting and effective.",
        },
    ];

    const work = [
        { id: 1, title: "FUNCTIONAL HIT TRAINING", desc: "Each Inside Out Fitness workout is a unique program that incorporates cardio, resistance-based strength training, or a hybrid of both, all geared toward everyday life." },
        { id: 2, title: "INFINITE WORKOUTS", desc: "With more than 5,000 different movements specifically developed by our global athletics team, no two workouts are the same, keeping members challenged and having fun." },
        { id: 3, title: "CERTIFIED COACHES", desc: "All of Inside Out Fitness’s coaches are certified personal trainers who have the skills to safely modify each movement to any member’s individual needs." },
        { id: 4, title: "OPTIMAL NUTRITION", desc: "The Inside Out Fitness Nutrition Portal offers an easy to follow online diet program that complements our training and takes the guesswork out of choosing the right foods." },
    ]
    const trainers = [
        {
            id: 1,
            name: "Jake",
            role: "INSIDE OUT FITNESS Lead Performance Coach",
            year: 2024,
            description:
                "Jake has been shaping bodies and mindsets since 1995 with one guiding principle: Train like an athlete. From competitive players to busy parents, he knows every body has untapped potential! And he’s here to help you reach it.",
            img: "/homepage/trainer.png",
        },
        {
            id: 2,
            name: 'Edzar "O.D."',
            role: "INSIDE OUT FITNESS Performance Coach",
            year: 2018,
            description:
                "Edzar “O.D.” is a passionate athlete and coach, dedicated to helping every member reach their peak performance. With experience traveling the U.S. and competing in multiple bodybuilding contests, O.D. is known for his focused, results-driven training style.",
            img: "/homepage/femaleCoach.jpg",
        },
    ];

    const images = [
        "/aboutUs/1.png",
        "/aboutUs/2.png",
        "/aboutUs/3.png",
        "/aboutUs/4.png",
        "/aboutUs/5.png",
        "/aboutUs/6.png",
        "/aboutUs/7.png",
        "/aboutUs/8.png",
    ];

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const [openId, setOpenId] = useState<number | null>(null);

    return (
<div className="overflow-hidden">

  <section className="flex flex-col lg:flex-row bg-[#211551] text-white items-center">
    <div className="w-full lg:w-1/2 px-6 py-16 lg:p-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">More than workouts</h1>
      <h2 className="text-3xl md:text-4xl font-bold mb-6">A Place to belong</h2>
      <p className="text-base md:text-lg mb-5 text-gray-200">
        At Inside Out Fitness, we are dedicated to helping you achieve your fitness goals in a supportive and motivating environment.
      </p>
      <p className="text-base md:text-lg text-gray-200">
        Whether you're a beginner or a seasoned athlete, we offer personalized programs to suit your needs.
      </p>
    </div>
    <div className="w-full lg:w-1/2 h-[300px] md:h-[450px]">
      <Image
        src="/aboutUs/aboutusHerosection.png"
        alt="Fitness Team"
        fill
        className="object-cover"
      />
    </div>
  </section>

  <section className="bg-[#fdfbf7] py-20 relative">
    <div className="max-w-6xl mx-auto px-4 text-center relative">

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1456] text-white flex items-center justify-center z-10"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1456] text-white flex items-center justify-center z-10"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative h-[360px] flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full transition-all duration-500 ${
              index === current ? "opacity-100 translate-x-0" : "opacity-0"
            }`}
          >
            <div className="flex justify-center gap-1 mb-6 text-red-600">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>

            <p className="text-xs tracking-widest font-semibold text-[#1f1456] mb-4">
              WHAT IS INSIDE OUT FITNESS TRAINING?
            </p>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#1f1456] mb-8">
              {slide.title}
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              {slide.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-[#1f1456]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  </section>

  <section>
    <OurCoreValues />
  </section>

  <section className="flex flex-col lg:flex-row max-w-7xl mx-auto px-6 py-20 gap-12">
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold text-[#211551] mb-6">
        How Inside Out Fitness Works?
      </h2>
      <p className="font-semibold mb-4">It's Science</p>
      <p className="text-gray-600 mb-8">
        Inside Out Fitness offers innovative, high-intensity functional group workouts that are fast, fun and results-driven.
      </p>

      <div className="space-y-6">
        {work.map((item) => (
          <div key={item.id} className="border-b pb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#211551]">
                {item.title}
              </h3>
              <span className="text-3xl">
                {openId === item.id ? "−" : "+"}
              </span>
            </div>

            {openId === item.id && (
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="w-full lg:w-1/2 h-[350px] md:h-[500px]">
      <Image
        src="/aboutUs/coach.png"
        alt="Coach"
        fill
        className="object-cover rounded-xl"
      />
    </div>
  </section>

  <section className="bg-gray-900 text-white py-20 px-6">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get To Know The Team Powering Inside Out
      </h2>
      <p className="text-gray-300">
        Our Coaches Are The Heart Of Our Community.
      </p>
      <button className="mt-6 px-6 py-3 bg-red-700 rounded-lg hover:bg-red-800 transition">
        See All Trainers
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
      {trainers.map((trainer) => (
        <div
          key={trainer.id}
          className="flex flex-col md:flex-row bg-gray-800 rounded-xl p-6 gap-6"
        >
          <img
            src={trainer.img}
            alt={trainer.name}
            className="w-full md:w-44 h-44 object-cover rounded-xl"
          />
          <div>
            <h3 className="text-2xl font-bold text-red-600">
              {trainer.name}
            </h3>
            <p className="italic text-gray-300">{trainer.role}</p>
            <p className="mt-2 font-semibold">
              Year At INSIDE OUT FITNESS: {trainer.year}
            </p>
            <p className="text-gray-300 mt-2">
              {trainer.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>

  <section className="py-24 text-[#211551]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl italic font-semibold mb-6">
          A Place That Feels Like Home
        </h2>
        <p className="text-gray-600">
          Consistency Comes From Community And Real Connection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative rounded-2xl overflow-hidden ${
              index === 0 ? "row-span-2" : ""
            } ${index === 1 ? "col-span-2" : ""}`}
          >
            <Image
              src={src}
              alt="Community"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>

  <section>
    <LeadFormSection />
  </section>

</div>

    )
}

export default AboutUs