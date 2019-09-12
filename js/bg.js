const backImage = document.querySelector("body");

const changeImgNum = 5;

function handleRandomImg(){
    const randomNum = Math.floor(Math.random()*changeImgNum)+1;
    return randomNum;

}

function paintBackImg(randomNum){
    const img = new Image();
    img.src = `./img/${randomNum}.jpg`;
    img.classList.add("bgImage");
    backImage.appendChild(img);
}

function init(){
    const num = handleRandomImg();    
    paintBackImg(num);
}

init();