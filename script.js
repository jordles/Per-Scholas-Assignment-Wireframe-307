const dots = document.querySelector('#dots');
const dotsEach = document.querySelectorAll('.dot');
const images = document.querySelectorAll('#tagline-picture > img');
const deal = document.querySelector('#deals > h1');
const signup = document.querySelector('#signup');
const exit = document.querySelector('#signup > span');

dots.addEventListener('click', event => { //event delegation
  if (event.target.classList.contains('dot')){
    event.target.classList.add('active');

    dotsEach.forEach(dot => {
      if (dot !== event.target && dot.classList.contains('active'))
        dot.classList.remove('active');
    })

    const dotIndex = Array(...dotsEach).indexOf(event.target);
    currentIndex = dotIndex;
    images[dotIndex].classList.add('active');

    images.forEach(image => {
      if (image !== images[dotIndex] && image.classList.contains('active'))
        image.classList.remove('active');
    })
  }
})

// Start the slideshow
let currentIndex = 0;
console.log(dotsEach)
dotsEach[currentIndex].click(); 
startSlideshow();

function startSlideshow() {
  function cycle() {
    // Wait for a short period before moving to the next dot
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % dotsEach.length;
      dotsEach[currentIndex].click();
      cycle();
      
    }, 3000); // Change this value to adjust the interval between slides
  }

  // Start the cycle
  cycle();
}

deal.addEventListener('click', () => {
  signup.classList.add('active');
});

exit.addEventListener('click', () => {
  signup.classList.remove('active');
})