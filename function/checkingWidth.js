(function check(){
    var width = window.innerWidth
    let listRWD = document.getElementById("listRWD")

    function changeRWDDisplay(){
        if(width>800){
            listRWD.style.display = ""
        }
    }

    window.addEventListener("resize", changeRWDDisplay)
})()