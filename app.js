document.addEventListener('DOMContentLoaded', function () {
  const h1Element = document.querySelector('.header-text h1');
  const h2Elements = document.querySelectorAll('h2');
  const colors = [
    'var(--colour1)',
    'var(--colour2)',
    'var(--colour7)',
    'var(--colour8)',
  ];

  let h1colorIndex = 0;
  let h2ColorIndex = 0;

  h1Element.addEventListener('mouseenter', function () {
    const currentColor = colors[h1colorIndex];

    this.style.transition = '0.2s ease-in';
    this.style.textShadow = `0px 7px 5px ${currentColor},
                             0px -7px 5px ${currentColor},
                             7px 0px 5px ${currentColor},
                             -7px 0px 5px ${currentColor}`;

    h1colorIndex = (h1colorIndex + 1) % colors.length;
  });

  h1Element.addEventListener('mouseleave', function () {
    this.style.transition = '5s ease-out';
    this.style.textShadow = 'none';
  });
        
  h2Elements.forEach(function (h2) {
    h2.addEventListener('mouseenter', function () {
      const currentColor = colors[h2ColorIndex];

      this.style.transition = '0.2s ease-in';
      this.style.textShadow = `0px 6px 5px ${currentColor}, 
                               0px -6px 5px ${currentColor},
                               6px 0px 5px ${currentColor},
                               -6px 0px 5px ${currentColor}`;

      h2ColorIndex = (h2ColorIndex + 1) % colors.length;
    });

    h2.addEventListener('mouseleave', function () {
      this.style.transition = '5s ease-out';
      this.style.textShadow = 'none';
    });
  });

  // Slideshow variables
  let slideIndex = 0;
  let slideTimer;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const dotButtons = document.querySelectorAll(".dot");
  
  // Initialize slideshow
  showSlides();
  
  // Add event listeners to buttons
  if (prevButton) {
    prevButton.addEventListener('click', function() {
      plusSlides(-1);
    });
  }
  
  if (nextButton) {
    nextButton.addEventListener('click', function() {
      plusSlides(1);
    });
  }
  
  // Add event listeners to dots
  dotButtons.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      currentSlide(index + 1);
    });
  });
  
  // Navigation functions
  function plusSlides(n) {
    clearTimeout(slideTimer);
    slideIndex += n;
    
    // Handle edge cases
    if (slideIndex > slides.length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    
    updateSlides();
    resetTimer();
  }
  
  function currentSlide(n) {
    clearTimeout(slideTimer);
    slideIndex = n - 1;
    showSlides();
  }
  
  function resetTimer() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(showSlides, 5000);
  }
  
  function updateSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Display the current slide and activate its dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  function showSlides() {
    slideIndex++;
    
    // Reset to first slide if at the end
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    updateSlides();
    
    // Set timer for next slide
    slideTimer = setTimeout(showSlides, 5000);
  }
});
