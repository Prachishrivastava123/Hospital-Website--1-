$(document).ready(function () {
  $(".my-slider").slick({
    settingName: "settingValue",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // dots: true,
    speed: 500,
    infinite: true,
    autoplaySpeed: 5000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
