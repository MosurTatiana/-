const images = [
  'img/flowers/rose.jpg',
  'img/flowers/lily.jpg',
  'img/flowers/hydrangea.jpg',
  'img/flowers/tulip.jpg',
  'img/flowers/eustoma.jpeg',

]
let currentIdx = 0;
function slide() {
  currentIdx = ++currentIdx > images.length - 4 ? 0 : currentIdx;
  showSlide(currentIdx);
}
setInterval(slide, 3000);
function back() {
  currentIdx = --currentIdx < 0 ? images.length - 4 : currentIdx;
  showSlide(currentIdx);
}
document.querySelector('.carousel .btn-back').addEventListener('click', back);
function next() {
  currentIdx = ++currentIdx > images.length - 4 ? 0: currentIdx;
  showSlide(currentIdx);
}
  document.querySelector('.carousel .btn-next').addEventListener('click', next);
function showSlide(idx) {
  document.querySelector('.carousel img').src = images[idx];
}
