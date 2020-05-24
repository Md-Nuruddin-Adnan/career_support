  /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      var element = document.getElementById("header").style.top = "0";
      // document.getElementById("header").classList.add("shadow-sm");
    } else {
      var element = document.getElementById("header").style.top = "-150px";
      // document.getElementById("header").classList.remove("shadow-sm");
    }
    prevScrollpos = currentScrollPos;
  }

  //wow jquery plugins
  new WOW().init();

  //read more btn work
  $(".more-btn").click(function(){
    $("#more-text").removeClass("d-none");
    $(".more-btn").addClass("d-none");
  });



