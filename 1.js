$(function () {
  console.log("  console.log(Kakao.isInitialized())", Kakao.isInitialized());
  if (!Kakao.isInitialized()) {
    Kakao.init("39664a8c58eabe14e10d98f360b0f5b5");
  }

  $(".kakao-link-btn").on("click", function (e) {
    console.log("clickclickclickclick");
    sendKakao();
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
          mobileWebUrl: "http://127.0.0.1:5500",
          webUrl: "http://127.0.0.1:5500",
        },
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "http://127.0.0.1:5500",
            webUrl: "http://127.0.0.1:5500",
          },
        },
      ],
      // 카카오톡 미설치 시 카카오톡 설치 경로이동
      installTalk: true,
    });
  };
});
