window.onload = loader;
    function loader() {
      let loaderPage = document.querySelector('.loader-page');
      let counter = document.querySelector('.loader-counter');
      let fill = document.querySelector('.loader-fill');
      let amount = 10;
      let interval = setInterval(loop, 50);
      function loop() {
        if (amount >= 100) {
          clearInterval(interval);
          loaderPage.style.visibility = 'hidden';
          loaderPage.style.opacity = '0'
        }else {
          amount++;
          fill.style.width = amount + '%';
          counter.textContent = amount * 1 + '%';
        }
      }
    }

    