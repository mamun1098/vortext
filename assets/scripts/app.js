// import domReady from "@roots/sage/client/dom-ready";
// import "bootstrap";

/**
 * Application entrypoint
 */
// domReady(async () => {

// });
setTimeout(function () {
  // Hero Home
  const swipers = document.querySelectorAll(".banner-area .swiper");
  if (swipers.length > 0) {
    swipers.forEach((swiperElement, i) => {
      swiperElement.classList.add("swHero_" + i);

      const swiper = new Swiper(".swHero_" + i, {
        slidesPerView: 1,
        watchOverflow: true,
        spaceBetween: 0,
        // If we need pagination
        pagination: {
          el: ".swHero_" + i + " .swiper-pagination",
        },
        // Navigation arrows
        navigation: {
          nextEl: ".swHero_" + i + " .swiper-button-next",
          prevEl: ".swHero_" + i + " .swiper-button-prev",
        },
        loop: true,
      });
    });
  }
  /* HERO SLIDER END */

  /* INNOVATION SLIDER START */
  const inovationSlider = document.querySelectorAll(
    ".innovation-slider-block .swiper"
  );
  if (inovationSlider.length > 0) {
    inovationSlider.forEach((swiperElement, i) => {
      const uniqueClass = `innovaSw_${i}`;
      swiperElement.classList.add(uniqueClass);

      const swiper = new Swiper(`.${uniqueClass}`, {
        watchOverflow: true,
        spaceBetween: 20,
        loop: true,
        slidesPerView: 5,
        speed: 500,

        // Navigation arrows
        navigation: {
          nextEl: `.${uniqueClass} .swiper-button-next`,
          prevEl: `.${uniqueClass} .swiper-button-prev`,
        },

        scrollbar: {
          el: `.${uniqueClass} .swiper-scrollbar`,
          draggable: true,
        },

        breakpoints: {
          1920: {
            slidesPerView: 4.9,
            centeredSlides: true,
          },
        },
      });
    });
  }
  /* INNOVATION SLIDER END */

  /* MEMBERSHIP LOGO SLIDER START */
  const memberShipSlider = document.querySelectorAll(
    ".membership-logo-block .swiper"
  );
  if (memberShipSlider.length > 0) {
    memberShipSlider.forEach((swiperElement, i) => {
      const uniqueClass = `membershipSlider_${i}`;
      swiperElement.classList.add(uniqueClass);

      const swiper = new Swiper(`.${uniqueClass}`, {
        // watchOverflow: true,
        spaceBetween: 70,
        loop: true,
        slidesPerView: 5,
        speed: 500,
        // autoplay: {
        //   delay: 1,
        //   disableOnInteraction: true,
        // },
        // speed: 2000,
        // Navigation arrows

        navigation: {
          nextEl: `.${uniqueClass} .swiper-button-next`,
          prevEl: `.${uniqueClass} .swiper-button-prev`,
        },

        scrollbar: {
          el: `.${uniqueClass} .swiper-scrollbar`,
          draggable: true,
        },

        breakpoints: {
          1920: {
            slidesPerView: 5,
          },
        },
      });
    });
  }
  /* MEMBERSHIP LOGO SLIDER END */

  /* SUCCESS STROY SLIDER START */
  const successStory = document.querySelectorAll(
    ".success-story-slider-block .swiper"
  );
  if (successStory.length > 0) {
    successStory.forEach((swiperElement, i) => {
      const uniqueClass = `sucessSlider_${i}`;
      swiperElement.classList.add(uniqueClass);

      const swiper = new Swiper(`.${uniqueClass}`, {
        // watchOverflow: true,
        spaceBetween: 30,
        loop: true,
        slidesPerView: 1.7,
        speed: 500,
        // autoplay: {
        //   delay: 1,
        //   disableOnInteraction: true,
        // },
        // speed: 2000,
        // Navigation arrows

        navigation: {
          nextEl: `.${uniqueClass} .swiper-button-next`,
          prevEl: `.${uniqueClass} .swiper-button-prev`,
        },

        scrollbar: {
          el: `.${uniqueClass} .swiper-scrollbar`,
          draggable: true,
        },

        breakpoints: {
          1920: {
            slidesPerView: 1.7,
          },
        },
      });
    });
  }
  /* SUCCESS STROY SLIDER END */

  // ROTATE ANIMATION ON CIRCLE
  var winScrollTop = 0;

  // Function for rotation based on scroll position
  function rotateOnScroll(parentClassName, transition, className) {
    $(parentClassName).each(function () {
      var firstTop = $(this).offset().top;
      var $tag = $(this).find(className);

      // Rotation calculation
      var rotateAngle = (winScrollTop - firstTop) * 0.1; // Adjust speed factor for rotation

      // Apply rotation transform
      if (transition) {
        $tag.css({
          transform: "rotate(" + rotateAngle + "deg)",
          transition: "all .3s",
        });
      } else {
        $tag.css({
          transform: "rotate(" + rotateAngle + "deg)",
          transition: "unset",
        });
      }
    });
  }
  // Event listener for window scroll
  $(window).on("scroll", function () {
    winScrollTop = $(this).scrollTop();
    rotateOnScroll(".parallax-top-shape-wrapper", true, ".parallax-shape");
    rotateOnScroll(".ring-shape-wrapper", true, ".spin-animation");
  });

  // LEFT RIGHT TEXT ANIMATION
  // LEFT RIGHT TEXT ANIMATION
  function parallaxTextLeftRight(
    parrentClassName,
    transition,
    className,
    leftToRight
  ) {
    const parentElements = document.querySelectorAll(parrentClassName);

    parentElements.forEach((parent) => {
      const tags = parent.querySelectorAll(className); // Get all elements matching the class name

      tags.forEach((tag) => {
        // Loop through each matching tag
        const firstTop = tag.getBoundingClientRect().top + window.scrollY; // Position of the current tag
        const winScrollTop = window.scrollY;
        const moveTop = (firstTop - winScrollTop) * 0.1; // Speed factor

        if (leftToRight) {
          tag.style.transform = `translate3d(${moveTop}px, 0, 0)`;
        } else {
          tag.style.transform = `translate3d(${-moveTop}px, 0, 0)`;
        }
        tag.style.transition = transition ? "all .3s" : "unset";
      });
    });
  }

  // Text parallax calling
  window.addEventListener("scroll", () => {
    parallaxTextLeftRight(
      ".animation-texts",
      true,
      ".align_left_with_wheel",
      true
    );
    parallaxTextLeftRight(
      ".animation-texts",
      true,
      ".align_right", // This will apply to all right-aligned texts
      false
    );
    parallaxTextLeftRight(
      ".animation-texts",
      true,
      ".align_right_with_wheel", // This will apply to all right-aligned texts
      false
    );
  });
}, 500);

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
// if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
