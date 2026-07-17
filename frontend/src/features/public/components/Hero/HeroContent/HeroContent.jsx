import HeroButtons from "../HeroButtons";
import HeroStats from "../HeroStats";

const HeroContent = () => {
  return (
    <div className="max-w-2xl">

      <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
        ✨ AI Powered Islamic Learning Platform
      </span>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
        Learn
        <span className="block text-green-700">
          Quran & Islamic Studies
        </span>
        Smarter with AI
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        Interactive Quran learning, AI-powered assessments,
        Arabic courses, live classes, progress tracking,
        certificates and much more.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
};

export default HeroContent;