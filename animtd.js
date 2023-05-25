document.getElementById("hero")
document.getElementById("slinder")
document.getElementById("#logo") 
document.getElementById("hamburger")
document.getElementById("headline")


const tl = new Timelinemax();
tl.fromTo(hero,1,{height: "0%"},{height: "80%"
,ease: Power2. easeinOut})
.fromTo(hero,1.2,{width:"100%"} ,{width:"80%"
,ease: Power2. easeinOut})
.fromTo(slider,1.2, {x:"-100%"}, {x:"0%",ease: Power2. easeinOut} 
)
tl.fromTo(logo,0.5 ,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
tl.fromTo(hamburger,0.5 ,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
tl.fromTo(headline,0.5 ,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");

