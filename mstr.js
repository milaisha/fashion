document.getElementById("hero").setAttribute("style","width:100px");
document.getElementById("hero").style.width= '100px';      
document.getElementById("slider").setAttribute("style","position:absolute;width:100%;height:100vh");
document.getElementById("slider").style.position= 'absolute';
document.getElementById("slider").style.width= '100%';
document.getElementById("slider").style.height= '100vh';
document.getElementById("#logo").setAttribute("style","opacity:0;top:100%")
document.getElementById("#logo").style.opacity= '0';
document.getElementById("#logo").style.top= '100%';
document.getElementById("hamburger").setAttribute("style","")
document.getElementById("headline").setAttribute("style","")



      var tl = new Timelinemax({});
tl.To(hero,1,{height: "0%"},{height: "80%"
,ease: Power2. easeinOut})
tl.To(hero,1.2,{width:"100%"} ,{width:"80%"
,ease: Power2. easeinOut})
tl.To(slider,1.2, {x:"-100%"}, {x:"0%",ease: Power2. easeinOut} 
)
tl.To(logo,0.5,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
tl.To(hamburger,0.5 ,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
tl.To(headline,0.5 ,{opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5");
