import {useRef} from "react";
import {motion,useInView} from "framer-motion";
import {SKILLS} from "../../data/constants";
import {scaleIn,stagger,staggerF} from "../../utils/theme";
import SectionHeading from "../ui/SectionHeading";

function SkillBar({name,p,color,i}){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true});
  return(
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-xs font-medium" style={{color:"rgba(148,163,184,0.85)"}}>{name}</span>
        <span className="text-xs font-bold font-mono" style={{color}}>{p}%</span>
      </div>
      <div className="h-1.5 rounded-full" style={{background:"rgba(255,255,255,0.05)"}}>
        <motion.div className="h-full rounded-full"
          initial={{width:0}} animate={inView?{width:`${p}%`}:{width:0}}
          transition={{duration:1.2,delay:i*0.06,ease:[0.22,1,0.36,1]}}
          style={{background:`linear-gradient(90deg,${color},${color}99)`}}/>
      </div>
    </div>
  );
}

export default function Skills(){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,margin:"-60px"});
  return(
    <section id="skills" className="py-24 relative">
      <div className="orb w-[400px] h-[400px] top-1/2 right-0 opacity-10 pointer-events-none"
        style={{background:"radial-gradient(circle,#7c3aed,transparent)"}}/>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div ref={ref} initial="hidden" animate={inView?"show":"hidden"}>
          <SectionHeading eyebrow="// skills & expertise" title="Technical" accent="Skills"
            subtitle="3+ years of hands-on expertise across infrastructure, networking, cloud & DevOps."/>
        </motion.div>

        {/* Cards grid */}
        <motion.div initial="hidden" animate={inView?"show":"hidden"} variants={stagger}
          className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {SKILLS.map((card,ci)=>(
            <motion.div key={ci} variants={scaleIn} whileHover={{y:-5}}
              className="card-hover p-5 sm:p-6 rounded-2xl"
              style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{background:`${card.color}18`,border:`1px solid ${card.color}30`}}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">{card.cat}</h3>
                  <p className="text-xs font-mono" style={{color:card.color}}>{card.items.length} skills</p>
                </div>
              </div>
              {/* Skill bars */}
              <motion.div variants={staggerF} className="space-y-3.5">
                {card.items.map((s,si)=>(
                  <SkillBar key={si} name={s.n} p={s.p} color={card.color} i={si}/>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
