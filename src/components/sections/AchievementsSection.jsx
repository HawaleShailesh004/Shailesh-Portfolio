"use client";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  {
    title: "1st Prize – Project Competition (2025)",
    description:
      "Secured top position among 11 teams for developing StylePredict, a business sales prediction web app using XGBoost and Flask.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 px-8 md:px-[10%] py-20 text-slate-900 dark:text-white flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        Achievements
      </h2>
      <div className="h-0.5 w-24 bg-amber-200 rounded-full mb-12" />
      <div className="space-y-8 w-[80vw]">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-start gap-4 bg-white/20 dark:bg-slate-800/30 backdrop-blur-md rounded-xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mt-1 bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              <FaTrophy size={20} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-yellow-600 dark:text-yellow-400">
                {item.title}
              </h3>
              <p className="text-base mt-2">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
