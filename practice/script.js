gsap.to(".page1 .box",{
    // rotate:360,
    scale:1.5,
    // delay:2,
    duration:2.7,
    opactity:0,
    })

    gsap.to(".page2 .box",{
    // rotate:360,
    scale:1.5,
    // delay:2,
    duration:2.7,
    opactity:0,
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        // markers:true,
        start:"top 67%",
        end:"top 50%",
        scrub:1,
    }
})
gsap.from(".page3 .card",{
    // rotate:360,
    y:80,
    // scale:1.5,
    // delay:2,
    duration:2.7,
    opacity:0,
    scrollTrigger:{
        trigger:".page3 .card",
        scroller:"body",
        // markers:true,
        start:"top 97%",
        end:"top 50%",
        scrub:1,
    }
})
var btn=document.querySelector("button")
var value=document.querySelector("h1")
let flag=true;
btn.addEventListener("click",function(){
    if(flag){
        value.innerHTML="Friends"
        btn.style.backgroundColor="red"
        btn.innerText="Remove"
        flag=false
    }
    else{
        value.innerHTML="Strangers"
        btn.style.backgroundColor="blue"
        btn.innerText="Add Friend"
        flag=true;
    }
    
})