import {motion} from "framer-motion";
import {fadeUp,growLine,stagger,G} from "../../utils/theme";

/**
 * Elegant, reusable section heading:
 * eyebrow (mono) -> divider (gold, grows in) -> serif display heading -> optional subtitle
 */
export default function SectionHeading({eyebrow,title,accent,subtitle,align="left",className=""}){
  const items="left"===align?"items-start text-left":"items-center text-center";
  return(
    <motion.div variants={stagger} className={`mb-14 flex flex-col ${items} ${className}`}>
      <motion.p variants={fadeUp} className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3" style={{color:"#8b5cf6"}}>
        {eyebrow}
      </motion.p>
      <motion.div variants={growLine} className="h-[2px] w-14 rounded-full mb-5 origin-left"
        style={{background:G.gold}}/>
      <motion.h2 variants={fadeUp} className="font-display italic text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
        {title}{accent&&<> <span style={{background:G.purple,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{accent}</span></>}
      </motion.h2>
      {subtitle&&(
        <motion.p variants={fadeUp} className="text-sm max-w-xl" style={{color:"rgba(148,163,184,0.6)"}}>
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
