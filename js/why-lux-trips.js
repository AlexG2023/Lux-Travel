new Swiper('.luxtrips-book-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    slideToClickedSlide: true,
    // autoplay: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    centeredSlides: true,
    initialSlide: 0,

    loop: true,
    speed: 700,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        375: {
            slidesPerView: 1.5,
            spaceBetween: 15,
        },
        769: {
            slidesPerView: 2.25
        },
        1440: {
            slidesPerView: 3 
        }
    },
});
