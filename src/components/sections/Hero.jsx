import {useState,useEffect} from "react";
import {motion,useScroll,useTransform} from "framer-motion";
import {Linkedin,Mail,MapPin,Download} from "lucide-react";
import {PERSON,TECH_PILLS} from "../../data/constants";
import {scrollTo} from "../../utils/scroll";
import {G,fadeUp,stagger,growLine} from "../../utils/theme";

const TYPED_WORDS=["System Admin","Network Engineer","Cloud Architect","DevOps Supporter","Infrastructure Pro"];

function Typewriter(){
  const [idx,setIdx]=useState(0);
  const [text,setText]=useState("");
  const [deleting,setDeleting]=useState(false);

  useEffect(()=>{
    const word=TYPED_WORDS[idx];
    const speed=deleting?50:90;

    const timer=setTimeout(()=>{
      if(!deleting&&text===word){
        setTimeout(()=>setDeleting(true),1600);
        return;
      }

      if(deleting&&text===""){
        setDeleting(false);
        setIdx(i=>(i+1)%TYPED_WORDS.length);
        return;
      }

      setText(t=>deleting?t.slice(0,-1):word.slice(0,t.length+1));
    },speed);

    return()=>clearTimeout(timer);
  },[text,deleting,idx]);

  return(
    <span>
      <span style={{color:"#8b5cf6"}}>{text}</span>
      <span className="cursor"/>
    </span>
  );
}

