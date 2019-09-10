const bgImg = document.querySelector("body");

const IMGNUM = 5;

function paintImg(num){
    const img = new Image();
    img.src= `img/${num+1}.jpg`;
    img.classList.add("bgImage");
    bgImg.append(img);
}

function randomNum (){
    const bgRandomNum = Math.floor(Math.random() * IMGNUM);
    return bgRandomNum;
}

function init(){
    const Number = randomNum();
    paintImg(Number);
}

init();