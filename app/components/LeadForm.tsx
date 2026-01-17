"use client";

import React, { useState } from "react";
import { FitnessGoal } from "@prisma/client";

const LeadFormSection = () => {
  const [formdata, setformdata] = useState<{
    fullName: string;
    email: string;
    phone: string;
    goal: FitnessGoal | "";
    message: string;
  }>({
    fullName: "",
    email: "",
    phone: "",
    goal: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    if (!res.ok) {
      const err = await res.json();
      alert(err.error);
      return;
    }

    alert("Form submitted successfully!");

    setformdata({
      fullName: "",
      email: "",
      phone: "",
      goal: "",
      message: "",
    });
  };

  return (
    <section className="relative py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-[#211551] leading-tight">
              Start Your Fitness Journey <br />
              <span className="text-orange-500">
                With a Free Consultation
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Fill out the form and our expert coaches will get in touch with you
              to understand your goals and create a personalized plan.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>✔ Personalized Training Plans</li>
              <li>✔ Expert Coach Guidance</li>
              <li>✔ Supportive Community</li>
              <li>✔ Sustainable Results</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#211551] mb-6">
              Get a Free Call Back
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                value={formdata.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="tel"
                name="phone"
                value={formdata.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <select
                name="goal"
                value={formdata.goal}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select Your Goal</option>
                <option value="WEIGHT_LOSS">Weight Loss</option>
                <option value="MUSCLE_GAIN">Muscle Gain</option>
                <option value="GENERAL_FITNESS">General Fitness</option>
                <option value="STRENGTH_TRAINING">Strength Training</option>
              </select>

              <textarea
                name="message"
                value={formdata.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your fitness goals"
                className="w-full px-4 py-3 border rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-[#211551] text-white font-semibold py-3 rounded-lg"
              >
                Book Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadFormSection;
