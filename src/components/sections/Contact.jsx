import {useRef,useState} from "react";
import {motion,useInView} from "framer-motion";
import {Send,Linkedin} from "lucide-react";
import {CONTACT,PERSON} from "../../data/constants";
import {fadeUp,stagger} from "../../utils/theme";
import SectionHeading from "../ui/SectionHeading";

export default function Contact(){
  const ref=useRef(null);
  const inView=useInView(ref,{once:true,margin:"-60px"});
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [sent,setSent]=useState(false);
  const [loading,setLoading]=useState(false);
  const ch=e=>setForm(p=>({...p,[e.target.name]:e.target.value}));
  const [error,setError]=useState("");
  const sub=async()=>{
    if(!form.name||!form.email||!form.message)return;
    setError("");
    setLoading(true);
    try{
      const res=await fetch("https://formsubmit.co/ajax/manasraza18@gmail.com",{
        method:"POST",
        headers:{"Content-Type":"application/json",Accept:"application/json"},
        body:JSON.stringify({
          name:form.name,
          email:form.email,
          message:form.message,
          _subject:`Portfolio message from ${form.name}`,
        }),
      });
      if(!res.ok)throw new Error("Failed");
      setSent(true);
      setForm({name:"",email:"",message:""});
    }catch(err){
      setError("Couldn't send right now — please email me directly instead.");
    }finally{
      setLoading(false);
    }
  };
  return(
    <section id="contact" className="py-24 relative">
      <div className="orb w-[400px] h-[400px] bottom-0 right-0 opacity-10 pointer-events-none"
        style={{background:"radial-gradient(circle,#7c3aed,transparent)"}}/>
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div ref={ref} initial="hidden" animate={inView?"show":"hidden"}>
          <SectionHeading eyebrow="// let's connect" title="Get In" accent="Touch"
            subtitle="Available for full-time roles & infrastructure projects. Let's talk!"/>
        </motion.div>

        <motion.div initial="hidden" animate={inView?"show":"hidden"} variants={stagger}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Left */}
          <motion.div variants={fadeUp} className="space-y-5">
            <div className="p-6 rounded-2xl mb-6" style={{background:"rgba(139,92,246,0.05)",border:"1px solid rgba(139,92,246,0.15)"}}>
              <h3 className="font-black text-white text-lg mb-2">Let's Work Together</h3>
              <p className="text-sm leading-relaxed" style={{color:"rgba(148,163,184,0.65)"}}>
                Looking for a skilled System & Network Administrator? I bring 3+ years of hands-on experience in enterprise infrastructure, cloud, virtualization, and DevOps support.
              </p>
            </div>

            {CONTACT.map((c,i)=>(
              <motion.a key={i} href={c.href} target={c.href.startsWith("http")?"_blank":"_self"} rel="noreferrer"
                whileHover={{x:6,borderColor:"rgba(139,92,246,0.35)"}}
                className="flex items-center gap-4 p-4 rounded-2xl no-underline transition-all duration-200"
                style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.12)"}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{background:"rgba(139,92,246,0.12)",border:"1px solid rgba(139,92,246,0.2)"}}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{color:"rgba(139,92,246,0.7)"}}>{c.label}</p>
                  <p className="text-sm font-semibold text-white break-all">{c.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.a href={PERSON.linkedin} target="_blank" rel="noreferrer"
              whileHover={{scale:1.02}} whileTap={{scale:0.97}}
              className="btn-glow flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-white font-bold text-sm mt-2">
              <Linkedin size={18}/> View LinkedIn Profile
            </motion.a>
          </motion.div>

          {/* Right – Form */}
          <motion.div variants={fadeUp} className="p-7 rounded-2xl"
            style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(139,92,246,0.15)"}}>
            <h3 className="font-black text-white text-lg mb-6">Send a Message</h3>
            {sent?(
              <motion.div initial={{scale:0.8,opacity:0}} animate={{scale:1,opacity:1}} className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <p className="font-black text-white text-xl mb-2">Message Sent!</p>
                <p className="text-sm" style={{color:"rgba(148,163,184,0.6)"}}>I'll get back to you soon.</p>
                <button onClick={()=>setSent(false)} className="mt-5 text-xs underline" style={{color:"#8b5cf6"}}>Send another</button>
              </motion.div>
            ):(
              <div className="space-y-4">
                <input name="name" type="text" placeholder="Your Name" value={form.name} onChange={ch} className="input-dark"/>
                <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={ch} className="input-dark"/>
                <textarea name="message" rows={5} placeholder="Your Message" value={form.message} onChange={ch} className="input-dark"/>
                <motion.button onClick={sub} disabled={loading}
                  whileHover={{scale:1.02}} whileTap={{scale:0.97}}
                  className="btn-glow w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold text-sm"
                  style={{opacity:loading?0.7:1}}>
                  {loading?"Sending…":<><Send size={16}/>Send Message</>}
                </motion.button>
                {error&&<p className="text-xs text-center" style={{color:"#f87171"}}>{error}</p>}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}