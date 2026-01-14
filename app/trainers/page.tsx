"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LeadFormSection from '../components/LeadForm'

const Trainers = () => {
    const trainers = [
        { id: 1, name: "Jake", image: "/trainers/coach1.png", profile: "INSIDE OUT FITNESS COACH | LEAD PERFORMANCE COACH" },
        { id: 2, name: "Rachel", image: "/trainers/coach2.png", profile: "INSIDE OUT FITNESS DIRECTOR" },
        { id: 3, name: "Edzar 'O.D'", image: "/trainers/coach3.png", profile: "INSIDE OUT FITNESS COACH PERFORMANCE COACH" },
        { id: 4, name: "Aizik", image: "/trainers/coach4.png", profile: "INSIDE OUT FITNESS COACH ASSISTANT PERFORMANCE COACH" },
    ]
    return (
        <div>
            <section className='relative h-screen w-full'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='relative'
                >

                    <Image
                        src={"/homepage/herosection2.jpg"}
                        alt='trainer hero section'
                        width={1920}
                        height={600}
                        className='w-full h-screen object-cover'
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.4, ease: 'easeIn' }}
                    viewport={{ once: true }}
                    className='absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-6 md:px-16 space-y-6'
                >
                    <h1 className='text-white text-4xl md:text-6xl font-bold'>
                        Meet Our Expert Trainers
                    </h1>
                    <p className='text-white text-2xl text-bold max-w-4xl mx-auto px-10'>Our coaches are the heartbeat of inside out fitness bootcamp, Sharing their passion and expertise in every class. Meet the people who make our community inspiring, supportive, and full of enegry</p>

                </motion.div>
            </section>

            <section className="py-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {trainers.map((trainer) => (
                        <motion.div
                            key={trainer.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-white p-6 rounded-lg shadow-lg"
                        >
                            <Image
                                src={trainer.image}
                                alt={trainer.name}
                                width={300}
                                height={300}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                            <h2 className="text-xl font-bold mt-4 text-[#211551]">{trainer.name}</h2>
                            <p className="text-gray-800 font-bold">{trainer.profile}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            <section>
                <LeadFormSection />
            </section>

        </div>
    )
}

export default Trainers