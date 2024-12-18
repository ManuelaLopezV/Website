import { FiGithub } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="container flex flex-col items-center" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 my-6 text-center text-2xl font-semibold lg:text-3xl xl:mt-14 xl:mb-10 2xl:text-4xl"
      >
        Proyectos
      </motion.h2>
      <div className="grid grid-cols-1 w-4/5 gap-10 sm:w-3/5 md:grid-cols-2 md:w-4/5 lg:grid-cols-3 lg:w-full xl:w-4/5 mb-12">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="group relative overflow-hidden rounded-3xl lg:mb-8"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
              src={project.image}
              alt={project.name}
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute px-2 inset-0 flex flex-col items-center justify-center text-gray-950 opacity-0 backdrop-blur-lg group-hover:opacity-100 transition-opacity duration-500"
            >
              {project.titleColor === "light" ? (
                <h3 className="mt-3 text-lg xl:text-xl font-bold uppercase text-purple-400">{project.name}</h3>
              ) : (
                <h3 className="mt-3 text-lg xl:text-xl font-bold uppercase text-purple-900">{project.name}</h3>
              )}

              {project.textColor === "white" ? (
                <>
                  <p className="p-4 text-sm text-justify text-white">{project.description}</p>
                  <p className="text-sm lg:text-sm font-semibold text-white"><u>STACK</u>: {project.technologies}</p>
                </>
              ) : (
                <>
                  <p className="p-4 text-sm text-justify text-black">{project.description}</p>
                  <p className="text-sm lg:text-sm font-semibold text-black"><u>STACK</u>: {project.technologies}</p>
                </>
              )}

              <div className="flex flex-row items-center gap-5 py-3">
                <a
                  href={project.github}
                  className="rounded-full border border-purple-500 bg-white/10 text-black px-4 py-2 hover:bg-purple-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <FiGithub
                      fontSize={20}
                      className="hover:opacity-80 cursor-pointer"
                    />
                  </div>
                </a>
                <a
                  href={project.link}
                  className="rounded-full border border-purple-500 bg-white/10 text-black px-4 py-2 hover:bg-purple-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    <GoArrowUpRight
                      fontSize={20}
                      className="hover:opacity-80 cursor-pointer"
                    />
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
