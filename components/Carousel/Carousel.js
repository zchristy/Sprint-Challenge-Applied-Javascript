class Carousel {
  constructor(carElement) {
    this.carElement = carElement;

    this.left = this.carElement.querySelector('.left-button');
    this.right = this.carElement.querySelector('.right-button');

    this.image = Array.from(this.carElement.querySelectorAll('img'));

    this.counter = 0;
    this.numImages = this.image.length;
    this.currentIndex = this.image[0];

    this.carElement.classList.add('active');

    this.navigate = this.navigate.bind(this);
    this.left.addEventListener('click', function(event) {
      this.navigate(1);
    });

    this.right.addEventListener('click', function(event) {
      this.navigate(-1);
    });
  }

  navigate(direction) {
    this.currentIndex.classList.remove('active');
    this.counter = this.counter + direction;
    if (direction === -1 &&
        this.counter < 0) {
      this.counter = this.numImages - 1;
    }
    if (direction === 1 &&
        !this.image[this.counter]) {
      this.counter = 0;
    }
    this.currentIndex = this.image[this.counter];
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
