const hero = document.Queryselector(".hero");
const slider = document.Queryselector(".slider");
const logo = document.Queryselector("#logo");
const hamburger = document.Queryselector(".hamburger");
const headline= document.Queryselector(".headline");


const tl = new Timelinemax();
tl.fromTo(hero,1,{height: "0%"},{height: "80%"
,ease: Power2. easeinOut})
.fromTo(hero,1.2{width:"100%"} ,{width:"80%"
,ease: Power2. easeinOut})
.fromTo(slider,1.2, {x:"-100%"}, {x:"0%",ease: Power2. easeinOut} 
"-=1.2"
)
.fromTo(logo,0.5 {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger,0.5 {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline,0.5 {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");
