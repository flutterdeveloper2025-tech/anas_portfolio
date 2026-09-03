import {useRef} from "react";
import {motion,useInView} from "framer-motion";
import {ChevronRight,Award,Building2,Calendar,MapPin} from "lucide-react";
import {EXPERIENCES} from "../../data/constants";
import {fadeUp,stagger} from "../../utils/theme";
import SectionHeading from "../ui/SectionHeading";

function Pill({name,color}){
  return(
    <span className="text-[0.65rem] font-semibold px-2.5 py-1 rounded-full font-mono"
      style={{background:`${color}15`,color,border:`1px solid ${color}25`}}>
      {name}
    </span>
  );
}

export default function Experience(){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section id="experience" className="py-24 relative">
      <div className="orb w-[350px] h-[350px] top-1/4 left-0 opacity-10 pointer-events-none"
        style={{background:"radial-gradient(circle,#06b6d4,transparent)"}}/>
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div ref={ref} initial="hidden" animate={inView?"show":"hidden"}>
          <SectionHeading eyebrow="// work experience" title="My" accent="Experience"
            subtitle="3+ years across university, institute & corporate IT environments."/>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-12">
          <div className="timeline-line"/>
          <motion.div initial="hidden" animate={inView?"show":"hidden"} variants={stagger} className="space-y-8">
            {EXPERIENCES.map((exp,i)=>(
              <motion.div key={i} variants={fadeUp} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-10 sm:-left-12 top-6 w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center"
                  style={{background:exp.color,borderColor:`${exp.color}40`,boxShadow:`0 0 16px ${exp.color}60`}}>
                  <div className="w-2 h-2 rounded-full bg-white/80"/>
                </div>

                <motion.div whileHover={{borderColor:"rgba(139,92,246,0.35)",boxShadow:"0 16px 48px rgba(0,0,0,0.3)"}}
                  className="p-6 rounded-2xl transition-all duration-300"
                  style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>

                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-black text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 size={13} style={{color:exp.color}}/>
                        <span className="font-semibold text-sm" style={{color:exp.color}}>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-full"
                        style={{background:"rgba(245,158,11,0.12)",color:"#fbbf24",border:"1px solid rgba(245,158,11,0.2)"}}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-5 text-xs" style={{color:"rgba(148,163,184,0.55)"}}>
                    <span className="flex items-center gap-1.5"><Calendar size={12}/>{exp.period}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={12}/>{exp.location}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b,j)=>(
                      <li key={j} className="flex items-start gap-2.5 text-sm" style={{color:"rgba(148,163,184,0.75)"}}>
                        <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{color:exp.color}}/>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Achievement */}
                  {exp.achievement&&(
                    <div className="flex items-start gap-2.5 p-3 rounded-xl mb-4"
                      style={{background:`${exp.color}0d`,border:`1px solid ${exp.color}20`}}>
                      <Award size={14} className="mt-0.5 flex-shrink-0" style={{color:exp.color}}/>
                      <p className="text-xs font-medium" style={{color:exp.color}}>{exp.achievement}</p>
                    </div>
                  )}

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t,j)=><Pill key={j} name={t} color={exp.color}/>)}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
