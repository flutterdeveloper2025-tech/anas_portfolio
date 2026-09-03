module.exports = {
  content: ["./src/**/*.{js,jsx}","./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins","system-ui","sans-serif"],
        display: ["'Playfair Display'","Georgia","serif"],
      },
      colors: {
        dark: { 900:"#0a0a0f", 800:"#0f0f1a", 700:"#141424", 600:"#1a1a2e", 500:"#1e1e35" },
        purple: { 400:"#a78bfa", 500:"#8b5cf6", 600:"#7c3aed", 700:"#6d28d9" },
        gold: { 300:"#f3dfa8", 400:"#e9c674", 500:"#d4af6a" },
      },
      animation: {
        "spin-slow":"spinSlow 20s linear infinite",
        "spin-rev":"spinRev 25s linear infinite",
        "float":"float 4s ease-in-out infinite",
        "glow":"glow 3s ease-in-out infinite",
        "blink":"blink 1.2s step-end infinite",
        "slide-up":"slideUp 0.6s ease forwards",
      },
      keyframes: {
        spinSlow:  {from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}},
        spinRev:   {from:{transform:"rotate(360deg)"},to:{transform:"rotate(0deg)"}},
        float:     {"0%,100%":{transform:"translateY(0)"},"50%":{transform:"translateY(-12px)"}},
        glow:      {"0%,100%":{opacity:0.5},"50%":{opacity:1}},
        blink:     {"0%,100%":{opacity:1},"50%":{opacity:0}},
        slideUp:   {from:{opacity:0,transform:"translateY(30px)"},to:{opacity:1,transform:"translateY(0)"}},
      },
    },
  },
  plugins: [],
};
