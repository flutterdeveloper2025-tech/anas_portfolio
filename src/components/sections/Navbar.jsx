import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {Menu,X,Terminal} from "lucide-react";
import {NAV} from "../../data/constants";
import {useActiveSection} from "../../hooks/useActiveSection";
import {useScrolled} from "../../hooks/useScrolled";
import {scrollTo} from "../../utils/scroll";

export default function Navbar(){
  const [open,setOpen]=useState(false);
  const active=useActiveSection();
  const scrolled=useScrolled(40);
  const go=l=>{setOpen(false);scrollTo(l);};

  return(
    <>
      <motion.nav initial={{y:-70,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.7,ease:[0.22,1,0.36,1]}}
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
        style={{
          background:scrolled?"rgba(10,10,15,0.95)":"rgba(10,10,15,0.6)",
          backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
          borderBottom:scrolled?"1px solid rgba(139,92,246,0.2)":"1px solid transparent",
          boxShadow:scrolled?"0 4px 30px rgba(124,58,237,0.08)":"none",
          transition:"all 0.4s ease",
        }}>

        {/* Logo */}
        <motion.button onClick={()=>go("home")} whileHover={{scale:1.04}} whileTap={{scale:0.96}}
          className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)"}}>
            <Terminal size={16} className="text-white"/>
          </div>
          <span className="font-display italic font-bold text-white text-[1.05rem] tracking-tight hidden sm:block">
            Anas<span style={{color:"#8b5cf6"}}>.dev</span>
          </span>
        </motion.button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV.map(l=>(
            <button key={l} onClick={()=>go(l)}
              className={`nav-link ${active===l?"active":""}`}>
              {l}
            </button>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <motion.a href="https://www.linkedin.com/in/muhammad-anas-raza-882327259/" target="_blank" rel="noreferrer"
            whileHover={{scale:1.04}} whileTap={{scale:0.96}}
            className="hidden md:flex items-center gap-2 btn-glow px-4 py-2 rounded-xl text-white text-xs font-semibold">
            Hire Me
          </motion.a>
          <button className="md:hidden p-2 rounded-xl" style={{color:"rgba(148,163,184,0.8)"}}
            onClick={()=>setOpen(o=>!o)}>
            {open?<X size={22}/>:<Menu size={22}/>}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open&&(
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.2}}
            className="fixed top-[68px] left-4 right-4 z-40 rounded-2xl p-4 flex flex-col gap-1"
            style={{background:"rgba(15,15,26,0.98)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(139,92,246,0.2)",boxShadow:"0 20px 60px rgba(0,0,0,0.5)"}}>
            {NAV.map(l=>(
              <button key={l} onClick={()=>go(l)}
                className="text-left px-4 py-3 rounded-xl text-sm font-medium transition-all"
                style={{color:active===l?"#a78bfa":"rgba(148,163,184,0.8)",background:active===l?"rgba(139,92,246,0.1)":"transparent"}}>
                {l}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
