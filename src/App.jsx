import Appointment from "./Components/Appointment";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import WhoWeAre from "./Components/WhoWeAre";

function App() {
 
  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto bg-[#FBFBFB]">
          <Navbar />
          <Hero />
          <Features />
          <WhoWeAre />
          <Services/>
          <Testimonial />
          <FAQ />
          <Appointment />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
