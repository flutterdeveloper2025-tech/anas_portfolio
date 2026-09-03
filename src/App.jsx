import Navbar       from "./components/sections/Navbar";
import Hero         from "./components/sections/Hero";
import Skills       from "./components/sections/Skills";
import Experience   from "./components/sections/Experience";
import Projects     from "./components/sections/Projects";
import Education    from "./components/sections/Education";
import Contact      from "./components/sections/Contact";
import Footer       from "./components/sections/Footer";
import ScrollTopBtn from "./components/ui/ScrollTopBtn";

export default function App(){
  return(
    <div className="min-h-screen font-poppins relative overflow-x-hidden" style={{background:"#0a0a0f",color:"#e2e8f0"}}>
      <Navbar/>
      <main>
        <Hero/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollTopBtn/>
    </div>
  );
}
