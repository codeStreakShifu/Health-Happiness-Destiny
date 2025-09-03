import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Highlights from "./components/Highlights";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import book from "./data/book";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import authorPhoto from "./assets/richard.jpeg";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-stone-50">
      <Navbar />
      <Hero />

      <Section id="description" title="About the Book" bg="bg-white">
        <div className="prose mx-auto" data-aos="fade-up">
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
        </div>
      </Section>

      <Section id="highlights" title="Inside the Pages" bg="bg-stone-100">
        <div data-aos="fade-up" data-aos-delay="200">
          <Highlights />
        </div>
      </Section>

      <Section id="author" title="Meet the Author" bg="bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src={authorPhoto}
            alt="Author"
            className="rounded-lg shadow-lg"
            data-aos="fade-right"
          />
          <div className="prose" data-aos="fade-left" data-aos-delay="200">
            <p className="text-gray-700">{book.author.bio}</p>
          </div>
        </div>
      </Section>

      <CallToAction />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
