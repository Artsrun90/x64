$(document).ready(function(){
    $(".new-items").owlCarousel({
        stagePadding: 50,
        nav: true,
        items:3,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false
    });

    $(".stock").owlCarousel({
        stagePadding: 50,
        nav: true,
        items:2,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false
    });
    $(".brands").owlCarousel({
        stagePadding: 50,
        nav: true,
        items:4,
        navText: ["<img src='img/arrow-left.png'>","<img src='img/arrow-right.png'>"],
        dots: false,
        mouseDrag: false
    });

  });