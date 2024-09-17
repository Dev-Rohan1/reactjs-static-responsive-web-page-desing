import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Program from "./components/Program/Program";
import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Program />
      <About />
      <Gallery />
      <Slider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
