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
        { id: 1, title: "FUNCTIONAL HIT TRAINING", desc: "Each F45 workout is a unique program that incorporates cardio, resistance-based strength training, or a hybrid of both, all geared toward everyday life." },
        { id: 2, title: "INFINITE WORKOUTS", desc: "With more than 5,000 different movements specifically developed by our global athletics team, no two workouts are the same, keeping members challenged and having fun." },
        { id: 3, title: "CERTIFIED COACHES", desc: "All of F45’s coaches are certified personal trainers who have the skills to safely modify each movement to any member’s individual needs." },
        { id: 4, title: "OPTIMAL NUTRITION", desc: "The F45 Nutrition Portal offers an easy to follow online diet program that complements our training and takes the guesswork out of choosing the right foods." },
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
        <div>
            <section className='flex justify-between bg-[#211551] text-white items-center '>
                <div className='w-1/2 p-10'>
                    <h1 className='text-5xl font-bold'>More than workouts</h1><span></span>
                    <h1 className='text-4xl font-bold'>A Place to belong</h1>
                    <p className='mt-5 text-lg'>At Inside Out Fitness, we are dedicated to helping you achieve your fitness goals in a supportive and motivating environment. Our team of experienced trainers and state-of-the-art facilities are here to guide you every step of the way.</p>
                    <p className='mt-5 text-lg'>Whether you're a beginner or a seasoned athlete, we offer a variety of classes and personalized training programs to suit your needs. Join us today and take the first step towards a healthier, stronger you!</p>
                </div>
                <div className='w-1/2'>
                    <Image src='/aboutUs/aboutusHerosection.png' width={500} height={500} alt='Fitness Team' className='w-full h-full object-cover' />
                </div>
            </section>


            <section className="bg-[#fdfbf7] py-24 relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 text-center relative">


                    <button
                        onClick={prevSlide}
                        className="flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 
                 w-12 h-12 rounded-full bg-[#1f1456] text-white 
                 hover:scale-105 transition z-20"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 
                 w-12 h-12 rounded-full bg-[#1f1456] text-white 
                 hover:scale-105 transition z-20"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="relative h-[320px] flex items-center justify-center">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute w-full transition-all duration-500 ease-in-out ${index === current
                                    ? "opacity-100 translate-x-0 z-10"
                                    : index < current
                                        ? "opacity-0 -translate-x-20"
                                        : "opacity-0 translate-x-20"
                                    }`}
                            >

                                <div className="flex justify-center gap-2 mb-6 text-red-600">
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                    <Star size={18} fill="currentColor" />
                                </div>

                                <p className="text-sm font-semibold tracking-widest text-[#1f1456] mb-6">
                                    WHAT IS INSIDE OUT FITNESS TRAINING?
                                </p>

                                <h2 className="text-6xl md:text-7xl font-extrabold text-[#1f1456] mb-10">
                                    {slide.title}
                                </h2>

                                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                                className={`w-3 h-3 rounded-full transition ${index === current ? "bg-[#1f1456]" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <OurCoreValues />
            </section>

            <section className='flex justify-between max-w-6xl mx-auto'>

                <div className='w-1/2 p-10 flex flex-col justify-center'>
                    <h2 className='text-4xl font-bold mb-6 text-[#211551]'>How Inside Out Fitness Works?</h2>
                    <h2>It's Science</h2>
                    <p>Inside Out Fitness offers innovative, high-intensity functional group workouts that are fast, fun and results-driven. Our goal is to help you become your fittest, strongest and healthiest self.</p>
                    <div className="mt-8 space-y-6">
                        {work.map((item) => (
                            <div key={item.id} className="border-b pb-4">
                                <div className="flex justify-between items-center cursor-pointer"
                                    onClick={() =>
                                        setOpenId(openId === item.id ? null : item.id)
                                    }
                                >
                                    <h3 className="text-2xl font-semibold text-[#211551]">
                                        {item.title}
                                    </h3>
                                    <span className="text-3xl font-bold">
                                        {openId === item.id ? "−" : "+"}
                                    </span>
                                </div>

                                {openId === item.id && (
                                    <p className="mt-2 text-gray-600">
                                        {item.desc}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>


                </div>
                <div className='w-1/2'>
                    <Image src='/aboutUs/coach.png' width={600} height={600} alt='Our Team' className='w-full h-full object-cover' />
                </div>
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

            <section className=" text-[#211551] py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-semibold italic mb-6">
                            A Place That Feels Like Home
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At Inside Out Fitness, We Know Consistency Comes From Community.
                            We Foster Real Connections That Go Beyond The Gym, Creating A
                            Space Where Everyone Feels Like Part Of The Family.
                        </p>
                    </div>

                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[220px]">

                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden rounded-2xl group
                ${index === 0 ? "row-span-2" : ""}
                ${index === 1 ? "col-span-2" : ""}
              `}
                            >
                                <Image
                                    src={src}
                                    alt="Community Training"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
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