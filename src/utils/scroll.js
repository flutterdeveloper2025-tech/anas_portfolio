export const scrollTo=id=>document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth",block:"start"});
export const scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"});
