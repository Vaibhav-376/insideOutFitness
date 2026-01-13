import React from 'react'
import { motion } from "framer-motion"

const OurCoreValues = () => {
    const values = [
        { id: 1, title: "Community First ", desc: "We Focus on creating real connections with every member, so you always feel recognized, supported, and valued" },

        { id: 2, title: "Authenticity", desc: "We're not typical corporate-style gym. At inside out fitness, Everyone feels welcome in warm, genuine Atmosphere." },
        { id: 3, title: "Supportive & Welcoming", desc: "We know your name and it's no coincidence. We Focus on connecting with every member, Ensuring you feel recognized, supported, and valued from your very first day." },
    ]
    return (

        <div>

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
        </div>
    )
}

export default OurCoreValues