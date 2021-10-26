let img //이미지 변수 선언

function preload() { //이미지 변수에 이미지 디렉토리 할당
  img = loadImage('./asset.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight * 3)
}

function draw() {

  background(255, 255, 255)
  imgWidth = 100
  yCoord = 0
  image(img, imgXcrd(imgWidth), imgYcrd(yCoord), imgWdHt(imgWidth), imgWdHt(imgWidth))

  imgWidth = 200
  yCoord = 300
  image(img, imgXcrd(imgWidth), imgYcrd(yCoord), imgWdHt(imgWidth), imgWdHt(imgWidth))
}


//이 아래는 사전적으로 정의된 함수들 ----------------------------------------------------------------------------------------------------
let bodyHeight = document.querySelector('*').scrollHeight * 2 //return body scroll Height
console.log(bodyHeight)
let scrollPosition = 0
window.addEventListener('scroll', function () { //return current scroll position
  scrollPosition = Math.round(window.scrollY)
  console.log(scrollPosition)
})

window.addEventListener('scroll', _.throttle(function(){
  if (bodyHeight < scrollPosition){
    window.scroll(0,bodyHeight)
   } else if( scrollPosition<=0) {
    window.scroll(0,0)
   }
},1000))

let imgWidth
let yCoord

function imgXcrd(imgWidthPx) {
  if (bodyHeight < scrollPosition) {
    return (windowWidth-((windowWidth * (imgWidthPx / 550.8))) * 1)
  } else if (scrollPosition < 0){
    return 0
  } else {
    return (windowWidth-(windowWidth * (imgWidthPx / 550.8))) * scrollPosition / bodyHeight
  }

}

function imgWdHt(imgWidthPx) {
  return windowWidth * imgWidthPx / 550.8
}

function imgYcrd(yCrdInPx) {
  return scrollPosition + (windowHeight * (yCrdInPx / 730.8))
}