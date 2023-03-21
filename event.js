$(function () {
  $("video")[0].play();
  ajaxCall();

  // 위에서 가져온 list들을 Clipboard 객체를 생성할 때 넘겨줌
  var clipboard = new ClipboardJS(".money-man-copy");
  var clipboard1 = new ClipboardJS(".money-girl-copy");
  var clipboard2 = new ClipboardJS(".money-mDad-copy");
  var clipboard3 = new ClipboardJS(".money-mMom-copy");
  var clipboard4 = new ClipboardJS(".money-gMon-copy");
  // 클립보드에 복사가 완료되었을 때 실행할 이벤트 함수
  // 성공시
  clipboard.on("success", function (e) {
    alert("계좌번호 복사");
  });
  // 실패시
  // clipboard.on("error", function (e) {});

  clipboard1.on("success", function (e) {
    alert("계좌번호 복사");
  });

  clipboard2.on("success", function (e) {
    alert("계좌번호 복사");
  });

  clipboard3.on("success", function (e) {
    alert("계좌번호 복사");
  });

  clipboard4.on("success", function (e) {
    alert("계좌번호 복사");
  });

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

  $(".modal-btn-simple>span, .galList-modal").on("click", function (e) {
    // $(".modal-btn-simple>span").on("click", function (e) {
    $(".galList-modal").css("display", "none");
  });

  $(".img.lazy").on("click", function (e) {
    var index = $(this).attr("slide-num");

    $(".galList-modal").css("display", "flex");

    // var url = $(this).children().children()[0].style.backgroundImage.slice(4, -1).replace(/"/g, "");
    var url = $(this)[0].style.backgroundImage.slice(4, -1).replace(/"/g, "");
    $(".carousel-card > div > img")[0].src = url;
    $(".galList-modal").css("display", "flex");
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

});

var ajaxCall = function() {
  var url = "http://146.56.113.242:8080/user";
  $.ajax({
    type: "GET"
    ,url: url
    ,dataType: "json"
    ,beforeSend: function (request) {
      request.withCredentials = false;
  }
    // ,data:obj
    ,success : function(data) {
      console.log(data);
    }
    ,error : function(data) {
          console.log("json error",data);
    }
}); 	
  
}
