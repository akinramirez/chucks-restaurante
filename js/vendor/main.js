;(function(){
    let sticky = false;
    let currentPosition = 0;

    const imageCounter = parseInt($("[data-name='image-counter']").attr("content"));

    // console.log($(window).height());
    $("#sticky-navigation").removeClass("hidden");
    $("#sticky-navigation").slideUp(0);

    setInterval(()=>{
        if(currentPosition < imageCounter){
            currentPosition++
        }else{
            currentPosition = 0;
        }
        
        $("#gallery .inner").css({
            left: "-"+currentPosition*100+"%"
        });
    },4000);

    $(window).scroll(()=>{
        // console.log(isInBottom());
        const inBottom = isInBottom();

        if(inBottom && !sticky){
            //Mostrar la navegacion
            sticky = true;
            // console.log("Cambiar la navegacion");
            stickNavigation();     
        }
        if(!inBottom && sticky){            
            //Ocultar la navegacion
            sticky = false;
            // console.log("Regresar la navegacion");
            unStickNavigation();
        }
    });

    function stickNavigation(){
        // sticky = true;
        $("#description").addClass("fixed").removeClass("absolute");
        $("#navigation").slideUp("fast");
        $("#sticky-navigation").slideDown("fast");       
    }

    function unStickNavigation(){
        // sticky = false;
        $("#description").removeClass("fixed").addClass("absolute");
        $("#navigation").slideDown("fast");
        $("#sticky-navigation").slideUp("fast");
    }

    function isInBottom(){
        const $description = $("#description");   
        const descriptionHeight = $description.height();
        
        return $(window).scrollTop() > $(window).height() - (descriptionHeight *2);
    }  
})();