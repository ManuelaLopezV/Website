import Logo from "../assets/logo-blanco.png";
import { SOCIAL_LINKS } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mb-8 mt-10 md:mt-14 2xl:mt-20">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          src={Logo}
          width={100}
          className="mb-10 xl:w-28 2xl:mb-6"
          alt="Logo"
        />
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 md:mt-3 xl:w-12"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
      <p className="mt-8 pb-5 text-center text-sm xl:text-base 2xl:text-lg tracking-wide text-gray-400">
        &copy;Manuela López. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
