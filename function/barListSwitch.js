(function switchBarButton (){
    var barShow = true;
    let barsBtn = document.getElementById("bars")
    let xBtn = document.getElementById("x")

    function changeBtnStatus(){
        if(barShow){
            barShow = false
            barsBtn.style.display = "none"
            xBtn.style.display = "block"
        }else{
            barShow = true
            xBtn.style.display = "none"
            barsBtn.style.display = "block"
        }
    }

    barsBtn.addEventListener("click", changeBtnStatus)
    xBtn.addEventListener("click", changeBtnStatus)
})()

