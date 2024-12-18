import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const EducationCourses = () => {
  return (
    <section className="container flex flex-col items-center" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 mt-10 mb-1 text-center text-2xl lg:text-3xl lg:pt-4 font-semibold xl:mt-20 2xl:text-4xl tracking-tighter"
      >
        Educación y Cursos
      </motion.h2>
      {EDUCATION.map((education, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="flex flex-col w-11/12 m-6 p-3 sm:w-5/6 lg:w-3/4 lg:px-10 lg:p-6 xl:w-4/5
          "
        >
          <h3 className="mt-2 text-lg font-semibold text-purple-500 lg:text-2xl">
            {education.degree}
          </h3>
          <h3 className="mt-2 text-sm sm:mt-1 lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{education.subtitle1}</h3>
          <h3 className="mt-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{education.subtitle2}</h3>
          <h3 className="mt-2 text-sm lg:text-lg xl:text-xl 2xl:text-2xl font-semibold">{education.subtitle3}</h3>

          <p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl">{education.institution}</p>
          <p className="mt-3 mb-4 text-sm lg:text-base xl:text-lg 2xl:text-xl italic text-stone-400">
            {education.duration}
          </p>


          <p className="mt-2 text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify">{education.description}</p>
          <p className="mt-3 text-sm xl:text-base 2xl:text-base 62xl:mt- text-purple-400">{education.aditional}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default EducationCourses;
