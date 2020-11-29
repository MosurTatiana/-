const images = [

          `<div class="slider__item">
            <div class="slider__content">
              <div class="slider__content_header">
                <h3 class="slider__content_title">РОЗА</h3>
                <p cclass="slider__content_text">символ красоты, <br> поскольку <br> утонченность его <br> нежных лепестков <br> гармонично <br> сочетается с <br> острыми шипами</p>
              </div>  
              <div class="slider__content_avatar">  
                <img class="slider__content_photo" src="img/flowers/rose.jpg" alt="Белая роза" width="220" height="250">
              </div> 
            </div>  
          </div>`,

          `<div class="slider__item">
            <div class="slider__content">
              <div class="slider__content_header">
                <h3 class="slider__content_title">ЛИЛИЯ</h3>
                <p cclass="slider__content_text">символ нежности - <br> это цветок, <br> который одним <br> своим названием <br> передает всю <br> трогательность и <br> красоту.</p>
              </div>  
              <div class="slider__content_avatar">  
                <img class="slider__content_photo" src="img/flowers/lily.jpg" alt="Белая лилия" width="220" height="250">
              </div> 
            </div>  
          </div>`,

          `<div class="slider__item">
            <div class="slider__content">
              <div class="slider__content_header">
                <h3 class="slider__content_title">ГОРТЕНЗИЯ</h3>
                <p cclass="slider__content_text">считается символом <br> добродушия, она <br> дарит тепло, <br> заряжает позитивной <br> энергией людей, <br> наполняет радостью <br> и легкостью</p>
              </div>  
              <div class="slider__content_avatar">  
                <img class="slider__content_photo" src="img/flowers/hydrangea.jpg" alt="Голубая гортензия.jpg" width="220" height="250">
              </div> 
            </div>  
          </div>`,

          `<div class="slider__item">
            <div class="slider__content">
              <div class="slider__content_header">
                <h3 class="slider__content_title">ТЮЛЬПАН</h3>
                <p cclass="slider__content_text">символом любви, <br> процветания, <br> гармонии <br> символизирует щедрость <br> вашего сердца, <br> и богатство души</p>
              </div>  
              <div class="slider__content_avatar">  
                <img class="slider__content_photo" src="img/flowers/tulip.jpg" alt="Белый тюльпан" width="220" height="250">
              </div> 
            </div>  
          </div>`,

          `<div class="slider__item">
            <div class="slider__content">
              <div class="slider__content_header">
                <h3 class="slider__content_title">ЭУСТОМА</h3>
                <p cclass="slider__content_text">символом нежности <br> и изысканности, <br> бодрости и защиты</p>
              </div>  
              <div class="slider__content_avatar">  
                <img class="slider__content_photo" src="img/flowers/eustoma.jpeg" alt="Белая эустома" width="220" height="250">
              </div> 
            </div>  
          </div>`
    
];

let currentIdx = 0;
function slide() {
  currentIdx = ++currentIdx > images.length - 1 ? 0 : currentIdx;
  showSlide(currentIdx);
}
setInterval(slide, 3000);
function back() {
  currentIdx = --currentIdx < 0 ? images.length - 1 : currentIdx;
  showSlide(currentIdx);
}
document.querySelector('.carousel .slider__control slider__control_left').addEventListener('click', back);
function next() {
  currentIdx = ++currentIdx > images.length - 1 ? 0: currentIdx;
  showSlide(currentIdx);
}

document.querySelector('.carousel .slider__control slider__control_right').addEventListener('click', next);
function showSlide(currentIdx) {
  document.querySelector('.slider__content_title').innerHTML = images[currentIndex];
}
