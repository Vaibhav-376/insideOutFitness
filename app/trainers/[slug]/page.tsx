"use client"

import LeadFormSection from "@/app/components/LeadForm";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const trainers = [
    {
        slug: "rachel",
        name: "Rachel",
        role: "Director",
        image: "/trainers/coach2.png",
        description: [
            "Rachel ensures that everything at Inside Out Fitness runs smoothly-from your first intake and measurements to the little details that make the gym feel like home. She’s passionate about creating a space where every member feels comfortable, cared for, and truly seen. With an eye for cleanliness, comfort, and efficiency, Rachel helps make each members experience feel seamless and supported."
        ]
    },
    {
        slug: "jake",
        name: "Jake",
        role: "Head Trainer",
        image: "/trainers/coach1.png",
        description: [
            "Jake has been transforming bodies and mindsets since 1995 with a simple, powerful philosophy: train like an athlete. Whether you’re a competitive soccer player or a busy soccer mom, Jake believes your body holds the potential to perform at its peak—and he’s here to get you there.",
            "Jake brings unmatched expertise to every session. His training is deeply rooted in understanding the unique physiology of both men and women, tailoring each program to deliver maximum results.",
            "Jake’s clients quickly discover that age is never a limit. He’s a firm believer that you can build muscle, gain strength, and transform your body at any stage of life.",
            "One conversation with Jake is all it takes—you’ll walk away with total confidence in the process and a renewed belief in what your body is capable of. His knowledge is expansive, his passion is undeniable, and his results speak for themselves."
        ]
    },
    {
        slug: "aizik",
        name: "Aizik",
        role: "Assistant Trainer",
        image: "/trainers/coach4.png",
        description: [
            "Aizik approaches coaching as both a dedicated student and an applied practitioner. He is currently studying for his NASM Certified Personal Trainer and Nutrition certifications and holds a certification in Barbell Rehabilitation. His understanding of training is built not only through education, but through countless hours spent reshaping his own body and mindset—giving him firsthand insight into what real, lasting transformation requires.",
            "As a personal mentee of Jake, Aizik continues to deepen his knowledge of biomechanics, strength development, and injury-aware training. He values high-level mentorship and applies those principles thoughtfully on the gym floor with each individual he works with.",
            "Aizik has a deep passion for guiding others toward a genuine love of fitness through consistent effort and intelligent training. He believes progress is earned through commitment, proper guidance, and respect for the process. His goal is to help clients build strength, confidence, and long-term health by encouraging maximum effort while meeting people where they are."
        ]
    },
    {
        slug: "edzar-od",
        name: "Edzar “O.D.”",
        role: "Trainer",
        image: "/trainers/coach3.png",
        description: [
            "Edzar “O.D.” Felipe is a dedicated fitness professional and athlete committed to helping every individuals unlock their peak physical potential. Having traveled the U.S. and done multiple bodybuilding competitions, O.D. has developed a reputation for a no-nonsense, results-oriented approach to training.",
            "Specializing in Nutrition and Mind and Muscle connection, O.D. combines traditional-based programming with a deep understanding of human biomechanics. Whether improving athletes or those wanting to improve their health, O.D. focuses on sustainable progress, establishing every client builds a foundation that lasts a lifetime."
        ]
    },
];

const TrainerPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const trainer = trainers.find(t => t.slug === slug);

    if (!trainer) return notFound();

    return (
 <div className="min-h-screen bg-slate-50">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative h-105 w-full overflow-hidden rounded-b-3xl"
      >
        <Image
          src={trainer.image}
          alt={trainer.name}
          fill
          priority
          className="object-contain object-center"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="max-w-6xl mx-auto px-6 py-14"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-slate-900"
        >
          {trainer.name}
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-lg font-semibold tracking-wide text-emerald-600"
        >
          {trainer.role}
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="mt-6 max-w-4xl space-y-5 text-slate-600 text-lg leading-relaxed"
        >
          {trainer.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </motion.div>
      </motion.div>

      {/* Lead Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <LeadFormSection />
      </motion.div>
    </div>
    );
};

export default TrainerPage;
