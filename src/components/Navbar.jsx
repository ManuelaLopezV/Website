import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Logo from "../assets/logo-blanco.png";
import { NAVIGATION_LINKS } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto mt-2 hidden max-w-2xl h-16 items-center rounded-lg border border-purple-500 bg-blac/20 py-3 backdrop-blur-lg md:flex lg:max-w-4xl lg:mt-7 xl:max-w-5xl">
          <div className="flex items-center justify-between gap-4 lg:gap-10 xl:gap-14">
            <div>
              <a href="#">
                <img className="mx-2 md:w-20" src={Logo} alt="Logo" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-3 lg:gap-8">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-base lg:text-lg xl:text-xl hover:text-purple-500"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md md:hidden">
          <div className="flex flex-row justify-around gap-20">
            <div className="">
              <a href="#">
                <img className="m-2 w-20 md:w-24" src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-7 w-7 md:h-8 md:w-8" />
                ) : (
                  <FaBars className="m-2 h-7 w-7 md:h-8 md:w-8" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col items-end mr-8 mt-4 gap-3 backdrop-blur-md sm:gap-4 sm:mr-32">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-sm font-semibold hover:text-purple-500 sm:text-base"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
