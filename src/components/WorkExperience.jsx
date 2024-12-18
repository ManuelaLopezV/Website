import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="container flex flex-col items-center" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 my-3 text-center text-2xl lg:text-3xl lg:pt-10 font-semibold xl:mb-6 2xl:text-4xl tracking-tighter"
      >
        Experiencia Laboral
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center w-11/12 my-8 space-y-12 sm:w-5/6 lg:w-2/3 xl:w-4/5"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="rounded-xl border border-purple-500 bg-white/10 p-5 md:p-10 lg:p-14 xl:p-14"
          >
            <h3 className="mt-2 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold uppercase">{experience.title}</h3>
            <p className="mt-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium text-purple-500">{experience.company}</p>
            <p className="mt-2 mb-4 text-sm lg:text-base xl:text-lg 2xl:text-xl font-medium italic text-gray-500">{experience.duration}</p>
            <p className="mt-2 text-xs text-justify md:text-sm lg:text-base xl:text-lg 2xl:text-xl">{experience.description}</p>
            <p className="mt-4 text-sm font-semibold lg:text-base xl:text-xl 2xl:text-2xl"><u>Industria</u>: {experience.industry}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
