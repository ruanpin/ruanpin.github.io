(function switchBarButton (){
    var barShow = true;
    let barsBtn = document.getElementById("bars")
    let xBtn = document.getElementById("x")
    let listRWD = document.getElementById("listRWD")

    function changeBtnStatus(){
        if(barShow){
            barShow = false
            barsBtn.style.display = "none"
            xBtn.style.display = "block"
            listRWD.style.display = "block"
        }else{
            barShow = true
            xBtn.style.display = "none"
            barsBtn.style.display = "block"
            listRWD.style.display = "none"
        }
        
    }

    barsBtn.addEventListener("click", changeBtnStatus)
    xBtn.addEventListener("click", changeBtnStatus)
})()

