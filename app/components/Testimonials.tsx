import React from "react"
import { motion } from "framer-motion"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "KRISTA H.",
      location: "Oregon, USA",
      feedback:
        "I have NEVER liked working out, especially in a gym! I LOVE Inside Out Fitness! All of the trainers I have worked out with are so encouraging and helpful. They have done a great job creating a community. I feel better than I have felt in years! I am 58 years old... if I can do it, so can you!!",
    },
    {
      id: 2,
      name: "BRITTANY S.",
      location: "Colorado, USA",
      feedback:
        "I am a former OTF member that was looking for a change and a challenge and found that at Inside Out Fitness! I have seen more results in the 6 months I’ve been a member than the 5 years I was a member at OTF. The coaches at Inside Out Fitness are knowledgeable and make the workouts enjoyable!",
    },
    {
      id: 3,
      name: "MAXIME G.",
      location: "Ontario, Canada",
      feedback:
        "I’ve been attending Inside Out Fitness for six months now, and I can confidently say it has been a transformative experience. The trainers are exceptional, pushing me to new heights while maintaining a fun and supportive atmosphere. The workouts are exhilarating, targeting different muscle groups and boosting my fitness level. The sense of camaraderie among fellow members is inspiring.",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto py-24 px-6">
     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#211551]">
          What Members Say
        </h2>
        <p>Feel the Love</p>
      </motion.div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="border bg-white px-8 py-12 text-center shadow-sm hover:shadow-md transition hover:scale-[1.02] rounded-lg hover:border-2 hover:border-[#211551]"
          >
           
            <div className="flex justify-center text-red-600 text-xl mb-6">
              ★★★★★
            </div>

           
            <p className="text-gray-700 leading-relaxed mb-10">
              {item.feedback}
            </p>


            <p className="font-semibold tracking-wide text-[#211551]">
              {item.name}
            </p>
            <p className="text-sm text-gray-500">{item.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
