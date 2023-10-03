$(document).ready(function () {
   console.log("test")
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

       var offset = $("#test").offset();
       var top = offset.top;
      
      if(parseInt(top) <= 100){
          console.log("t")
      }
       
    });



    
});