var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

$(".button.rus_lang").click(function(){
    //alert("Нажата кнопка АНГЛИЙСКИЙ");
    var rusLang = document.getElementsByClassName("rus_lang");
    var enLang = document.getElementsByClassName("en_lang");
    for (i = 0; i < enLang.length; i++) {
      enLang[i].style.position = "static";
      rusLang[i].style.position = "absolute";
      rusLang[i].style.top = "-9999px";
      rusLang[i].style.left = "-9999px";
    }
  });

    $(".button.en_lang").click(function(){
      //alert("Нажата кнопка АНГЛИЙСКИЙ");
      var rusLang = document.getElementsByClassName("rus_lang");
      var enLang = document.getElementsByClassName("en_lang");
      for (i = 0; i < enLang.length; i++) {
        rusLang[i].style.position = "static";
        enLang[i].style.position = "absolute";
        enLang[i].style.top = "-9999px";
        enLang[i].style.left = "-9999px";
      }
  });

  paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {

    $('#preloader').delay(1).animate({top: '-100%'}, 2000, $.bez([0.19,1,0.22,1]));

    TweenMax.from(".title", 2, {
         delay: 1.8,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });