let img1 //이미지 변수 선언
let img2
let img3
let img4

function preload() { //이미지 변수에 이미지 디렉토리 할당
  img1 = loadImage('./images/1.png')
  img2 = loadImage('./images/2.png')
  img3 = loadImage('./images/3.png')
  img4 = loadImage('./images/4.png')
}

function setup() {
  window.scrollTo(0,document.querySelector('*').scrollHeight) //아래부터 시작
  createCanvas(windowWidth, windowHeight)
}

function draw() {

  background(255, 250, 245)
  imgWidth = 500.7998
  imgHeight = 630.7998
  
  y = 7
  image(img1, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  imgWidth = 340.6896
  imgHeight = 130.5795

  y = 125
  image(img2, xCoordInvert(0), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  y = 248
  image(img3, xCoord(-500), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  y = 369
  image(img4, xCoordInvert(-1000), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))
}
//windowWidth-0.35-imgWdHt(imgWidth)

//이 아래는 사전적으로 정의된 함수들 ----------------------------------------------------------------------------------------------------
let bodyHeight = document.querySelector('*').scrollHeight * 2 //return body scroll Height
let scrollPosition = 0
window.addEventListener('scroll', function () { //return current scroll position
  scrollPosition = Math.round(window.scrollY)
})


window.addEventListener('scroll', _.throttle(function(){
  if (bodyHeight < scrollPosition){
    window.scroll(0,bodyHeight)
   } else if( scrollPosition<=0) {
    window.scroll(0,0)
   }
},300))

let imgWidth
let imgHeight
let y

function xCoordInvert(imgWidthPx) {
  if (bodyHeight < scrollPosition) {
    return (windowWidth-((windowWidth * (imgWidthPx / 550.8))) * 1)
  } else if (scrollPosition < 0){
    return 0
  } else {
    return -(windowWidth-(windowWidth * (imgWidthPx / 550.8))) * scrollPosition / bodyHeight
  }
}
function xCoord(imgWidthPx) {
  if (bodyHeight < scrollPosition) {
    return (windowWidth-((windowWidth * (imgWidthPx / 550.8))) * 1)
  } else if (scrollPosition < 0){
    return 0
  } else {
    return (windowWidth-(windowWidth * (imgWidthPx / 550.8))) * scrollPosition / bodyHeight
  }
}


function imgWd(imgWidthPx) {
  return windowWidth * imgWidthPx / 550.8
}

function imgHt(imgHeightPx) {
  return windowHeight * imgHeightPx / 730.8
}

function yCoord(y) {
  return windowHeight * y / (730.8-imgHeight)
}
