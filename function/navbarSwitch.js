(function navbarSwitch (){
    let btn = document.querySelector("#nav-btn")
    let navbar = document.querySelector(".nav")

    function navbarShow (){
        navbar.classList.toggle("active")
    }

    btn.addEventListener("click", navbarShow)
})()

