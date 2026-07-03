import page1 from "../assets/page1.png";
import Vector from "../assets/Vector.png";
import GraduationCap from "../assets/GraduationCap.png";
import Microphone from "../assets/Microphone.png";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Footer from "./Footer";
import About from "../components/About.jsx"
import Features from "../components/Features.jsx"
import Mission from "../components/Mission.jsx";

function Main() {
  return (
    <div>
      <About />
      <div className="">
        
       <Features />
       
       
      </div>
      <Mission />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
export default Main;
