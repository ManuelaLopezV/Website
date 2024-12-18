import { motion } from "framer-motion";
import { GREETING } from "../constants";
import { SOCIAL_LINKS_HOME } from "../constants";
import manuelaEmoji from "../assets/manuela-emoji-2.png";
import { useTheme } from "../theme/ThemeContext";
import moonIcon from "../assets/moon.svg";
import sunIcon from "../assets/sun.svg";
import CV from "../assets/CV_Manuela_López1.pdf";

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  
  const themeIcon = theme === "Light" ? sunIcon : moonIcon;

  return (
    <section className="flex flex-col items-center gap-9 pt-28 pb-14 text-center lg:flex-row-reverse lg:gap-28 lg:mt-24 lg:justify-center 2xl:pt-24">
      <div className="relative lg:mb-16 xl:mb-20">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-6 left-0 ml-48 cursor-pointer lg:w-7 lg:ml-60"
          src={themeIcon}
          alt="Color mode light icon"
          onClick={toggleTheme}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-40 lg:max-w-56"
          src={manuelaEmoji}
          alt="Emoji de Manuela López"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col gap-6 items-center lg:gap-8 lg:mt-5 xl:mt-0">
        <div className="flex flex-col">
          <p className="text-lg tracking-tighter md:text-xl lg:text-2xl xl:text-3xl">
            Soy <span className="text-purple-500">[{GREETING.name}]</span>
          </p>
          <p className="text-lg tracking-tighter md:text-xl lg:text-2xl xl:text-3xl">
            de Medellín, Colombia.
          </p>
        </div>
        <p className="text-lg md:text-xl lg:text-xl xl:text-2xl font-bold underline">{GREETING.description}</p>
        <span className="flex gap-7 justify-center lg:gap-8">
          {SOCIAL_LINKS_HOME.map((link, index) => (
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: index * 0.5 }}
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 md:mt-3 xl:w-9"
            >
              {link.icon}
            </motion.a>
          ))}
        </span>
        <a
          href={CV}
          download  
          className="flex w-1/2 justify-center mt-5 text-xs/[13px] md:text-sm md:w-3/5 md:mt-3 lg:text-base xl:text-lg xl:p-2.5 rounded border border-stone-50/30 bg-purple-400 px-4 py-2 font-semibold text-stone-900 hover:bg-purple-600"
        >
          Descargar CV
        </a>
      </motion.div>
    </section>
  );
};

export default Home;
