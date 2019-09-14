/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="left-button"> < </div>
    <div class="right-button"> > </div>
  </div>
*/
carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(createCarousel());
console.log(carouselContainer);

function createCarousel() {
  
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  // store carousel index
  let index = 0;

  
  
  

  //Store images in an array
  const imgURL = [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ];

  const imagesList = imgURL.map(urlVar => {
    const img = document.createElement('img');
    img.src = urlVar;
    return img;
  });

  console.log(imagesList);
  
  // add images to the carousel
  
  for (i=0;i<imagesList.length;i++) {
    carousel.appendChild(imagesList[i])
  }

// display first image in rotation
  imagesList[index].style.visibility = 'visible';
  

// add left button
  const ButtonLeft = document.createElement('div');
  ButtonLeft.classList.add('left-button');
  ButtonLeft.textContent = '<';
  carousel.appendChild(ButtonLeft);

  ButtonLeft.addEventListener('click', () => {
    // hide the current image
    imagesList[index].style.visibility = 'hidden';
    
    // loop over
    index = index === 0 ? imagesList.length - 1 : --index;

    //if first image when left button pressed, it stays the same
    // index = index === 0 ? 0 : --index;

    // display the previous image
    imagesList[index].style.visibility = 'visible';
    
    
  });
  // add right button
  const ButtonRight = document.createElement('div');
  ButtonRight.classList.add('right-button');
  ButtonRight.textContent = '>';
  carousel.appendChild(ButtonRight);

  // add right btn event listner
  ButtonRight.addEventListener('click', () => {
    // hide the current image
    imagesList[index].style.visibility = 'hidden';
   
    // loop over
    index = index === imagesList.length - 1 ? 0 : ++index;

    //if last image, when right button is clicked, it stays the same
    // index = index === imagesList.length - 1 ? imagesList.length - 1 : ++index;

    // display the next image
    imagesList[index].style.visibility = 'visible';
    
  });

  
  return carousel;
}

