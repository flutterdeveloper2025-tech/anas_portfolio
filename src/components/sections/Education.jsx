import {useRef} from "react";
import {motion,useInView} from "framer-motion";
import {EDUCATION,CERTS} from "../../data/constants";
import {fadeUp,scaleIn,stagger} from "../../utils/theme";
import SectionHeading from "../ui/SectionHeading";

export default function Education(){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section id="education" className="py-24 relative">
      <div className="orb w-[350px] h-[350px] bottom-0 left-1/4 opacity-[0.08] pointer-events-none"
        style={{background:"radial-gradient(circle,#10b981,transparent)"}}/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView?"show":"hidden"}>
          <SectionHeading eyebrow="// education & certifications" title="Education" accent="& Certs"/>
        </motion.div>

        <motion.div initial="hidden" animate={inView?"show":"hidden"} variants={stagger}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Education */}
          <div className="space-y-4">
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm"
                style={{background:"rgba(139,92,246,0.2)"}}>🎓</span>
              Academic Background
            </h3>
            {EDUCATION.map((e,i)=>(
              <motion.div key={i} variants={fadeUp}
                whileHover={{borderColor:"rgba(139,92,246,0.3)",boxShadow:"0 10px 40px rgba(0,0,0,0.2)"}}
                className="flex gap-4 p-5 rounded-2xl transition-all duration-300"
                style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{background:"rgba(139,92,246,0.1)",border:"1px solid rgba(139,92,246,0.2)"}}>
                  {e.icon}
                </div>
                <div>
                  <h4 className="font-black text-white text-sm leading-snug">{e.degree}</h4>
                  <p className="font-semibold text-xs mt-1" style={{color:"#8b5cf6"}}>{e.institute}</p>
                  <div className="flex flex-wrap gap-3 mt-2 text-xs" style={{color:"rgba(148,163,184,0.5)"}}>
                    <span>📅 {e.year}</span><span>📍 {e.location}</span>
                  </div>
                  <p className="text-xs mt-2 leading-relaxed" style={{color:"rgba(148,163,184,0.55)"}}>{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg flex items-center justify-center text-sm"
                style={{background:"rgba(139,92,246,0.2)"}}>🏆</span>
              Certifications
            </h3>
            <div className="space-y-4 mb-10">
              {CERTS.map((c,i)=>(
                <motion.div key={i} variants={scaleIn}
                  whileHover={{borderColor:`${c.color}40`,boxShadow:`0 10px 40px ${c.color}10`}}
                  className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{background:`${c.color}15`,border:`1px solid ${c.color}25`}}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="font-black text-white text-sm">{c.name}</p>
                    <p className="text-xs mt-1 font-medium" style={{color:c.color}}>Issued by {c.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="p-5 rounded-2xl" style={{background:"rgba(139,92,246,0.05)",border:"1px solid rgba(139,92,246,0.15)"}}>
              <h4 className="font-bold text-white text-sm mb-4">Soft Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving","Troubleshooting","Team Collaboration","Time Management","Communication","Vendor Management"].map(s=>(
                  <span key={s} className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{background:"rgba(139,92,246,0.1)",color:"#a78bfa",border:"1px solid rgba(139,92,246,0.2)"}}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
