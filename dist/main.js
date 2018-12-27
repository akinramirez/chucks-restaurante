"use strict";

;

(function () {
  var sticky = false; // console.log($(window).height());

  $("#sticky-navigation").removeClass("hidden");
  $("#sticky-navigation").slideUp();
  $(window).scroll(function () {
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
  });

  function stickNavigation() {
    $("#description").addClass("fixed").removeClass("absolute");
    $("navigation").slideUp("fast");
    $("#sticky-navigation").slideDown("fast");
  }

  function unStickNavigation() {
    $("#description").removeClass("fixed").addClass("absolute");
    $("navigation").slideDown("fast");
    $("#sticky-navigation").slideUp("fast");
  }

  function isInBottom() {
    var $description = $("#description");
    var descriptionHeight = $description.height();
    return $(window).scrollTop() > $(window).height() - descriptionHeight * 2;
  }
})();