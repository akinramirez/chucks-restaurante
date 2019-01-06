"use strict";

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

;

(function () {
  var sticky = false;
  var currentPosition = 0;
  var imageCounter = parseInt($("[data-name='image-counter']").attr("content"));
  var correo = "akin.ramirez@hotmail.com";
  $("#contact-form").on("submit", function (ev) {
    ev.preventDefault();
    sendForm($(this));
    return false;
  }); // console.log($(window).height());

  $("#sticky-navigation").removeClass("hidden");
  $("#sticky-navigation").slideUp(0);
  checkScroll();
  isOpen();
  $("#menu-opener").on("click", toggleNav);
  $(".menu-link").on("click", toggleNav);
  setInterval(function () {
    if (currentPosition < imageCounter) {
      currentPosition++;
    } else {
      currentPosition = 0;
    }

    $("#gallery .inner").css({
      left: "-" + currentPosition * 100 + "%"
    });
  }, 4000);
  $(window).scroll(checkScroll);

  function checkScroll() {
    // console.log(isInBottom());
    var inBottom = isInBottom();

    if (inBottom && !sticky) {
      //Mostrar la navegacion
      sticky = true; // console.log("Cambiar la navegacion");

      stickNavigation();
    }

    if (!inBottom && sticky) {
      //Ocultar la navegacion
      sticky = false; // console.log("Regresar la navegacion");

      unStickNavigation();
    }
  }

  function isOpen() {
    // Reloj 24 => 5pm 11pm=> 17 23
    var date = new Date();
    var current_hour = date.getHours();

    if (current_hour < 17 || current_hour > 23) {
      $("#is-open .text").html("Cerrado Ahora <br> Abierto de 5:00pm a 11:00pm");
    }
  }

  function toggleNav() {
    $("#responsive-nav ul").toggleClass("active");
    $("#menu-opener").toggleClass("glyphicon-menu-hamburger");
  }

  function stickNavigation() {
    // sticky = true;
    $("#description").addClass("fixed").removeClass("absolute");
    $("#navigation").slideUp("fast");
    $("#sticky-navigation").slideDown("fast");
  }

  function unStickNavigation() {
    // sticky = false;
    $("#description").removeClass("fixed").addClass("absolute");
    $("#navigation").slideDown("fast");
    $("#sticky-navigation").slideUp("fast");
  }

  function isInBottom() {
    var $description = $("#description");
    var descriptionHeight = $description.height();
    return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
  }
})();