$(document).ready(function () {
  
  
    $(window).scroll(function () { 
     // add border bottom to nav when scoll top is over 28 
       if( $(window).scrollTop() > 28){
            $("#nav").addClass("border-b-2");
            $("#nav").addClass("border-gray-500");
            $("#nav").addClass("bg-gray-800");
            $("#nav").addClass("opacity-80");

       }else{
             // remove border bottom to nav when scoll top is less than 29 
            $("#nav").removeClass("border-b-2");
            $("#nav").removeClass("border-gray-500");
            $("#nav").removeClass("bg-gray-800");
            $("#nav").removeClass("opacity-80");
       }

       
    });


       // display nav
     $("#ShowNav-BTN").click(function (e) { 
          $("#nav-links").removeClass("hidden");
          $("#nav-links").addClass("flex");

          
     });

     // hide nav
     $("#Hide-BTN").click(function (e) { 
          $("#nav-links").removeClass("flex");
          $("#nav-links").addClass("hidden");
     });



    
});