$(function(){


  // swiper.js
  const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4 //original:6
  });
  
  const swiper2 = new Swiper(".mySwiper2", {
    thumbs: {
      swiper: swiper
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // 登録した画像の数だけdivタグ生成を繰り返す
  const repeatNumber =  swiper.slidesPerView;
  console.log(swiper);
  console.log(repeatNumber);

  // 繰り返すdivタグのプロパティの定義
  const divProperty = {
    divClass : "swiper-slide",
    imgClass : "swiper-slide-image",
    imgSrc : "image/swiper1.png",
    imgAlt : "スライダー"
  };
  console.log(divProperty);


});