export default function Hero(){
  const {scrollY}=useScroll();
  const orb1Y=useTransform(scrollY,[0,600],[0,120]);
  const orb2Y=useTransform(scrollY,[0,600],[0,-90]);
  const orb3Y=useTransform(scrollY,[0,600],[0,60]);

  return(
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-100 pointer-events-none"/>

      {/* Glowing orbs */}
      <motion.div
        className="orb w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-20"
        style={{
          background:"radial-gradient(circle,#7c3aed,transparent)",
          y:orb1Y
        }}
      />

      <motion.div
        style={{
          background:"radial-gradient(circle,#06b6d4,transparent)",
          y:orb2Y
        }}
        className="orb w-[400px] h-[400px] bottom-[-80px] right-[-80px] opacity-15"
      />

      <motion.div
        style={{
          background:"radial-gradient(circle,#8b5cf6,transparent)",
          y:orb3Y
        }}
        className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="space-y-7 order-2 lg:order-1"
        >

          {/* Status badge */}
          <motion.div variants={fadeUp}>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full"
              style={{
                background:"rgba(16,185,129,0.1)",
                border:"1px solid rgba(16,185,129,0.25)",
                color:"#34d399"
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"/>
              Available for Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <p
              className="font-mono text-xs sm:text-sm mb-3"
              style={{color:"#8b5cf6"}}
            >
              {"<"} Hello, World! I'm {">"}
            </p>

            <motion.div
              variants={growLine}
              className="h-[2px] w-12 rounded-full mb-4 origin-left"
              style={{background:G.gold}}
            />

            <h1 className="font-display text-[2.3rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.08] tracking-tight text-white">
              Muhammad<br/>
              <span
                className="italic"
                style={{
                  background:G.purple,
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent"
                }}
              >
                Anas Raza
              </span>
            </h1>
          </motion.div>

          {/* Typewriter */}
          <motion.div
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold"
            style={{color:"rgba(148,163,184,0.9)"}}
          >
            <Typewriter/>
          </motion.div>

          {/* Tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {PERSON.tags.map(t=>(
              <span
                key={t}
                className="text-xs font-semibold px-3 py-1.5 rounded-full font-mono"
                style={{
                  background:"rgba(139,92,246,0.1)",
                  color:"#a78bfa",
                  border:"1px solid rgba(139,92,246,0.2)"
                }}
              >
                #{t}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-[0.93rem] leading-[1.8] max-w-[500px]"
            style={{color:"rgba(148,163,184,0.8)"}}
          >
            {PERSON.about}
          </motion.p>

          {/* Location */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 text-sm"
            style={{color:"rgba(148,163,184,0.6)"}}
          >
            <MapPin size={14} style={{color:"#8b5cf6"}}/>
            {PERSON.location}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">

            {/* LinkedIn */}
            <motion.a
              href={PERSON.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{scale:1.04}}
              whileTap={{scale:0.96}}
              className="btn-glow flex items-center gap-2 px-7 py-3.5 rounded-2xl text-white font-bold text-sm"
            >
              <Linkedin size={16}/>
              Connect on LinkedIn
            </motion.a>

            {/* Get In Touch */}
            <motion.button
              onClick={()=>scrollTo("contact")}
              whileHover={{scale:1.04}}
              whileTap={{scale:0.96}}
              className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm"
            >
              <Mail size={16}/>
              Get In Touch
            </motion.button>

            {/* Download Resume */}
            <motion.a
              href="/resume.pdf"
              download="Muhammad-Anas-Raza-Resume.pdf"
              whileHover={{scale:1.04}}
              whileTap={{scale:0.96}}
              className="btn-outline flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm"
            >
              <Download size={16}/>
              Download Resume
            </motion.a>

          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2"
          >
            {PERSON.stats.map((s,i)=>(
              <motion.div
                key={i}
                whileHover={{
                  y:-3,
                  borderColor:"rgba(139,92,246,0.4)"
                }}
                className="text-center p-3 rounded-2xl transition-colors"
                style={{
                  background:"rgba(139,92,246,0.06)",
                  border:"1px solid rgba(139,92,246,0.15)"
                }}
              >
                <p
                  className="text-lg sm:text-xl font-black"
                  style={{
                    background:G.purple,
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent"
                  }}
                >
                  {s.v}
                </p>

                <p
                  className="text-[0.65rem] font-medium mt-0.5"
                  style={{color:"rgba(148,163,184,0.6)"}}
                >
                  {s.l}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* RIGHT – Profile */}
        <motion.div
          initial={{opacity:0,scale:0.8}}
          animate={{opacity:1,scale:1}}
          transition={{
            duration:1,
            ease:[0.22,1,0.36,1],
            delay:0.1
          }}
          className="relative flex items-center justify-center order-1 lg:order-2 h-[300px] sm:h-[380px] lg:h-[420px]"
        >

          {/* Scalable decorative cluster */}
          <div className="relative flex items-center justify-center scale-[0.72] sm:scale-90 lg:scale-100">

            {/* Outer decorative rings */}
            {[
              {
                s:320,
                cls:"animate-spin-slow",
                c:"rgba(124,58,237,0.12)",
                dash:"8 4"
              },
              {
                s:280,
                cls:"animate-spin-rev",
                c:"rgba(6,182,212,0.1)",
                dash:"4 6"
              },
              {
                s:240,
                cls:"animate-spin-slow",
                c:"rgba(139,92,246,0.15)",
                dash:"2 8"
              }
            ].map((r,i)=>(
              <svg
                key={i}
                className={`absolute pointer-events-none ${r.cls}`}
                style={{width:r.s,height:r.s}}
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke={r.c}
                  strokeWidth="1"
                  strokeDasharray={r.dash}
                />
              </svg>
            ))}

            {/* Corner brackets decoration */}
            {[
              ["top-6 left-6","border-t-2 border-l-2 rounded-tl-xl"],
              ["top-6 right-6","border-t-2 border-r-2 rounded-tr-xl"],
              ["bottom-6 left-6","border-b-2 border-l-2 rounded-bl-xl"],
              ["bottom-6 right-6","border-b-2 border-r-2 rounded-br-xl"]
            ].map(([pos,cls],i)=>(
              <div
                key={i}
                className={`absolute ${pos} w-8 h-8 ${cls}`}
                style={{borderColor:"rgba(139,92,246,0.4)"}}
              />
            ))}

            {/* Glow pulse */}
            <div
              className="absolute w-52 h-52 rounded-full animate-glow pointer-events-none"
              style={{
                background:"radial-gradient(circle,rgba(124,58,237,0.4),transparent 70%)"
              }}
            />

            {/* Profile frame */}
            <div className="relative z-10">

              {/* Outer ring */}
              <div
                className="w-52 h-52 rounded-full p-1"
                style={{
                  background:G.purple,
                  boxShadow:"0 0 0 4px rgba(124,58,237,0.2),0 0 60px rgba(124,58,237,0.4)"
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-800">
                  <img
                    src="/profile.jpg"
                    alt="Muhammad Anas Raza"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating status dot */}
              <div
                className="absolute bottom-3 right-3 w-5 h-5 rounded-full border-2 border-dark-900"
                style={{
                  background:"#34d399",
                  boxShadow:"0 0 12px rgba(52,211,153,0.6)"
                }}
              />
            </div>

            {/* Floating tech cards */}
            {[
              {label:"VMware ESXi",icon:"🖥️",pos:"top-4 -left-8",delay:0},
              {label:"Azure Cloud",icon:"☁️",pos:"top-16 -right-6",delay:0.3},
              {label:"Windows AD",icon:"🗂️",pos:"bottom-16 -left-10",delay:0.6},
              {label:"Docker/K8s",icon:"🐳",pos:"bottom-8 -right-4",delay:0.9}
            ].map((b,i)=>(
              <motion.div
                key={i}
                initial={{opacity:0,scale:0.6}}
                animate={{opacity:1,scale:1,y:[0,-6,0]}}
                transition={{
                  opacity:{delay:0.8+b.delay,duration:0.4},
                  scale:{delay:0.8+b.delay},
                  y:{
                    duration:3+i*0.3,
                    repeat:Infinity,
                    ease:"easeInOut",
                    delay:i*0.5
                  }
                }}
                className={`absolute ${b.pos} flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold z-20 pointer-events-none whitespace-nowrap`}
                style={{
                  background:"rgba(15,15,26,0.9)",
                  backdropFilter:"blur(10px)",
                  border:"1px solid rgba(139,92,246,0.25)",
                  color:"#a78bfa",
                  boxShadow:"0 4px 20px rgba(0,0,0,0.3)"
                }}
              >
                <span>{b.icon}</span>
                {b.label}
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>

      {/* Scrolling tech pills */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden py-4"
        style={{borderTop:"1px solid rgba(139,92,246,0.1)"}}
      >
        <motion.div
          animate={{x:[0,-1400]}}
          transition={{
            duration:20,
            repeat:Infinity,
            ease:"linear"
          }}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...TECH_PILLS,...TECH_PILLS,...TECH_PILLS].map((t,i)=>(
            <span
              key={i}
              className="text-xs font-semibold px-4 py-1.5 rounded-full font-mono flex-shrink-0"
              style={{
                background:"rgba(139,92,246,0.08)",
                color:"rgba(139,92,246,0.6)",
                border:"1px solid rgba(139,92,246,0.12)"
              }}
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>

    </section>
  );
}