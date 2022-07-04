(function switchBarButton (){
    var barShow = true;
    let barsBtn = document.getElementById("bars")
    let xBtn = document.getElementById("x")
    let navMobileList = document.getElementById("nav-mobile-list")

    function changeBtnStatus(){
        if(barShow){
            barShow = false
            barsBtn.style.display = "none"
            xBtn.style.display = "block"
            navMobileList.style.display="block"
        }else{
            barShow = true
            xBtn.style.display = "none"
            barsBtn.style.display = "block"
            navMobileList.style.display = "none";
        }
        
    }

    barsBtn.addEventListener("click", changeBtnStatus)
    xBtn.addEventListener("click", changeBtnStatus)
})()

