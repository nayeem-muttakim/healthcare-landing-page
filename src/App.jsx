import Appointment from "./Components/Appointment";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";
import WhoWeAre from "./Components/WhoWeAre";

function App() {
  0;

  return (
    <>
      <main>
        <section className="max-w-7xl mx-auto bg-[#FBFBFB]">
          <Navbar />
          <Hero />
          <Features />
          <WhoWeAre />
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
