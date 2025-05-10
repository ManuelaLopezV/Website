import { ABOUT_ME } from "../constants";
import manuelaImg from "../assets/foto-manu.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section className="container flex flex-col items-center" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 my-6 text-center text-2xl font-semibold lg:text-3xl lg:pt-14 xl:mt-14 xl:mb-6 2xl:text-4xl 2xl:pt-0"
      >
        Acerca de mi
      </motion.h2>
      <div className="container flex flex-col h-full items-center lg:flex-row lg:text-lg xl:items-center xl:px-28 2xl">
        <div className="w-1/3 xl:w-2/5">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="rounded-3xl w-40 sm:w-48 lg:w-56 lg:mb-16 lg:ml-20 xl:w-60"
              src={manuelaImg}
              alt="Manuela López"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col w-4/5 m-8 items-center sm:w-4/5 lg:w-3/5 xl:w-3/5"
        >
          {ABOUT_ME.map((about, index) => (
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              key={index}
              className="mb-7 px-3 text-justify text-base xl:text-lg xl:px-10 2xl:text-xl"
            >
              {about.firstParagraph}
              {about.secondParagraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
