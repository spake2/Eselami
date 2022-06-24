$('section.tab_bar').ready(function() {
  $('section.tab_bar ul.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: false,
    width: '20%',
    items: 5,
    lazyLoad: true,
    dotsContainer: 'ol#carousel-custom-slider-dots',
    navigation: false,
    margin: 0,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    stagePadding:30,
    smartSpeed:450,
    autoplay: false,
    dots: true
  });
});

$('section.slider').ready(function() {
  $('section.slider ul.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: false,
    width: '15%',
    items: 7,
    lazyLoad: true,
    dotsContainer: 'ol#carousel-custom-slider-dots',
    navigation: false,
    margin: 0,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    stagePadding:45,
    smartSpeed:450,
    autoplay: false,
    dots: true
  });
});

$('section.about_us').ready(function() {
  $('section.about_us ul.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: false,
    width: '33%',
    items: 3,
    lazyLoad: true,
    dotsContainer: 'ol#carousel-custom-slider-dots',
    navigation: false,
    margin: 0,
    nav: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    smartSpeed:450,
    dots: true
  });
});
