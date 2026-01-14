"use client";
import Image from "next/image";
import React from "react";
import Ourservices from "../components/Ourservices";
import WorkoutTypes from "../components/WorkoutTypes";
import LeadFormSection from "../components/LeadForm";
import { motion } from "framer-motion";

const Services = () => {
    return (
        <div>

            <section className="relative h-screen w-full">
                <motion.div
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/service/herosection.jpg"
                        alt="hero-section"
                        fill
                        priority
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>





                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex items-center"
                >
                    <div className="max-w-3xl px-6 md:px-16 text-white space-y-6">
                        <p className="uppercase tracking-widest text-sm font-semibold">
                            Sweat Dripping, Heart-Pumping Fun.
                        </p>

                        <h1 className="text-5xl md:text-7xl font-extrabold">
                            Inside Out Fitness WORKOUTS
                        </h1>

                        <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                            Elevate your workout routine today with Inside Out Fitness Training’s extensive
                            selection of innovative, ever-changing workouts. Get access to
                            over 5,000 curated Inside Out Fitness workouts and 45 unique Inside Out Fitness
                            classes designed to give you the results you're looking for.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-[#211551] hover:bg-orange-500 transition text-white px-8 py-3 rounded-full font-semibold">
                                Start A Trial
                            </button>

                            <button className="border border-white hover:bg-white hover:text-black transition px-8 py-3 rounded-full font-semibold">
                                Book A Class
                            </button>
                        </div>
                    </div>
                </motion.div>

            </section>

            <section className="py-12">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <div className="flex flex-col md:flex-row items-center gap-10">

                        <div className="md:w-[40%] p-6 md:p-10">
                            <h1 className="md:text-5xl text-3xl font-extrabold text-[#211551] mb-4">
                                UNIQUE AND SYSTEMIZED WORKOUTS
                            </h1>
                            <p className="text-gray-700 leading-relaxed">
                                Born and perfected in Australia, the elite selection of Inside Out
                                Fitness Workouts combines elements of high-intensity interval training
                                (HIIT), circuit training, and functional training. We’re big fans of
                                real, noticeable changes in quick succession. That’s where 45 comes in.
                                In just 45 minutes, Inside Out Fitness members can burn 400-600 calories,
                                delivering the amazing, post-workout euphoria, all in under one hour.
                                Workout at your own pace.
                            </p>
                        </div>

                        <div className="md:w-[60%] w-full">
                            <Image
                                src="/service/services.jpg"
                                alt="services"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>

                    </div>
                </motion.div>
            </section>

            <section>
                <Ourservices />
            </section>

            <section>
                <WorkoutTypes />
            </section>

            <section>
                <LeadFormSection />
            </section>
        </div>
    );
};

export default Services;
