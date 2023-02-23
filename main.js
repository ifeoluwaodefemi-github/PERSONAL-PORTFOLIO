const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const menu = document.querySelector("nav .container ul")

//SHOW MENU
menuBtn.addEventListener("click", () =>{
    menu.style.display = "block";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block"
})

//HIDE MENU
closeBtn.addEventListener("click", () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    closeBtn.style.display = "none"
})


const navItem = menu.querySelectorAll("li")
//NAV STYLE REMOVING COLOR
const changeActiveItem = () => {
    navItem.forEach(item =>{
        const link = item.querySelector("a")
        link.classList.remove("active")
    })
}

//NAV STYLE CHANGING COLOR
navItem.forEach(item => {
    const link = item.querySelector("a");
    link.addEventListener("click", () =>{
        changeActiveItem()
        link.classList.add("active");
    })
})

//READ MORE
const readMoreBtn = document.querySelector(".read-more")
const readMoreContent = document.querySelector(".read-more-content")

readMoreBtn.addEventListener("click", () =>{
    readMoreContent.classList.toggle("show-content")
    if (readMoreContent.classList.contains("show-content")){
        readMoreBtn.textContent = "Show Less"
    }else{
        readMoreBtn.textContent = "Show More"
    }
})


//SHOW OR HIDE SKILLS
const skillItems = document.querySelectorAll("section.skills .skill");

skillItems.forEach(skill =>{
    skill.querySelector(".head").addEventListener("click", () =>{
        skill.querySelector(".items").classList.toggle("show-items")
    })
})

//ADD BOX SHADOW ON NAV SCROLL BAR
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("show-box-shadow", window.scrollY>0)
})






//swiper

const swiper = new Swiper('.swiper', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });