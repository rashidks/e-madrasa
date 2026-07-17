const HeroImage = () => {
  return (
    <div className="relative">

      <div className="rounded-3xl bg-white p-6 shadow-2xl">

        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=900"
          alt="Student Learning"
          className="h-[450px] w-[450px] rounded-2xl object-cover"
        />

      </div>

      <div className="absolute -left-8 top-10 rounded-2xl bg-white p-4 shadow-xl">
        <p className="text-sm text-gray-500">
          Today's Progress
        </p>

        <h2 className="text-2xl font-bold text-green-700">
          85%
        </h2>
      </div>

      <div className="absolute -right-8 bottom-10 rounded-2xl bg-white p-4 shadow-xl">
        <p className="text-sm text-gray-500">
          AI Assessment
        </p>

        <h2 className="text-2xl font-bold text-green-700">
          Excellent ⭐
        </h2>
      </div>

    </div>
  );
};

export default HeroImage;