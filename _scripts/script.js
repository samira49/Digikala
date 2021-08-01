$(document).ready(function(){
    
    // Header *******************************************************    
    
    
    $(".header_userSign").click(function(){
        $(".header_userSign_popUp").toggle();
        $(document).click(function(e) {
            if ( $(e.target).closest('.header_userSign').length === 0 ) {
                $(".header_userSign_popUp").hide();        
            }
        });
    });


    // *************************** Nav ****************************

        var overPos = 0;

    $('.header_nav_directory > li').mouseenter(function(){
        $('.overlay').delay(100).fadeIn(300);
        $(this).children(".submenu").show();
        $('.header_nav_directory > li .submenu').not($(this).children(".submenu")).hide();
        
        let overlayWidth = $(this).css("width");
        overPos = $(this).position("left");
        
        $('.header_nav_overlay').stop().delay(50).animate({
            "width": overlayWidth,
            "left": overPos.left
        }, "fast");
    });
    
    $('.header_nav_directory').mouseleave(function(){
        $('.overlay').delay(100).fadeOut(300);
        $('.header_nav_directory > li > .submenu').hide();
        
        let overlayWidth = $('.header_nav_overlay').css("width").slice(0,-2);
        
        $('.header_nav_overlay').delay(100).animate({
            "left": overPos.left + (overlayWidth/2),
            "width": 0
        });
    });    

    // Header Nav Overlay Color ***********************************
    
    $('#superMarket').mouseenter(function(){
            $('.header_nav_overlay').css({ "border-bottom-color":"#9dc44d" });
    });
    $('#superMarket').siblings("li").mouseenter(function(){
            $('.header_nav_overlay').css({ "border-bottom-color":"#ef5661" });
    });

    // Image Zoom *************************************************

    $(function() {
        $('[data-spzoom]').spzoom({
            position: 'left',
            width: 550,
            height: 550,
            margin: 20
        });
        
    });

    // Other Products Carousel **************************************
    
    $(".relatedProducts .owl-carousel").owlCarousel({
        loop: false,
        center: false,
        rtl: true,
        nav: true,
        items: 4,
        responsive:{
            0:{
                items:1.5 
            },
            400:{
                items:2,
            },
            550:{
                items:2.5
            },
            650:{
                items:3
            },
            800:{
                items:4
            },
            1000:{
                items:6
         
            }
        }
    });
    
    // Minimize Maximize Switches ***********************************
    
    
    $(".extra_info .maximize").click(function(){
        minimizer(this);
        $(".extra_info ul li").css("display", "list-item");
        
    });
    $(".extra_info .minimize").click(function(){
        maximizer(this);
        $("ul li:nth-of-type(n+4)").css("display", "none");
    })
    
    $(".vendors .maximize").click(function(){
        minimizer(this);
        $(".vendors table tr").css("display", "flex");
    });
    
    $(".vendors .minimize").click(function(){
        maximizer(this);
        $(".vendors table tr:nth-child(n+3):not(:last-child)").css("display", "none");
    })
    
    $(".review_content .maximize").click(function(){
        minimizer(this);
        $(".review_content").css("height","unset");
        $(".review_content .minimize").css("display","block");
        $(".review_content .bGradient").hide();
        
    });
    $(".review_content .minimize").click(function(){
        maximizer(this);
        $(".review_content").css("height","250px");
        $(".review_content .maximize").css("display","block");
        $(".review_content .bGradient").show();
    })
    

    $(".footer_toTop a").click(function(){
        $('html, body').animate({scrollTop: '0px'}, 800);
    })

    function minimizer (item) {
            $(item).toggle();
            $(item).siblings(".minimize").toggle();
    }
    function maximizer (item) {
            $(item).toggle();
            $(item).siblings(".maximize").toggle();
    }
    
    // $(".maximize").click(function(){
    //     $(this).toggle();
    //     $(this).siblings(".minimize").toggle();
    // })
    // $(".minimize").click(function(){
    //     $(this).toggle();
    //     $(this).siblings(".maximize").toggle();
    // })


    // Review Tabs ************************************************

    $(window).scroll(function () {
        var sc = $(".reviews_header").position()
        console.log(sc)
        if (sc > 0) {
            $(".reviews_header").addClass("boxShadow")
        } else {
            $(".reviews_header").removeClass("boxShadow")
        }
    });
    

    $(".reviews_header > a").click(function() {
        $(this).siblings().removeClass("active");
        $(".reviews > section:not(.isHidden)").addClass("isHidden");
        $(this).addClass("active");
        $(".reviews > section."+this.id).removeClass("isHidden");
    });
});
    
    

    // const REVIEWHEADER_TAB = document.querySelectorAll('.reviews_header > a');

    // const REVIEW_TAB = document.querySelectorAll('.reviews > section');

    // console.log(REVIEW_TAB);
    // console.log(REVIEWHEADER_TAB);


    // function myConsole(){
    //     console.log(event.target.classList.add("active"));
    // }