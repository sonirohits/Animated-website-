var crsr =document.querySelector("#cursor");
document.addEventListener('mousemove',function(dets){
crsr.style.left = dets.x +"px";
crsr.style.top =dets.y +"px";
console.log("cchota circurx",dets.x);
console.log("chota circley",dets.y);
});

var blur =document.querySelector("#cursor-blur");
document.addEventListener('mousemove',function(dets){
    blur.style.left = dets.x-185 +"px";
    blur.style.top =dets.y-180+"px";
    console.log("bada circurx",dets.x);
    console.log("bada circley",dets.y);
    });

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 2,
    },
  });
  gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
  });
//  var h4= document.querySelectorAll("#nav h4");
//  console.log(h4);
//  h4.forEach(function(elem){
//    elem.addEventListener("mouseenter",function(){
//        crsr.style.scale =3;
//        crsr.style.border="1px solid #fff";
//        crsr.style.backgroundColor="transparent";
//    });
//  })

//  h4.forEach(function(elem){
//     elem.addEventListener("mouseleave",function(){
//         crsr.style.scale =1;
//         crsr.style.border="0px solid #95c11e";
//         crsr.style.backgroundColor="#95c11e";
//        })
//  })

// gsap.from("#about-us img,#about-us-in",{
//     y:50,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:
//     }
// })