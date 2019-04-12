class Carousel {
  constructor(carElement) {
    this.carElement = carElement;

    this.left = this.carElement.querySelector('.left-button');
    this.right = this.carElement.querySelector('.right-button');

    this.image = Array.from(this.carElement.querySelectorAll('img'));

    this.counter = 0;
    this.numImages = this.image.length;
    this.currentIndex = this.image[this.counter];

    this.navigateLeft = this.navigateLeft.bind(this);
    this.left.addEventListener('click', this.navigateLeft);

    this.navigateRight = this.navigateRight.bind(this);
    this.right.addEventListener('click', this.navigateRight);
  }

  navigateLeft() {
    this.currentIndex.classList.remove('active');
    this.currentIndex.classList.add('hidden');
    if(this.counter > 0) {
      this.counter = this.counter - 1;
    } else {
      this.counter = this.numImages -1
    }
    this.currentIndex = this.image[this.counter];
    this.currentIndex.classList.remove('hidden');
    this.currentIndex.classList.add('active');
  }

  navigateRight() {
    this.currentIndex.classList.remove('active');
    this.currentIndex.classList.add('hidden');
    if(this.counter < this.numImages - 1) {
      this.counter = this.counter + 1;
    } else {
      this.counter = 0;
    }
    this.currentIndex = this.image[this.counter];
    this.currentIndex.classList.remove('hidden');
    this.currentIndex.classList.add('active');
  }
}

let carousel = document.querySelectorAll('.carousel');

carousel.forEach(function(carElement) {
  new Carousel(carElement);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
