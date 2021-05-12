



//burger toggle click
function myFunction(x) {
    x.classList.toggle("change");
    var hiddenMenu = document.getElementById("hiddenMenu");
      if(hiddenMenu.style.display==="block"){
        hiddenMenu.style.setProperty("display", "none", "important");
      }else{
        hiddenMenu.style.display="block";
      }
    }

 //Navbar dropdown clicks
 function onManClick(){
   var hiddenMan = document.getElementById("hiddenUlMan");
   var chevronMan = document.getElementById("chevronMan");
   if (hiddenMan.style.display==="flex"){
     hiddenMan.style.display="none";
     chevronMan.classList.remove('fa-chevron-up');
     chevronMan.classList.add('fa-chevron-down');
   }else{
     hiddenMan.style.display="flex";
     chevronMan.classList.remove('fa-chevron-down');
     chevronMan.classList.add('fa-chevron-up');
   }
  }

  function onWomanClick(){
    var hiddenWoman = document.getElementById("hiddenUlWoman");
    var chevronWoman = document.getElementById("chevronWoman");
    if (hiddenWoman.style.display==="flex"){
      hiddenWoman.style.display="none";
      chevronWoman.classList.remove('fa-chevron-up');
      chevronWoman.classList.add('fa-chevron-down');
    }else{
      hiddenWoman.style.display="flex";
      chevronWoman.classList.remove('fa-chevron-down');
      chevronWoman.classList.add('fa-chevron-up');
    }
   }

 