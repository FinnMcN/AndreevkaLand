$(document).ready(function () { 
    var swiper = new Swiper(".header__main-swiper", {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        scrollbar: {
            el: ".header__info-scrollbar",
        },
    });
    $(".location__slider")
        .not(".slick-initialized")
        .slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $(".location__slider-prev"),
            nextArrow: $(".location__slider-next"),
        });
    $(".sites__items-block").each(function () {
        let context = this;
        $(".sites__items-block_more", this).on("click", function() {
            let width = $(window).outerWidth();
            if (width <= 480) {             
                $(".sites__column:hidden", context).slice(0, 4).slideDown();  
                if ($(".sites__column:hidden", context).length == 0) {
                    $(".sites__items-block_more", context).css("display","none");
                }           
            } 
        })
    });

    $(".header__menu-icon").on("click", function() {
        $(".header__nav, .header__menu-icon, .overlay").toggleClass("active");
        preventScroll();
    });
    $(".overlay").on("click", function() {
        if ($(".overlay").hasClass("active")) {
            $(".header__nav, .header__menu-icon, .overlay").removeClass("active");
            preventScroll();
        }
    });

    function preventScroll() {
        if ($(".overlay").hasClass("active")) {
            $("body").css("overflow", "hidden");
        } else {
            $("body").removeAttr("style");
        }
    }

    function adaptive_header(width) {
        if (width <= 768) {
            if (!$(".header__nav").hasClass("done")) {
                $(".header__nav").addClass("done").appendTo($(".header__menu-mobile"));
            }
        } else {
            if ($(".header__nav").hasClass("done")) {
                $(".header__nav").removeClass("done").insertAfter($(".header__logo"));
            }
        }
    }

    function adaptive_about(width) {     
        if (width <= 580) {
            if (!$(".about__text-title").hasClass("done")) {
                $(".about__text-title").addClass("done").insertAfter($(".about-title"));
            }
        } else {
            if ($(".about__text-title").hasClass("done")) {
                $(".about__text-title").removeClass("done").prependTo($(".about__text"));
            }
        }
    }
    
    function adaptive_sites(width) {
        $(".sites__items-block").each(function () {
            if (width <= 480) {
                $(".sites__column", this).slice(0, 2).show();
                if (!$(".sites__items-block_more", this).hasClass("done")) {
                    $(".sites__items-block_more", this)
                    .addClass("done")
                    .insertAfter($(".sites__items", this))
                    .addClass("btn");
                    $(".sites__items-block_more span", this).text("Показать еще");
                }
            } else {
                if ($(".sites__items-block_more", this).hasClass("done")) {
                    $(".sites__items-block_more", this)
                        .removeClass("done")
                        .appendTo($(".sites__items-block_text", this))
                        .removeClass("btn");
                        $(".sites__items-block_more span", this).text("показать все");
                }
                if ($(".sites__items-block_more", this).css("display")) {
                    $(".sites__items-block_more", this).removeAttr("style");
                }
                if ($(".sites__column", this).css("display")) {
                    $(".sites__column", this).removeAttr("style");
                }
            }              
        });       
    }

    function adaptive_partners(width) {
        $(".partners__item").each(function () {
            if (width <= 640) {
                if (!$(".partners__item-img", this).hasClass("done")) {
                    $(".partners__item-img", this)
                        .addClass("done")
                        .insertAfter($(".partners__item-desc", this));
                }
            } else {
                if ($(".partners__item-img", this).hasClass("done")) {
                    $(".partners__item-img", this)
                        .removeClass("done")
                        .prependTo($(this));
                }
            }
        });
    }

    function adaptive_areas(width) {
        if (width <= 1600) {
            if (!$(".areas__selects-btn").hasClass("done")) {
                $(".areas__selects-btn").addClass("done").appendTo($(".areas__selects-items"));
            }
        } else {
            if ($(".areas__selects-btn").hasClass("done")) {
                $(".areas__selects-btn").removeClass("done").appendTo($(".areas__selects"));
            }
        }
        
    }

    function adaptive_function() {      
        let w = $(window).outerWidth();
        adaptive_header(w);
        adaptive_about(w);
        adaptive_sites(w);
        adaptive_partners(w);
        adaptive_areas(w);       
    }
    $(window).resize(function (event) {       
        adaptive_function();
    });    
    adaptive_function();
});
