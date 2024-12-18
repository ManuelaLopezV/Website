import Home from "./components/Home";
import AboutMe from "./components/AboutMe.jsx";
import Navbar from "./components/Navbar";
import Stack from "./components/Stack.jsx";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import EducationCourses from "./components/EducationCourses.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <AboutMe />
      <Stack />
      <Projects />
      <WorkExperience />
      <EducationCourses />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;