var cursor = $(".cursor"),
                follower = $(".cursor-follower");

            var posX = 0,
                posY = 0,
                mouseX = 0,
                mouseY = 0;

            TweenMax.to({}, 0.016, {
                repeat: -1,
                onRepeat: function() {
                    posX += (mouseX - posX) / 9;
                    posY += (mouseY - posY) / 9;

                    TweenMax.set(follower, {
                        css: {
                            left: posX - 20,
                            top: posY - 20
                        }
                    });

                    TweenMax.set(cursor, {
                        css: {
                            left: mouseX,
                            top: mouseY
                        }
                    });
                }
            });

            $(document).on("mousemove", function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
            });

            $(".portfolio-item img").on("mouseenter", function() {
                cursor.addClass("active");
                follower.addClass("active");
            });

            $(".portfolio-item img").on("mouseleave", function() {
                cursor.removeClass("active");
                follower.removeClass("active");
            });



            $('.open-overlay').click(function() {
                var overlay_navigation = $('.overlay-navigation'),
                  nav_item_1 = $('nav li:nth-of-type(1)'),
                  nav_item_2 = $('nav li:nth-of-type(2)'),
                  nav_item_3 = $('nav li:nth-of-type(3)'),
                  nav_item_4 = $('nav li:nth-of-type(4)'),
                  nav_item_5 = $('nav li:nth-of-type(5)'),
                  top_bar = $('.bar-top'),
                  middle_bar = $('.bar-middle'),
                  bottom_bar = $('.bar-bottom');
              
                overlay_navigation.toggleClass('overlay-active');
                if (overlay_navigation.hasClass('overlay-active')) {
              
                  top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
                  middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
                  bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
                  overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
                  nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
                  nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
                  nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
                  nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
                  nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
                } else {
                  top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
                  middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
                  bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
                  overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
                  nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
                  nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
                  nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
                  nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
                  nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
                }
              });