$(document).ready(function () {


    var cngpro = document.querySelector(".cng-pro");
    var cngarr = document.querySelector(".cng-arrow");
    var cngplat = document.querySelector(".cng-plat");
    var clrcng = document.querySelector(".clr-cng");
    var cngtxt = document.querySelector(".cng-text");
    var cnghi = document.querySelector(".cng-hide");

    cngarr.addEventListener("click", function () {
        cngplat.classList.add("left");
        cnghi.classList.add("left");
        cngarr.classList.add("hide");
        cngpro.classList.add("show");
        clrcng.classList.add("show");
        cngtxt.classList.add("show");
    });

    cnghi.addEventListener("click", function () {
        cngplat.classList.remove("left");
        cnghi.classList.remove("left");
        cngarr.classList.remove("hide");
        cngpro.classList.remove("show");
        clrcng.classList.remove("show");
        cngtxt.classList.remove("show");
    });



    var preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 5000);
    });

    preloader.addEventListener("mousewheel", function (event) {
        event.preventDefault();
    })


    var navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        navscrll = window.scrollY;
        if (navscrll > 0) {
            navbar.classList.add("stiky");
        } else {
            navbar.classList.remove("stiky");
        }
    })


    // ================== Active class add ========================//
    var active_home = document.getElementById('banner');
    var active_about = document.getElementById('about');
    var active_services = document.getElementById('services');
    var active_portfolio = document.getElementById('portfolio');
    var active_clients = document.getElementById('clients');
    var active_idea = document.getElementById('idea');
    var active_testimonial = document.getElementById('testimonial');
    var active_footer = document.getElementById('footer');
    var nav_link_h = document.querySelector('.nav-h');
    var nav_link_a = document.querySelector('.nav-a');
    var nav_link_s = document.querySelector('.nav-s');
    var nav_link_p = document.querySelector('.nav-p');
    var nav_link_t = document.querySelector('.nav-t');
    var nav_link_c = document.querySelector('.nav-c');

    active_home.addEventListener("mouseenter", function () {
        nav_link_h.classList.add("active");
    });
    active_home.addEventListener("mouseleave", function () {
        nav_link_h.classList.remove("active");
    });

    active_about.addEventListener("mouseenter", function () {
        nav_link_a.classList.add("active");
    });
    active_about.addEventListener("mouseleave", function () {
        nav_link_a.classList.remove("active");
    });

    active_services.addEventListener("mouseenter", function () {
        nav_link_s.classList.add("active");
    });
    active_services.addEventListener("mouseleave", function () {
        nav_link_s.classList.remove("active");
    });

    active_portfolio.addEventListener("mouseenter", function () {
        nav_link_p.classList.add("active");
    });
    active_portfolio.addEventListener("mouseleave", function () {
        nav_link_p.classList.remove("active");
    });

    active_clients.addEventListener("mouseenter", function () {
        nav_link_t.classList.add("active");
    });
    active_clients.addEventListener("mouseleave", function () {
        nav_link_t.classList.remove("active");
    });

    active_idea.addEventListener("mouseenter", function () {
        nav_link_t.classList.add("active");
    });
    active_idea.addEventListener("mouseleave", function () {
        nav_link_t.classList.remove("active");
    });

    active_testimonial.addEventListener("mouseenter", function () {
        nav_link_t.classList.add("active");
    });
    active_testimonial.addEventListener("mouseleave", function () {
        nav_link_t.classList.remove("active");
    });

    active_footer.addEventListener("mouseenter", function () {
        nav_link_c.classList.add("active");
    });
    active_footer.addEventListener("mouseleave", function () {
        nav_link_c.classList.remove("active");
    });


    // ================== Active class add ========================//

    // ================== Logo letter animation start ============================= //

    var textWrapper = document.querySelector('.navbar-brand .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.navbar-brand .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        }).add({
            targets: '.navbar-brand',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

    // ================== menu-bar letter end ================ //


    // ================== banner hedaing letter start ================ //
    var textWrapper = document.querySelector('.heading-animation .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

    anime.timeline({
            loop: true
        })
        .add({
            targets: '.heading-animation .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.heading-animation .line',
            translateX: [0, document.querySelector('.heading-animation .letters').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
            targets: '.heading-animation .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 600,
            offset: '-=775',
            delay: (el, i) => 34 * (i + 1)
        }).add({
            targets: '.heading-animation',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 5000,
        });

    //============= About details ==============//
    var details = document.querySelector(".details");
    var rewards = document.querySelector(".rewards");
    var skills = document.querySelector(".skills");
    var info_details = document.querySelector(".info-details");
    var info_rewards = document.querySelector(".info-rewards");
    var info_skills = document.querySelector(".info-skills");

    details.addEventListener("click", function () {
        info_details.classList.add("show-details");
        info_rewards.classList.remove("show-rewards");
        info_skills.classList.remove("show-skills");

        details.classList.add("clr-de");
        rewards.classList.remove("clr-re");
        skills.classList.remove("clr-sk");

    })

    rewards.addEventListener("click", function () {
        info_rewards.classList.add("show-rewards");
        info_details.classList.add("hide-details");
        info_details.classList.remove("show-details");
        info_skills.classList.remove("show-skills");

        rewards.classList.add("clr-re");
        details.classList.add("clr-hi");
        details.classList.remove("clr-de");
        skills.classList.remove("clr-sk");
    })

    skills.addEventListener("click", function () {
        info_skills.classList.add("show-skills");
        info_details.classList.remove("show-details");
        info_details.classList.add("hide-details");
        info_rewards.classList.remove("show-rewards");

        skills.classList.add("clr-sk");
        details.classList.add("clr-hi");
        details.classList.remove("clr-de");
        rewards.classList.remove("clr-re");
    })

    //============= About details ==============//
    //============= progressbar javascript ==============//
    $('.progressbar-web').rProgressbar({
        percentage: 90,
        ShowProgressCount: true,
        duration: 10000,
        fillBackgroundColor: '#24A04A',
        borderRadius: '50px',
        height: '15px',
        width: '100%',
    });

    $('.progressbar-ui').rProgressbar({
        percentage: 80,
        ShowProgressCount: true,
        duration: 10000,
        fillBackgroundColor: '#24A04A',
        borderRadius: '50px',
        height: '15px',
        width: '100%',
    });

    $('.progressbar-dm').rProgressbar({
        percentage: 75,
        ShowProgressCount: true,
        duration: 10000,
        fillBackgroundColor: '#24A04A',
        borderRadius: '50px',
        height: '15px',
        width: '100%',
    });
    //============= progressbar javascript ==============//

    //============= counterup javascript ==============//

    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });

    //============= counterup javascript ==============//


    //============= Slick Silder ==============//
    $('.port-item').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        prevArrow: '<span class="slick-right"> <i class="fa-solid fa-angle-right"></i> </span>',
        nextArrow: '<span class="slick-left"> <i class="fa-solid fa-angle-left"></i> </span>',
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1,
            }
        }]
    });
    //============= Slick Silder ==============// 


    //============= Slick Silder ==============//
    $('.testimonial-slider').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        asNavFor: '.slider-info',
        autoplaySpeed: 5000,
    });
    //============= Slick Silder ==============// 


    //============= Slick Silder ==============//
    $('.slider-info').slick({
        autoplay: true,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-slider',

        // responsive: [{
        //         breakpoint: 768,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 3
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             arrows: false,
        //             centerMode: true,
        //             centerPadding: '40px',
        //             slidesToShow: 1
        //         }
        //     }
        // ]
    });
    //============= Slick Silder ==============// 
    AOS.init()

});