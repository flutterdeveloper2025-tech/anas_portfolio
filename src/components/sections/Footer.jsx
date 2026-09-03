import {motion} from "framer-motion";
import {Heart,Linkedin,Mail,Phone} from "lucide-react";
import {PERSON} from "../../data/constants";

export default function Footer(){
  return(
    <motion.footer initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}
      className="py-10 px-6 relative" style={{borderTop:"1px solid rgba(139,92,246,0.12)"}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display italic font-bold text-white text-lg mb-1" style={{background:"linear-gradient(135deg,#a78bfa,#7c3aed)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>
            Muhammad Anas Raza
          </p>
          <p className="text-xs font-mono" style={{color:"rgba(148,163,184,0.5)"}}>System & Network Administrator · Karachi, Pakistan</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            {icon:<Linkedin size={16}/>,href:PERSON.linkedin},
            {icon:<Mail size={16}/>,href:`mailto:${PERSON.email}`},
            {icon:<Phone size={16}/>,href:`tel:${PERSON.phone}`},
          ].map((s,i)=>(
            <motion.a key={i} href={s.href} target="_blank" rel="noreferrer"
              whileHover={{scale:1.1,y:-2}} whileTap={{scale:0.9}}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{background:"rgba(139,92,246,0.1)",color:"rgba(139,92,246,0.7)",border:"1px solid rgba(139,92,246,0.2)"}}>
              {s.icon}
            </motion.a>
          ))}
        </div>
        <p className="text-xs flex items-center gap-1.5" style={{color:"rgba(148,163,184,0.4)"}}>
          © 2026 Muhammad Anas Raza. Built with <Heart size={11} style={{color:"#7c3aed"}} fill="#7c3aed"/> React
        </p>
      </div>
    </motion.footer>
  );
}
