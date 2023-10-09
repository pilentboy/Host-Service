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
          $("#nav-links").removeClass("-translate-y-full");
          $("#nav").removeClass("opacity-80");
          $("#nav-links").addClass("translate-y-0");  
          $("body").addClass("overflow-y-hidden");  

     
     });




    
     // hide nav 
     function hideNav(){
          $("#nav-links").removeClass("translate-y-0"); 
          $("#nav-links").addClass("-translate-y-full");
          $("body").removeClass("overflow-y-hidden");  
          $("#nav").addClass("opacity-80");
     }



     $("#Hide-BTN").click(function (e) { 
          hideNav()
     });

     // hide nav when nav link clicked
     $("#nav-links li a").click(()=>{
          hideNav()
     })

    

  
});

