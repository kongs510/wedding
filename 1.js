$(function () {
  console.log("  console.log(Kakao.isInitialized())", Kakao.isInitialized());
  if (!Kakao.isInitialized()) {
    Kakao.init("39664a8c58eabe14e10d98f360b0f5b5");
  }

  $(".kakao-link-btn").on("click", function (e) {
    sendKakao();
  });

  $(".kakao-link-btn").on("click", function (e) {
    sendKakao();
  });

  $(document).on("click", function (e) {
    console.log(e.target);
  });

  // $(".modal-btn-simple>span, .galList-modal").on("click", function (e) {
  //   $(".galList-modal").css("display", "none");
  //   // $(".slick-track").not(".slick-initialized").slick();
  // });

  $(".galList > div > ul > li").on("click", function (e) {
    var index = $(this).attr("slide-num");

    $(".Slide-Conatainer").css("display", "flex");

    console.log($(this).attr("slide-num"));
    console.log($(this).children().children()[0].style.backgroundImage.slice(4, -1).replace(/"/g, ""));
    var url = $(this).children().children()[0].style.backgroundImage.slice(4, -1).replace(/"/g, "");
    $(".slick-active > img")[0].src = url;
  });

  $(".gallery-more-button > span").on("click", function (e) {
    if ($(".hiddenList").hasClass("active")) {
      $(".hiddenList").hide();
      $(".hiddenList").removeClass("active");
      $(".gallery-more-button >span").text("사진 더 보기");
      $("body").animate({scrollTop: $(".section3").offset().top}, 0);
    } else {
      $(".hiddenList").show();
      $(".hiddenList").addClass("active");
      $(".gallery-more-button >span").text("사진 접기");
    }
  });

  var sendKakao = function () {
    // head에서 정보 가져오기(JQuery)
    var thumbImg = $('meta[property="og:image"]').attr("content"); //og이미지 주소
    var thumbTitle = $('meta[property="og:title"]').attr("content"); //og타이틀
    var thumbDesc = $('meta[property="og:description"]').attr("content"); //og설명
    var linkUrl = $('meta[property="og:url"]').attr("content"); //url
    // 메시지 공유 함수
    console.log(thumbImg, thumbTitle, thumbDesc, linkUrl);

    Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        // title: "카카오공유하기 시 타이틀",
        // description: "카카오공유하기 시 설명",
        // imageUrl: "카카오공유하기 시 썸네일 이미지 경로",
        title: thumbTitle,
        description: thumbDesc,
        imageUrl: thumbImg,
        link: {
          mobileWebUrl: "https://kongs510.github.io/wedding",
          webUrl: "https://kongs510.github.io/wedding",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://kongs510.github.io/wedding",
            webUrl: "https://kongs510.github.io/wedding",
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  };

  // $(".slick-track")
  //   .not(".slick-initialized")
  //   .slick({
  //     // slide: "div", //슬라이드 되어야 할 태그 ex) div, li
  //     // infinite: true, //무한 반복 옵션
  //     // slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
  //     // slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
  //     // speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
  //     // arrows: true, // 옆으로 이동하는 화살표 표시 여부
  //     // dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
  //     // autoplay: true, // 자동 스크롤 사용 여부
  //     // autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
  //     // pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  //     // vertical: false, // 세로 방향 슬라이드 옵션
  //     // prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
  //     // nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
  //     // dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
  //     // draggable: true, //드래그 가능 여부
  //     dots: true,
  //     infinite: true,
  //     speed: 2000,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     GoTo: 3,
  //     arrows: false,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정
  //     nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
  //     responsive: [
  //       // 반응형 웹 구현 옵션
  //       {
  //         breakpoint: 960, //화면 사이즈 960px
  //         settings: {
  //           //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
  //           slidesToShow: 1,
  //         },
  //       },
  //       {
  //         breakpoint: 768, //화면 사이즈 768px
  //         settings: {
  //           //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
  //           slidesToShow: 1,
  //         },
  //       },
  //     ],
  //   });
});
