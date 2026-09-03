import {useState,useEffect} from "react";
export function useScrolled(t=30){
  const [s,setS]=useState(false);
  useEffect(()=>{
    const h=()=>setS(window.scrollY>t);
    window.addEventListener("scroll",h,{passive:true});h();
    return()=>window.removeEventListener("scroll",h);
  },[t]);
  return s;
}
