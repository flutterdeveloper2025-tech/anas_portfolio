import {useState,useEffect} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {scrollToTop} from "../../utils/scroll";
export default function ScrollTopBtn(){
  const [show,setShow]=useState(false);
  useEffect(()=>{
    const h=()=>setShow(window.scrollY>400);
    window.addEventListener("scroll",h,{passive:true});
    return()=>window.removeEventListener("scroll",h);
  },[]);
  return(
    <AnimatePresence>
      {show&&(
        <motion.button initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.5}}
          whileHover={{scale:1.1}} whileTap={{scale:0.9}} onClick={scrollToTop}
          className="fixed bottom-8 right-6 z-50 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg"
          style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)",boxShadow:"0 0 20px rgba(124,58,237,0.5)"}}>
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
