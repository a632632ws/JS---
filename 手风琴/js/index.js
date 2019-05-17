var liA = document.querySelectorAll("li");
var  wrap = document.querySelector(".wrap");

for (var i = 0; i < liA.length; i++) {

    liA[i].onmouseenter = function () {

        for (var j = 0; j < liA.length; j++) {

            //先循环让所有的等于175px;   再让点击的变成500px //(1200-500) / 4
            liA[j].style.width = "175px";
            this.style.width = "500px";

        }

    }
//离开 ul 还原
    wrap.onmouseleave = function () {
        for (var i = 0; i < liA.length; i++){
            liA[i].style.width = "240px";
        }
    }

}
