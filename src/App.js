import './App.css';
import About from './Sections/About/About';
import Footer from './Sections/Footer/Footer';
import Gallery from './Sections/Projects/Projects';
import Header from './Sections/Header/Header';
import Hero from './Sections/Hero/Hero';
import Services from './Sections/Services/Services';
import Testimonials from './Sections/Testimonials/Testimonials';

function App() {
  return (
    <>
      <div className="header-hero-wrapper">
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
