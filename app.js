document.addEventListener('DOMContentLoaded', function () {
  const h1Element = document.querySelector('.header-text h1');
  const h2Elements = document.querySelectorAll('h2');
  const colors = [
    'var(--colour1)',
    'var(--colour2)',
    'var(--colour7)',
    'var(--colour8)',
    'var(--colour9)',
    'var(--colour10)',
    'var(--colour11)',
  ];

  let h1colorIndex = 0;
  let h2ColorIndex = 0;

  h1Element.addEventListener('mouseenter', function () {
    const currentColor = colors[h1colorIndex];

    this.style.transition = '0.3s ease-in';
    this.style.textShadow = `0px 7px 5px ${currentColor}, 0px -7px 5px ${currentColor}, 7px 0px 5px ${currentColor}, -7px 0px 5px ${currentColor}`;

    h1colorIndex = (h1colorIndex + 1) % colors.length;
  });

  h1Element.addEventListener('mouseleave', function () {
    this.style.transition = '5s ease-out';
    this.style.textShadow = 'none';
  });
        
  h2Elements.forEach(function (h2) {
    h2.addEventListener('mouseenter', function () {
      const currentColor = colors[h2ColorIndex];

      this.style.transition = '0.3s ease-in';
      this.style.textShadow = `0px 6px 5px ${currentColor}, 0px -6px 5px ${currentColor}, 6px 0px 5px ${currentColor}, -6px 0px 5px ${currentColor}`;

      h2ColorIndex = (h2ColorIndex + 1) % colors.length;
    });

    h2.addEventListener('mouseleave', function () {
      this.style.transition = '5s ease-out';
      this.style.textShadow = 'none';
    });
  });
});
