let img1 //이미지 변수 선언
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10

function preload() { //이미지 변수에 이미지 디렉토리 할당
  img1 = loadImage('./images/1.png')
  img2 = loadImage('./images/2.png')
  img3 = loadImage('./images/3.png')
  img4 = loadImage('./images/4.png')
  img5 = loadImage('./images/5.png')
  img6 = loadImage('./images/6.png')
  img7 = loadImage('./images/7.png')
  img8 = loadImage('./images/8.png')
  img9 = loadImage('./images/9.png')
  img10 = loadImage('./images/10.png')
}

function setup() {
  window.scrollTo(0,document.querySelector('*').scrollHeight) //아래부터 시작
  createCanvas(windowWidth, windowHeight)
}

function draw() {

  background(255, 250, 245)
  imgWidth = 340.6896
  imgHeight = 130.5792
  
  y = 33.4612
  image(img1, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))
  image(img2, xCoord(0), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  y = 181.3294
  image(img3, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))
  image(img4, xCoord(0), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  y = 329.1977
  image(img5, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))
  image(img6, xCoord(0), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  y = 477.0659
  image(img7, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))
  image(img8, xCoord(0), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  imgWidth = 226.4328
  imgHeight = 326.9971
  y = 203.8
  image(img9, 0, yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

  imgWidth = 159.7793
  imgHeight = 497.5957
  y = 64.41
  image(img10, xCoord(-250), yCoord(y), imgWd(imgWidth), imgHt(imgHeight))

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
