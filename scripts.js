var bgimg = document.getElementById("bgimg"); 

var loadframes = [
  "frames/eu1.svg",
  "frames/eu2.svg",
  "frames/eu3.svg",
  "frames/eu4.svg",
  "frames/eu5.svg",
  "frames/eu6.svg",
  "frames/eu7.svg",
  "frames/eu8.svg",
  "frames/eu9.svg",
  "frames/eu10.svg",
  "frames/eu11.svg",
  "frames/eu12.svg",
]

var images = [
  "pubpre/Contents-&-Hands.jpg",
  "pubpre/Dougal-string-spread.jpg", 
  "pubpre/Back-&-Front.jpg",
  "pubpre/Brexit-Spread.jpg", 
  "pubpre/Film-photos-&-Hands.jpg",
  "pubpre/Spreads-in-grid.jpg",
  "pubpre/Frankie-Spread.jpg",
  "pubpre/Paulius-string-spread.jpg",
  "pubpre/Charlotte-Spread.jpg",
  "pubpre/grid-1.jpg",
]

 var count = 0;
 v = setInterval(loadcount, 100);

function loadcount() {
    
  document.getElementById('loaderimg').src = loadframes[count];
  count++;
    
  if (count == loadframes.length){
      count = 0;
  };     
}

$(document).ready(function() {
    
setTimeout(loadhide, 2000);
setTimeout(hidehide, 2300);
setTimeout(loadcount, 2500);
    
    
function loadhide() {
  $('#loader').css('opacity', '0');  
}
   
function hidehide() {
  $('#loader').css('display', 'none');  
}

    // ISSUE 2 FEATURES
    
    $("#2-Feature-1").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/CCC.png";
    $('#hoverphoto').css('display', 'block');  
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-2").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Action-Hero.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-3").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Marius-Jopen.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    });
    
    $("#2-Feature-4").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/GirlsToTheFront.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-5").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/ImpliedGallery.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-6").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/JoinTheCool.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    });
    
    $("#2-Feature-7").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/ItsTimeToGoPeople.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-8").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/SubbaCultcha.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-9").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/CHIKA.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-10").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/ProtestPress.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-11").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Radiations.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
    $("#2-Feature-12").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Sonder.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    });
    
    $("#2-Feature-13").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/AmritSandhu.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    

    
    
    // ISSUE 1 FEATURES
    
    $("#1-Feature-1").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Charlotte-Allen.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-2").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Olive-Ashford.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-3").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Kitty.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-4").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Nat Brown.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-5").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Paulius Daunys.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-6").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Harriet Davey.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-7").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/EUnited.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-8").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Holly Greaves.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-9").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-10").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Francesca-Harvey.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-11").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Eloise Knights.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-12").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Cecily Loveys Jervoise.JPG";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-13").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Souvenir.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-14").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Alice-Pandolfo.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-15").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Frankie Parham.JPG";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-16").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Tabatha-.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-17").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Charlotte-Allen.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-18").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Freya.png";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-19").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Beau-Scarlett-Pitt.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-20").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Eddie Smith.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-21").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Madi Swain.JPG";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    
        $("#1-Feature-22").hover(function(){
    document.getElementById("hoverphoto").src = "hoverimgs/Dougal Verinder Gedge.jpg";
    $('#hoverphoto').css('display', 'block'); 
    }, function(){
    $('#hoverphoto').css('display', 'none');  
    }); 
    

    
var step = 0;

$("#preview").click(function(){
  document.getElementById('pubpre').src = images[step];
  step++;
    
  if (step == images.length){
      step = 0;
  };     
 });    
});

//$(document).on('mousemove', function(e){
//    var xl = Math.round(e.pageX);
//    var yl = Math.round(e.pageY);
//    $('.cursor').css('top', yl);
//    $('.cursor').css('left', xl);
//});

$(document).on('scroll', function(e){     
    if($(document).scrollTop() >1){
        $('#lm').css('width', '0');  
        $('#lm').css('opacity', '0');  
        $('#ls').css('width', '20%');  
        $('#ls').css('opacity', '1'); 
        $('#ls').css('left', '10%'); 
        $('#lo').css('left', '38%');  
        $('.logowrap').css('background-color', 'white');  
    if (window.matchMedia("(max-width: 750px)").matches) {
        $('.logo').css('color', '#23431d');
        $('.links a').css('color', '#23441d');
        $('#lo').css('left', '32%');  
      }else{
        $('.logo').css('color', '#23431d');   
       }
    }else{
     if (window.matchMedia("(max-width: 750px)").matches) { 
        $('#lo').css('left', '75.5%');  
     }else{
       $('#lo').css('left', '90%');  
     }
        $('#lm').css('width', '62%');  
        $('#lm').css('opacity', '1');  
        $('#ls').css('width', '20%');  
        $('#ls').css('opacity', '0');  
        $('.logowrap').css('background-color', 'white'); 
        $('.logo').css('color', '#23431d');
        $('.links a').css('color', '#23431d');
    }
    
    var scrollDist = $(document).scrollTop();
    var h = $(document).height();
    var perc = (scrollDist / h)*100;
        bgimg.style.top = -perc*4 + "vh";
});