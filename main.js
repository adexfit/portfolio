var myNav = document.querySelector('.flexContainer');
window.onscroll = function(){
    "use strict";
    if((document.body.scrollTop >= 30)||(document.documentElement.scrollTop >= 30)){
        //myNav.classList.add("navColored");
       // myNav.classList.remove("navBlue");
    }else{
        //myNav.classList.add("navBlue");
        //myNav.classList.remove("navColored");
    }
};