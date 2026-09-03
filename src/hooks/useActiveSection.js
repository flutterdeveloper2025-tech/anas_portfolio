import {useState,useEffect} from "react";
import {NAV} from "../data/constants";
export function useActiveSection(offset=100){
  const [active,setActive]=useState("Home");
  useEffect(()=>{
    const h=()=>{
      const secs=NAV.map(n=>document.getElementById(n.toLowerCase()));
      for(let i=secs.length-1;i>=0;i--){
        if(secs[i]&&window.scrollY>=secs[i].offsetTop-offset){setActive(NAV[i]);break;}
      }
    };
    window.addEventListener("scroll",h,{passive:true});h();
    return()=>window.removeEventListener("scroll",h);
  },[offset]);
  return active;
}
