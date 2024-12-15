import './App.css';
import About from './sections/About/About';
import Footer from './sections/Footer/Footer';
import Gallery from './sections/Projects/Projects';
import Header from './sections/Header/Header';
import Hero from './sections/Hero/Hero';
import Services from './sections/Services/Services';
import Testimonials from './sections/Testimonials/Testimonials';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
