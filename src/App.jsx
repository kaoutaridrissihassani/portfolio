import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import { useEffect } from "react";
import AOS from "aos";
import { Helmet } from "react-helmet-async";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic",
  });
}, []);
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
       <Helmet>
    <title>Kaoutar Studio | Virtual Assistant & Web Developer</title>

    <meta
      name="description"
      content="Professional portfolio of Kaoutar Idrissi Hassani. Virtual Assistant, Web Developer, Canva Designer, Social Media Manager and Educational Technology Specialist."
    />

    <meta
      name="keywords"
      content="Virtual Assistant, Canva Designer, Social Media Manager, Web Developer, React Portfolio, Morocco, China, Educational Technology"
    />

    <meta
      name="author"
      content="Kaoutar Idrissi Hassani"
    />

    <meta
      property="og:title"
      content="Kaoutar Studio"
    />

    <meta
      property="og:description"
      content="Portfolio showcasing Virtual Assistance, Web Development, Canva Design and Social Media projects."
    />

    <meta
      property="og:image"
      content="/favicon.png"
    />

    <meta
      property="og:type"
      content="website"
    />

    <meta
      property="og:url"
      content="https://kaoutaridrissihassani.github.io"
    />

    <meta
      name="twitter:card"
      content="summary_large_image"
    />
  </Helmet>
  <Navbar />
  <Hero />
  <Services />
  <About />
  <Skills />
  <Portfolio />
  <WhyWorkWithMe />
  <Contact />
  <Footer />
</div>
  );
}

export default App;