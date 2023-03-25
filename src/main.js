const img1 = document.querySelector("#herobg");
const img2 = document.querySelector(".moon");
const img3 = document.querySelector("#land");
const ballon = document.querySelector("#ballon");
const front = document.querySelector("#front");


window.addEventListener("scroll",(e)=>{
    
    img2.style =`transform:translateY(${this.scrollY/2}px) scale(${this.scrollY/5+100}%);`
    ballon.style =`transform:translateY(-${this.scrollY/2}px);`
    img3.style =`transform:translateY(${this.scrollY/4}px);`
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.style = `opacity: ${Math.round(entry.intersectionRatio * 100)}%;`
      })
  },{ threshold: [0, .25, .5, .75, 1] })
  observer.observe(document.getElementById("intro"))



  gsap.registerPlugin(ScrollTrigger);
   
  gsap.to(".nh",{
    y: -30,
    scale: 1.01,
    opacity:1,
    duration:0.3,
    scrollTrigger:{
        trigger:".nh",
        start:"top 90%",
        end: "top 50%",
        scrub:true,
        // toggleClass:"red",
        // markers:true,
        // toggleActions:"play reverse restart reverse", //play pause reverse restart reset complete none
        //              onEnter OnLeav onenterback onLeavback
    }
  })


  const balonAnimation = gsap.timeline({
    scrollTrigger:{
        trigger:".AnimBalon",
        // markers:true,
        start:"top 50%",
        end:"top -40%",
        scrub:true
    }
  })

  balonAnimation.to(".AnimBalon",{x:500,y:400 , rotation: 20, duration:10})
  .to(".AnimBalon",{x:310, y:500,rotation:1,duration:6})
  .to(".AnimBalon",{x:400, y:800,rotation:10,duration:6})

  const balonAnimation2 = gsap.timeline({
    scrollTrigger:{
        trigger:".AnimBalon2",
        // markers:true,
        start:"top 50%",
        end:"top -40%",
        scrub:true
    }
  })

  balonAnimation2.to(".AnimBalon2",{x:-500,y:400 , rotation: 20, duration:10})
  .to(".AnimBalon2",{x:-310, y:500,rotation:1,duration:6})