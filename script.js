const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    
});
var tl=gsap.timeline();

function time(){
var a=0;
  setInterval(function(){
    a = a + Math.floor(Math.random()*20);
    if(a<100){
      document.querySelector("#loader h1").innerHTML ="Cynthia Ugwu----" +a+"%"
    }
    else{
      a=100;
      document.querySelector("#loader h1").innerHTML ="Cynthia Ugwu----" +a +"%"

    }
  },150)
  
}

tl.to("#loader h1",{
  // scale:1.5,
  duration:1,
  delay:1.5,
  onStart:time()
})
tl.to("#loader",{
  top:"-100vh",
  delay:1,
  duration:1.5,
  ease:Expo.easeInOut,
})

function circleFollow(){
    window.addEventListener("mousemove",function(dets){
       // console.log(dets.clientX,dets.clientY);
        document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`
    })
}
    
    function firstPageAnim() {
        // var tl = gsap.timeline();
      
        tl.from("#nav", {
          y: "-10",
          opacity: 0,
          duration: 1.5,
           delay:-.5,
          ease: Expo.easeInOut,
        })
          .to(".containerelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: 0.2,
          })
          .from(".footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut,
          });


          
      }


     

circleFollow();
firstPageAnim();
document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;
  let mycircle=document.querySelector("#minicircle")
  elem.addEventListener("mouseleave", function (dets) {
    mycircle.style.height= "12px"
    mycircle.style.width="12px"
    // mycircle.style.backgroundColor="yellow"
    mycircle.innerHTML=""
    gsap.to(elem.querySelector("img"), {

      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
    gsap.to(elem.querySelector("h1,h5"),{
      opacity:0.6,
    })
    gsap.to(elem.querySelector("h5"),{
      opacity:1,
    })
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    mycircle.style.height= "50px"
    mycircle.style.width="50px"
    // mycircle.style.backgroundColor="yellow"
    mycircle.innerHTML="view"
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
    gsap.to(elem.querySelector("h1"),{
      opacity:0.2,
    })
    gsap.to(elem.querySelector("h5"),{
      opacity:0.2,
    })
  });
});


let myimg=document.querySelector("#helloimg")
myimg.addEventListener("mousemove",function(){
  this.style.scale=1.1;

})
myimg.addEventListener("mouseleave",function(){
  this.style.scale=1;
})