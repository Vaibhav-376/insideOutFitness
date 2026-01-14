import Image from "next/image";

const workoutTypes = [
  {
    id: 1,
    title: "MASS",
    subtitle: "Strength Training",
    label: "RESISTANCE",
    color: "bg-blue-600",
    image: "/service/workout1.jpg",
  },
  {
    id: 2,
    title: "CARDIO + RESISTANCE",
    subtitle: "Hybrid Training",
    label: "HYBRID",
    color: "bg-purple-600",
    image: "/service/workout2.jpg",
  },
  {
    id: 3,
    title: "MOBILITY & FLEXIBILITY",
    subtitle: "Recovery Focus",
    label: "RESET",
    color: "bg-emerald-600",
    image: "/service/workout3.jpg",
  },
  {
    id: 4,
    title: "MAXIMUM FAT BURN",
    subtitle: "High Intensity",
    label: "CARDIO",
    color: "bg-red-600",
    image: "/service/workout4.jpg",
  },
];

const WorkoutTypes = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workoutTypes.map((item) => (
            <div key={item.id} className="relative h-130 overflow-hidden">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 shadow-lg">
                <p className="text-sm font-semibold text-gray-500 uppercase">
                  {item.title}
                </p>

                <div
                  className={`mt-4 inline-block px-6 py-3 text-white text-xl font-extrabold ${item.color}`}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutTypes;
