AOS.init({
  duration: 800,
  easing: "slide",
});

(function ($) {
  "use strict";

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  // Burger Menu
  var burgerMenu = function () {
    $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
      event.preventDefault();

      if ($("#ftco-nav").is(":visible")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
  };
  burgerMenu();

  var onePageClick = function () {
    $(document).on("click", '#ftco-nav a[href^="#"]', function (event) {
      event.preventDefault();

      var href = $.attr(this, "href");

      $("html, body").animate(
        {
          scrollTop: $($.attr(this, "href")).offset().top - 70,
        },
        500,
        function () {
          // window.location.hash = href;
        }
      );
    });
  };

  onePageClick();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: false,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-md-arrow-back'></span>",
        "<span class='ion-chevron-right'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    }
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter, .ftco-about").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });
})(jQuery);

// Function to show enlarged view for both PDF and JPG
function showEnlargedView(type, filePath) {
  const modal = document.getElementById("imageModal");
  const modalCanvas = document.getElementById("modalCanvas");
  const modalImage = document.getElementById("modalImage");
  modalCanvas.style.display = "none";
  modalImage.style.display = "block";
  modalImage.src = filePath;
  modal.style.display = "flex";
}

// Function to close modal
function closeEnlargedView() {
  document.getElementById("imageModal").style.display = "none";
}

$(document).ready(function () {
  // Event listener for click events on elements with class 'pdfCanvas' or 'jpgImage'
  $(document).on("click", ".pdfCanvas, .jpgImage", function () {
    const filePath = $(this).data("file-path"); // Get the data-file-path attribute
    const fileType = $(this).hasClass("pdfCanvas") ? "pdf" : "jpg"; // Check class
    showEnlargedView(fileType, filePath); // Call your function
  });

  $(".project-description").each(function () {
    var $description = $(this);
    var fullText = $description.text(); // Get the full text

    var truncatedText =
      fullText.slice(0, 150) + (fullText.length > 150 ? "..." : "");
    $description.text(truncatedText); // Set the truncated text
  });

  $(".show-more-btn").click(function () {
    var $description = $(this).siblings(".project-description"); // Get the associated description
    $description.text(function (index, text) {
      return text.endsWith("...")
        ? $(this).data("full-text")
        : text.slice(0, 200) + "...";
    });
    // Placeholder for future action
    alert("Show more action will be implemented here!");
  });

  // Store the full text for the show more functionality
  $(".project-description").each(function () {
    var $description = $(this);
    var fullText = $description.text(); // Get the full text
    $description.data("full-text", fullText); // Store full text in data attribute
  });

  // Function to populate carousel items
  function populateCarousel(modalId, imageDir, images) {
    const carouselItems = $(`#${modalId} .carousel-inner`);
    images.forEach((image, index) => {
      const activeClass = index === 0 ? "active" : "";
      const itemHtml = `
			   <div class="carousel-item ${activeClass}">
				   <img src="${imageDir}/${image}" class="d-block w-100 jpgImage" alt="${image}" data-file-path="${imageDir}/${image}">
			   </div>
		   `;
      carouselItems.append(itemHtml);
    });
  }
  const retailSqlImages = [ "10.png", "12.png", "14.png", "16.png", "18.png", "20.png", "22.png", "24.png", "26.png", "28.png", "30.png", "32.png", "34.png", "Q1.png", "Q3.png", "Q5.png", "Q7.png", "Q9.png", "11.png", "13.png", "15.png", "17.png", "19.png", "21.png", "23.png", "25.png", "27.png", "29.png", "31.png", "33.png", "35.png", "Q2.png", "Q4.png", "Q6.png", "Q8.png",];
  const retailPowerBiImages = [
    "Discount Analysis .jpg",
    "Profit Analysis.jpg",
    "Revenue Analysis.jpg",
  ]; //File name
  // Populate carousels
  populateCarousel("pizzasImageSlider", "./images/sqlfile", retailSqlImages);
  populateCarousel("amazonImageSlider","./images/powerbi_file",retailPowerBiImages);
  populateCarousel("netflixExploratory","./images/sqlfile",retailSqlImages);
  populateCarousel("netflixExploratoryScnd","./images/powerbi_file",retailPowerBiImages);
  populateCarousel("amazonSales","./images/sqlfile",retailSqlImages);
  populateCarousel("amazonSalesScnd","./images/powerbi_file",retailPowerBiImages);
  populateCarousel("vehicleCollision","./images/sqlfile",retailSqlImages);
  populateCarousel("vehicleCollisionScnd","./images/powerbi_file",retailPowerBiImages);
  populateCarousel("indiaCrop","./images/sqlfile",retailSqlImages);
  populateCarousel("indiaCropScnd","./images/powerbi_file",retailPowerBiImages);
});
