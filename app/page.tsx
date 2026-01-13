"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"
import Testimonials from "./components/Testimonials";
import Ourservices from "./components/Ourservices";
import { useEffect, useState } from "react"
import LeadFormSection from "./components/LeadForm";
import CoachingApproach from "./components/CoachingApproach";


export default function Home() {
  const values = [
    { id: 1, title: "Community First ", desc: "We Focus on creating real connections with every member, so you always feel recognized, supported, and valued" },

    { id: 2, title: "Authenticity", desc: "We're not typical corporate-style gym. At inside out fitness, Everyone feels welcome in warm, genuine Atmosphere." },
    { id: 3, title: "Supportive & Welcoming", desc: "We know your name and it's no coincidence. We Focus on connecting with every member, Ensuring you feel recognized, supported, and valued from your very first day." },
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
  const slides = [
    {
      id: 1,
      image: "/homepage/herosection1.jpg",
      title: (
        <>
          Where Training Feels Personal and{" "}
          <span className="text-orange-500">Progress Feels Possible!</span>
        </>
      ),
      desc:
        "Show up, get coached, and train with purpose. Move better, get stronger, and surround yourself with people who push you."
    },
    {
      id: 2,
      image: "/homepage/herosection2.jpg",
      title: (
        <>
          Build Strength. Build Confidence.{" "}
          <span className="text-orange-500">Build Yourself.</span>
        </>
      ),
      desc:
        "Every session is designed to help you improve physically and mentally with expert coaching and a motivating environment."
    },
    {
      id: 3,
      image: "/homepage/herosection3.jpg",
      title: (
        <>
          Results That Last{" "}
          <span className="text-orange-500">Not Just Quick Fixes</span>
        </>
      ),
      desc:
        "Train smart, stay consistent, and achieve long-term fitness results with a program that adapts to you."
    }
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].image}
              alt="Hero Slide"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>


        <div className="absolute inset-0 bg-black/60" />


        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-left text-white px-6 max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {slides[index].title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              {slides[index].desc}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#211551] hover:bg-orange-600 transition px-8 py-3 rounded-md font-semibold shadow-lg"
              >
                Get a Quote
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white hover:bg-white hover:text-[#211551] transition px-8 py-3 rounded-md font-semibold"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>


        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${index === i ? "bg-orange-500" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">


          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src="/homepage/why1.jpg"
              alt="why us"
              width={400}
              height={400}
              className="rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center px-2"
          >
            <h1 className="text-[#211551] font-extrabold text-3xl md:text-4xl tracking-wide">
              Why Inside Out Fitness
            </h1>

            <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>

            <p className="text-gray-600 mt-6 text-justify leading-relaxed">
              At <span className="font-semibold text-[#211551]">Inside Out Fitness</span>,
              we believe fitness is more than just exercise — it’s about community and belonging.
              For over 20 years, we’ve been Austin’s go-to studio for coach-led, result-focused training.
              From weights-based camps to personalised programs, we make fitness challenging, fun,
              and supportive — because progress is better when you’re not doing it alone.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#211551] px-6 py-2 text-white rounded-md mt-6 shadow-lg hover:bg-orange-500 transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl"
          >
            <Image
              src="/homepage/why2.jpg"
              alt="why us"
              width={400}
              height={400}
              className="rounded-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto py-10 px-6">
        <div className="text-center">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#211551]"
          >
            Our Core Values
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-orange-500 mx-auto mt-5 rounded-full"
          />


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-8 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            These values drive every decision and define the{" "}
            <span className="text-[#211551] font-semibold">
              Inside Out Fitness
            </span>{" "}
            experience — in and out of the studio.
          </motion.p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: value.id * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-[#211551] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full bg-gray-100 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className=" p-10 lg:p-14 shadow-xl z-10 relative"
          >

            <div className="flex items-center gap-2 mb-6">
              <span className="w-10 h-1 bg-[#211551]"></span>
              <span className="w-6 h-1 bg-orange-500"></span>
            </div>

            <p className="uppercase text-sm font-semibold tracking-widest text-gray-500">
              Sweat-Dripping, Heart-Pumping Fun
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-[#211551] leading-tight">
              Start Your <br /> Workout at Inside Out Fitness
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With over 5,000 exercises and 80+ workout classes in our database,
              Inside Out Fitness delivers fun, fast-paced training that keeps you motivated to
              do more, achieve more, and be more.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              No need to feel intimidated — this workout is for all ages and
              every body. And no two workouts are ever the same.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-125 md:h-150 w-full"
          >
            <Image
              src="/homepage/pt-training.jpg"
              alt="inside out Workout"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

        </div>
      </section>

      <section className="w-full overflow-hidden">
        <div className="bg-[#211551] py-6 relative overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="mx-8 text-white text-2xl md:text-3xl font-extrabold tracking-wide">
              TRAINING ★ LIFE CHANGING ★ TEAM TRAINING ★ LIFE CHANGING ★
            </span>
            <span className="mx-8 text-white text-2xl md:text-3xl font-extrabold tracking-wide">
              TRAINING ★ LIFE CHANGING ★ TEAM TRAINING ★ LIFE CHANGING ★
            </span>
          </div>
        </div>


        <div className="h-4 bg-red-600"></div>
      </section>

      <section>
        <Ourservices />
      </section>

      <section className="bg-gray-900 text-white py-16 px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get To Know The Team Powering Inside Out</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our Coaches Are The Heart Of Our Community, Bringing Their Passion, Expertise, And
            One-Of-A-Kind Personalities To Every Single Session.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-700 hover:bg-red-800 transition rounded shadow-lg">
            See All Trainers
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="flex flex-col md:flex-row items-center bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-48 h-48 object-cover rounded-xl mb-6 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-2xl font-bold text-red-700">{trainer.name}</h3>
                <p className="text-gray-200 italic mb-2">{trainer.role}</p>
                <p className="font-semibold mb-2">Year At INSIDE OUT FITNESS: {trainer.year}</p>
                <p className="text-gray-300">{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <CoachingApproach />
      </section>
      <section>
        <Testimonials />
      </section>

      <section>
        <LeadFormSection />
      </section>
    </div>
  );
}
