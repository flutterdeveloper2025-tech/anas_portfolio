import {useRef} from "react";
import {motion,useInView} from "framer-motion";
import {ExternalLink} from "lucide-react";
import {PROJECTS} from "../../data/constants";
import {fadeUp,stagger} from "../../utils/theme";
import SectionHeading from "../ui/SectionHeading";

export default function Projects(){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section id="projects" className="py-24 relative">
      <div className="orb w-[450px] h-[450px] top-0 right-1/4 opacity-[0.08] pointer-events-none"
        style={{background:"radial-gradient(circle,#8b5cf6,transparent)"}}/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView?"show":"hidden"}>
          <SectionHeading eyebrow="// featured projects" title="My" accent="Projects"
            subtitle="Real infrastructure, cloud & DevOps projects. View full details on LinkedIn."/>
        </motion.div>

        <motion.div initial="hidden" animate={inView?"show":"hidden"} variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p,i)=>(
            <motion.div key={i} variants={fadeUp}
              whileHover={{y:-10,scale:1.02,borderColor:`${p.color}40`,boxShadow:`0 24px 60px ${p.color}18`}}
              transition={{duration:0.35,ease:[0.22,1,0.36,1]}}
              className="group p-6 rounded-2xl flex flex-col transition-all duration-300"
              style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>

              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{background:`${p.color}15`,border:`1px solid ${p.color}25`}}>
                  {p.emoji}
                </div>
                <motion.a href="https://www.linkedin.com/in/muhammad-anas-raza-882327259/" target="_blank" rel="noreferrer"
                  whileHover={{scale:1.1}} whileTap={{scale:0.9}}
                  className="opacity-0 group-hover:opacity-100 transition-opacity w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{background:`${p.color}20`,color:p.color}}>
                  <ExternalLink size={15}/>
                </motion.a>
              </div>

              <h3 className="font-black text-white text-base mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{color:"rgba(148,163,184,0.65)"}}>{p.desc}</p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5 pt-4" style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
                {p.tech.map((t,j)=>(
                  <span key={j} className="text-[0.65rem] font-semibold px-2 py-1 rounded-md font-mono"
                    style={{background:`${p.color}12`,color:p.color}}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
