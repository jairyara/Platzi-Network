  const navSlide = () => {
      const burguer = document.querySelector('.burguer');
      const nav = document.querySelector('.nav-links');

      //Event click burguer
      burguer.addEventListener('click', () => {

          //Menu transition action
          nav.classList.toggle('nav-active');

          //Burguer animation
          burguer.classList.toggle('toggle');
      });
  }

  navSlide();