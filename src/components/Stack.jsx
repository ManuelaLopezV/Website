import { STACK } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const Stack = () => {
  return (
    <section className="container flex flex-col items-center" id="stack">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 my-3 text-center text-2xl font-semibold lg:text-3xl lg:mt-10 xl:mt-14 xl:mb-6 2xl:text-4xl"
      >
        Tecnologías y Herramientas
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-2 mt-6 mb-14 flex flex-col rounded-3xl px-5 py-2 sm:w-3/4 sm:px-10 md:px-14 lg:px-20 lg:py-3 xl:w-3/5 border border-purple-500"
      >
        {STACK.map((stack, index) => (
          <motion.div
            variants={itemVariants}
            key={index}
            className={`py-4 flex items-center justify-between ${
              index !== STACK.length - 1 ? "border-b border-purple-400" : ""
            }`}
          >
            <div className="flex items-center">
              {stack.icon}
              <h3 className="px-6 text-base font-semibold lg:text-lg xl:text-xl">{stack.name}</h3>
            </div>
            <div className="px-6 text-base lg:text-lg xl:text-xl">
              <span>{stack.experience}</span>
            </div>  
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stack;
