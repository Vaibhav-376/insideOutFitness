"use client"

import React from "react"

const LeadFormSection = () => {
  return (
    <section className="relative py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-extrabold text-[#211551] leading-tight">
              Start Your Fitness Journey <br />
              <span className="text-orange-500">With a Free Consultation</span>
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

          {/* Right Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#211551] mb-6">
              Get a Free Call Back
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select Your Goal</option>
                <option>Weight Loss</option>
                <option>Muscle Gain</option>
                <option>Strength Training</option>
                <option>General Fitness</option>
              </select>

              <textarea
                rows={4}
                placeholder="Tell us about your fitness goals"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="w-full bg-[#211551] hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition"
              >
                Book Free Consultation
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LeadFormSection
