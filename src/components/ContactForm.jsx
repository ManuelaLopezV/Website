import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { SiMinutemailer } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { motion } from "framer-motion";

const ContactForm = () => {

  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Debes ingresar un nombre";
    if (!formData.email) {
      errors.email = "El correo electrónico es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "El correo electrónico es inválido";
    }
    if (!formData.message) errors.message = "El mensaje es requerido";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      emailjs
        .sendForm(
          serviceID,
          templateID,
          formRef.current,
          publicKey
        )
        .then(() => {
          toast.success("Mensaje enviado con éxito");
          console.log("SUCCESS!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error(
            "Error al enviar el mensaje. Por favor, inténtelo de nuevo."
          );
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="container flex flex-col items-center" id="contact">
      <Toaster />
      <div className="mb-6 text-center md:mb-2">
          <h2 className="my-6 text-center text-2xl font-semibold lg:text-3xl 2xl:text-4xl  2xl:mt-20 2xl:mb-10 md:mb-4">Contáctame</h2>
      </div>
      <div className="flex flex-col w-3/4 sm:w-2/3 md:flex-row md:justify-between md:w-5/6 md:gap-10 lg:gap-20">
        <div className="flex flex-col items-center md:mt-12 lg:mt-14">
          <div className="flex flex-col items-start">
            <div className="m-2 flex flex-row items-center">
              <span className="text-center text-purple-500 text-3xl xl:text-4xl 2xl:text-5xl pr-5">
                <SiMinutemailer />
              </span>
              <p className="text-center text-base xl:text-xl 2xl:text-2xl">manulopezv17@gmail.com</p>
            </div>
            <div className="m-2 flex flex-row items-start">
              <span className="text-center text-purple-500 text-3xl xl:text-4xl 2xl:text-5xl pr-5">
                <IoMdCall />
              </span>
              <p className="text-center text-base xl:text-xl 2xl:text-2xl">+57 3002008553</p>
            </div>
          </div>
          <a
            href=""
            download
            className="mt-6 w-3/4 text-center rounded border border-stone-50/30 bg-purple-400 px-4 py-2 text-sm xl:text-lg 2xl:text-xl font-semibold text-stone-900 hover_bg-stone-300"
          >
            Descargar CV
          </a>
        </div>
        <div className="flex flex-col mt-16 md:m-0 md:w-4/5 lg:items-center">
          <h2 className="text-center text-lg font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl">Enviar un mensaje</h2>
          <div className="pt-8 px-3 lg:flex lg:flex-col lg:w-5/6">
            <motion.form
              ref={formRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col mb-4">
                <div className="lg:w-full">  
                  <input
                    className="mb-4 w-full appearance-none rounded-lg border border-purple-500 bg-transparent px-3 py-2 text-sm xl:text-base 2xl:text-lg focus:border-stone-400 focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Ingrese su nombre"
                    onChange={handleChange}
                    autocomplete="name"
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-sm text-rose-800"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>
                <div className="lg:w-full">
                  <input
                    className="mb-4 w-full appearance-none rounded-lg border border-purple-500 bg-transparent px-3 py-2 text-sm xl:text-base 2xl:text-lg focus:border-stone-400 focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="Digite su correo electrónico"
                    onChange={handleChange}
                    autocomplete="email"
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-sm text-rose-800"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <textarea
                  className="mb-4 w-full appearance-none rounded-lg border border-purple-500 bg-transparent px-3 py-2 text-sm xl:text-base 2xl:text-lg focus:border-stone-400 focus:outline-none"
                  id="message"
                  name="message"
                  value={formData.message}
                  placeholder="Escriba un mensaje"
                  onChange={handleChange}
                  autocomplete="off" // Desactiva el autocompletado si no es necesario
                  rows="6"
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-sm text-rose-800"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>
              <button
                className={`mb-8 w-full rounded border border-stone-50/30 bg-purple-400 px-4 py-2 text-sm xl:text-lg 2xl:text-xl font-semibold text-stone-900 hover_bg-stone-300 ${
                  isSending ? "cursor-not-allowed opacity-50" : ""
                }`}
                type="submit"
                disabled={isSending}
              >
                <div className="flex items-center justify-center gap-2">
                  {isSending ? "Enviando..." : "Enviar"}
                  <FiSend />
                </div>
              </button>
            </motion.form>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;
