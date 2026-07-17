const stats = [
  { value: "10K+", label: "Students" },
  { value: "250+", label: "Courses" },
  { value: "150+", label: "Tutors" },
  { value: "4.9★", label: "Rating" },
];

const HeroStats = () => {
  return (
    <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">

      {stats.map((item) => (
        <div key={item.label}>
          <h2 className="text-3xl font-bold text-green-700">
            {item.value}
          </h2>

          <p className="mt-2 text-gray-600">
            {item.label}
          </p>
        </div>
      ))}

    </div>
  );
};

export default HeroStats;