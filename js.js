$(document).ready(function(){
    $(".new-items").owlCarousel({
        stagePadding: 50,
        nav: true,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false,
        responsive : {
            0:{
                items:1,
                stagePadding: 0
            },
            480:{
                items:2
            },
            600:{
                items:3
            },
            960:{
                items:4
            },
            1280:{
                items:4
            }
        }
    });

    $(".stock").owlCarousel({
        stagePadding: 50,
        nav: true,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false,
        responsive : {
            0:{
                items:1,
                stagePadding: 0
            },
            480:{
                items:1
            },
            600:{
                items:1
            },
            960:{
                items:2
            },
            1280:{
                items:2
            }
        }
    });
    $(".brands").owlCarousel({
        stagePadding: 50,
        nav: true,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false,
        responsive : {
            0:{
                items:3,
                stagePadding: 0
            },
            480:{
                items:3
            },
            600:{
                items:4
            },
            960:{
                items:5
            },
            1280:{
                items:4
            }
        }
    });

  });