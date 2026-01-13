import { RefreshCcw, User, Footprints } from "lucide-react";

export default function CoachingApproach() {
  const steps = [
    {
      icon: <RefreshCcw size={28} />,
      title: "Consult + Evaluate",
      desc: "Meet With A Coach To Discuss Your Goals, Training History, And Any Injuries, Complete A Quick Movement Assessment, And Try A Short, Guided Introductory Workout.",
    },
    {
      icon: <User size={28} />,
      title: "Choose Your Plan & Start Training",
      desc: "Choose The Training Plan That Matches Your Goals And Schedule, Then Start Coach-Led Sessions With A Program Built Just For You.",
    },
    {
      icon: <Footprints size={28} />,
      title: "Train With Purpose. Reach Your Goals.",
      desc: "Your Coach Designs And Updates Your Program, Monitors Your Progress, And Guides You Every Step So You Keep Advancing With Purpose And Confidence.",
    },
  ];

  return (
    <section className=" text-[#211551] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Coaching Approach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We Combine Expert Coaching, Personalized Programming, And
            Progressive Training To Help You Move Better, Perform Stronger,
            And Reach Your Goals With Confidence.
          </p>
        </div>

        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative border-2 border-black rounded-3xl px-8 py-12 text-center"
            >
              
              <div className="w-14 h-14 mx-auto mb-6 bg-[] rounded-lg flex items-center justify-center">
                {step.icon}
              </div>

              
              <h3 className="text-xl font-semibold mb-4">
                {step.title}
              </h3>


              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>

              
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-12 w-12 h-1 bg-red-700">
                  <div className="absolute right-0 -top-1 w-3 h-3 bg-red-700 rounded-sm"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
