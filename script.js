const nav_list=document.querySelector(".nav_list");
const bars=document.querySelector(".bars");
bars.addEventListener("click",function () {
    nav_list.classList.toggle("active");
    console.log("hello");
})