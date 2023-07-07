const navbtn = document.querySelector("#navbtn");
const nav = document.querySelector(".navbart");

navbtn.addEventListener("click",()=>{
    navbtn.classList.toggle("cl")
    nav.classList.toggle("op")
})

