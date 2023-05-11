import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

      const swiper = new Swiper(".swiper", {
        // Optional parameters
        // direction: "vertical",
        
      mousewheel: true,
        // loop: true,
        speed: 1000,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

       
      });



      const nextSlideBtn = document.querySelectorAll(".next")

      const next = document.querySelector(".swiper-button-next")


      nextSlideBtn.forEach((e)=>{

        e.addEventListener("click",()=>{
            next.click()
        })
      })

      const prevSlideBtn = document.querySelectorAll(".prev")

      const prev = document.querySelector(".swiper-button-prev")


      prevSlideBtn.forEach((e)=>{

        e.addEventListener("click",()=>{
            prev.click()
        })
      });

      const cursor = document.getElementById("cursor");

      document.addEventListener("mouseover",(e)=>{
        let x = e.clientX;
        let y = e.clientY;

        move(x,y)
            
      })

      const move = (x,y)=>{
        cursor.style.left = x + 2 +"px";
            cursor.style.top = y + 2 +"px";
        
      }


      var app = document.getElementById("type");

      var typewriter = new Typewriter(app, {
        loop: true,
        delay: 100,
      });

      typewriter
        .pauseFor(200)
        .typeString("Entrepreneur")
        .pauseFor(1200)
        .deleteChars(13)
        .typeString("Business man")
        .pauseFor(1200)
        .deleteChars(13)
        .typeString("Marketer")
        .pauseFor(1200)
        .deleteChars(9)
        .typeString("Entrepreneur")
        .pauseFor(5000)
        .start();


        var app2 = document.getElementById("type2");

        var typewriter2 = new Typewriter(app2, {
          loop: true,
          delay: 100,
        });
  
        typewriter2
          .pauseFor(200)
          .typeString("Entrepreneur")
          .pauseFor(1200)
          .deleteChars(13)
          .typeString("Business man")
          .pauseFor(1200)
          .deleteChars(13)
          .typeString("Marketer")
          .pauseFor(1200)
          .deleteChars(9)
          .typeString("Entrepreneur")
          .pauseFor(5000)
          .start();