import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test2_form.css";

function TestPage2() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);

  const refs = [
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
    createRef(),
  ];

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");
  const [question9, setQuestion9] = useState("");
  const [question10, setQuestion10] = useState("");

  const getInputValue = () => {
    const inputValue1 = question1;
    const inputValue2 = question2;
    const inputValue3 = question3;
    const inputValue4 = question4;
    const inputValue5 = question5;
    const inputValue6 = question6;
    const inputValue7 = question7;
    const inputValue8 = question8;
    const inputValue9 = question9;
    const inputValue10 = question10;
    console.log(`Input 1 value: ${inputValue1}`);
    console.log(`Input 2 value: ${inputValue2}`);
    console.log(`Input 3 value: ${inputValue3}`);
    console.log(`Input 4 value: ${inputValue4}`);
    console.log(`Input 5 value: ${inputValue5}`);
    console.log(`Input 6 value: ${inputValue6}`);
    console.log(`Input 7 value: ${inputValue7}`);
    console.log(`Input 8 value: ${inputValue8}`);
    console.log(`Input 9 value: ${inputValue9}`);
    console.log(`Input 10 value: ${inputValue10}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentQuestionState = eval("question" + (showNextTest + 1));
    if (currentQuestionState === "") {
      alert("정답을 선택해주세요");
    } else {
      getInputValue();
      navigate("/Coupang2");
    }
  };

  const goToNext = () => {
    const currentQuestionState = eval("question" + (showNextTest + 1));
    if (currentQuestionState === "") {
      alert("정답을 선택해주세요");
    } else {
      setShowNextTest(showNextTest + 1);
    }
  };

  const goToPrev = () => {
    if (showNextTest > 0) {
      setShowNextTest(showNextTest - 1); // decrease the state by 1 when prev button is clicked
    }
  };

  useEffect(() => {
    if (showNextTest < refs.length) {
      refs[showNextTest].current.scrollIntoView({ behavior: "smooth" }); // This will scroll to the next test
    }
  }, [showNextTest]);

  return (
    <div className="testPage2">
      <div className="survey">
        <form id="form" onSubmit={handleSubmit}>
          <div className="test" ref={refs[0]}>
            <div className="question_container">
              <h3 className="question">1. 당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question1 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion1(1)}
              >
                게임 개발(유니티, 언리얼, Pygame)
              </button>
              <button
                type="button"
                className={question1 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion1(2)}
              >
                백엔드 또는 인프라(JAVA-Spring, Python-Django, Network, Ubuntu,
                CentOS, etc)
              </button>
              <button
                type="button"
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                정보보안(해킹과 방어)
              </button>
              <button
                type="button"
                className={question1 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion1(4)}
              >
                프론트엔드(HTML, CSS, JavaScript, etc)
              </button>
              <button
                type="button"
                className={question1 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion1(5)}
              >
                데이터 분석과 인공지능(전처리, 분석, 시각화, 머신러닝, 딥러닝)
              </button>
              <button
                type="button"
                className={question1 === 6 ? "selected" : ""}
                value="6"
                onClick={() => setQuestion1(6)}
              >
                이 길은 그냥 내 길이 아닌 것 같다..
              </button>
            </div>
            <div className="btn_wrap">
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[1]}>
            <div className="question_container">
              <h3 className="question">
                2. 여러분의 서비스가 성공했다면, 서비스를 성공시킨 요소는?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question2 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion2(1)}
              >
                데이터 분석을 통한 효과적인 개인 맞춤형 서비스
              </button>
              <button
                type="button"
                className={question2 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion2(2)}
              >
                화려하거나 품격있는 디자인, 흥미로운 콘텐츠 제작
              </button>
              <button
                type="button"
                className={question2 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion2(3)}
              >
                게임적인(Gamification, 게이미피케이션) 요소 도입
              </button>
              <button
                type="button"
                className={question2 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion2(4)}
              >
                안정적인 서비스 운용
              </button>
              <button
                type="button"
                className={question2 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion2(5)}
              >
                믿을 수 있는 정보 관리
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[2]}>
            <div className="question_container">
              <h3 className="question">
                3. 오류가 생겼습니다. 모두의 중요도가 동일하다고 할 때 당신이
                먼저 처리할 오류는?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question3 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion3(1)}
              >
                서브 페이지 화면 로딩 시간이 딜레이되는 현상
              </button>
              <button
                type="button"
                className={question3 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion3(2)}
              >
                데이터 분석을 통한 맞춤형 광고 서비스 오류
              </button>
              <button
                type="button"
                className={question3 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion3(3)}
              >
                홈페이지 화면의 뒤틀린 이미지, 폰트 깨짐 현상
              </button>
              <button
                type="button"
                className={question3 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion3(4)}
              >
                (개인정보 보호법에는 저촉되지 않지만) 민감 정보가 노출되는 현상
              </button>
              <button
                type="button"
                className={question3 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion3(5)}
              >
                오류가 발생했을 때 할 수 있는 게임
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[3]}>
            <div className="question_container">
              <h3 className="question">
                4. 당신이 만약 웹 서비스를 만들었을 때, 가장 듣기 좋을 것 같은
                칭찬은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question4 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion4(1)}
              >
                개발자 친구 : "네가 만든 사이트 진짜 예쁘다!"
              </button>
              <button
                type="button"
                className={question4 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion4(2)}
              >
                개발자 친구 : "동시 접속이 1천명인데 이렇게 빠르다고?" 또는 "SNS
                로그인이 다 들어가 있네, 난 요즘 이런게 편하더라."
              </button>
              <button
                type="button"
                className={question4 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion4(3)}
              >
                해커 친구 : "보안 취약점이 없는 완벽한 시큐어코딩이야. 너의
                사이트는 완벽해."
              </button>
              <button
                type="button"
                className={question4 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion4(4)}
              >
                개발자 친구 : "서비스를 해보니 내가 원하는 광고가 딱! 나오니까
                너무 좋더라!
              </button>
              <button
                type="button"
                className={question4 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion4(5)}
              >
                게이머 친구 : "사이트에 있는 그 게임 때문에, 2박 3일동안 잠도
                자지 못했어."
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[4]}>
            <div className="question_container">
              <h3 className="question">
                5. 당신은 영양제를 구입하려고 합니다. 당신이 가장 먼저 고려할
                것은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question5 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion5(1)}
              >
                일단 효과가 좋은걸 사자! 고농축 영양제 구매
              </button>
              <button
                type="button"
                className={question5 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion5(2)}
              >
                화려한 상품 상세 페이지가 내 눈을 사로잡는다. 이걸로 사야지!
              </button>
              <button
                type="button"
                className={question5 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion5(3)}
              >
                동일한 영양제 함량을 제조사별로 비교해 봐야지
              </button>
              <button
                type="button"
                className={question5 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion5(4)}
              >
                믿을 수 있는 영양제가 맞나? 꼼꼼하게 따져봐야겠어
              </button>
              <button
                type="button"
                className={question5 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion5(5)}
              >
                맛없으면 결국 안 먹어! 젤리로 된 제품은 없나?
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[5]}>
            <div className="question_container">
              <h3 className="question">
                6. 당신은 망해가는 빵집을 인수했습니다. 당신이 가장 먼저 시작할
                일은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question6 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion6(1)}
              >
                "어떤 빵이 제일 잘 나갈까?" 수요를 조사해서 새로운 메뉴 만들기
              </button>
              <button
                type="button"
                className={question6 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion6(2)}
              >
                "빵집은 빵이 맛있어야지!" 효율이 좋은 새 오븐 사기
              </button>
              <button
                type="button"
                className={question6 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion6(3)}
              >
                "일단 이벤트를 통해 손님을 모아야 해!" 파격 세일 이벤트 등
                새로운 이벤트 만들기
              </button>
              <button
                type="button"
                className={question6 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion6(4)}
              >
                "요즘은 레트로 갬성이지~" 유행이 다시 돌아온 90년대 간판
                설치하기
              </button>
              <button
                type="button"
                className={question6 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion6(5)}
              >
                "음식을 파는 곳은 당연히 깨끗해야지!" 위생과 안전을 위해 세X코,
                캡X 등록하기
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[6]}>
            <div className="question_container">
              <h3 className="question">
                7. 당신은 친구에게 크리스마스 스웨터를 선물해 주기로 했습니다.
                당신의 선택은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question7 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion7(1)}
              >
                난 내 눈을 믿는다 너한테 가장 잘 어울리는 옷은 내가 알아!
              </button>
              <button
                type="button"
                className={question7 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion7(2)}
              >
                겨울옷은 따뜻해야지~ 기능 중시! 이번 겨울 최고 한파래
              </button>
              <button
                type="button"
                className={question7 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion7(3)}
              >
                두뇌 풀가동! 지금까지 친구가 입었던 니트류 옷을 알아낸다. 네가
                마음에 들어하는 옷은 이미 내 뇌 속에 있다!
              </button>
              <button
                type="button"
                className={question7 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion7(4)}
              >
                알러지가 생길 수 있으니 꼼꼼하게 성분 표시를 읽고 알러지 프리
                제품을 사줘야지!
              </button>
              <button
                type="button"
                className={question7 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion7(5)}
              >
                잊지 못할 재미있는 선물을 줘야지! 반짝이는 전구 달린 어글리
                스웨터
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[7]}>
            <div className="question_container">
              <h3 className="question">
                8. 당신은 음료 회사의 잘나가는 직원으로, 사장님이 당신에게
                신메뉴 개발을 일임하겠다고 합니다. 당신의 음료 개발 방법은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question8 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion8(1)}
              >
                손님들의 눈길을 확 끌어보자! 요즘 유행하는 화려한 디자인으로
                포장한 음료!
              </button>
              <button
                type="button"
                className={question8 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion8(2)}
              >
                고객신뢰가 최우선! 프랜차이즈 매장마다 레시피가 다르면 안 되니까
                정확한 용량과 제조법은 필수!
              </button>
              <button
                type="button"
                className={question8 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion8(3)}
              >
                인기 많은 음료 싹 가지고 와! 왜 인기가 있었는지, 인기 요인을
                찾아보자!
              </button>
              <button
                type="button"
                className={question8 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion8(4)}
              >
                요즘은 홍보로 반은 먹고 들어가지! SNS 첼린지 이벤트로 사람들의
                관심을 끌자!
              </button>
              <button
                type="button"
                className={question8 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion8(5)}
              >
                레시피를 만드는 것도 중요하지만, 우리만의 독자적인 레시피가
                새어나가지 않게 조심해야 해!
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[8]}>
            <div className="question_container">
              <h3 className="question">
                9. 당신은 바다에 놀러왔습니다. 성공적인 여행을 위해 가장 먼저
                해야할 것은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question9 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion9(1)}
              >
                일단 파라솔이랑 음식 세팅! 사진 잘 찍어서 SNS에 여행 온 거
                자랑해야지!
              </button>
              <button
                type="button"
                className={question9 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion9(2)}
              >
                여행 왔는데 짐을 잃어버리면 낭패지! 락커룸이 어디 있는지
                찾아보자!
              </button>
              <button
                type="button"
                className={question9 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion9(3)}
              >
                준비물은 다 챙겨왔지? 빠뜨린 거 없는지 다시 확인하자!
              </button>
              <button
                type="button"
                className={question9 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion9(4)}
              >
                이왕 온 거 유명한 건 다 해 봐야지! 근처에 어떤 맛집이 있는지
                알아보자!
              </button>
              <button
                type="button"
                className={question9 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion9(5)}
              >
                그냥 노는 건 재미없잖아? 비치볼 게임 하면서 놀자!
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" type="button" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[9]}>
            <div className="question_container">
              <h3 className="question">
                10. 당신은 친구의 집들이에 가려고 합니다. 당신이 선택한 선물은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question10 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion10(1)}
              >
                집 꾸미기에 도움이 되는 예쁜 인테리어 소품을 골라볼까?
              </button>
              <button
                type="button"
                className={question10 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion10(2)}
              >
                실용성이 갑이지! 화장지랑 수건 세트랑...
              </button>
              <button
                type="button"
                className={question10 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion10(3)}
              >
                음... 우선 센스있는 집들이 선물 먼저 검색해봐야지!
              </button>
              <button
                type="button"
                className={question10 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion10(4)}
              >
                집들이 가서 뭐하겠어! 보드 게임이나 사 가자!
              </button>
              <button
                type="button"
                className={question10 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion10(5)}
              >
                역시 집은 안전이 최고!! 현관문 보안장치 사줘야겠다.
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button className="prev_btn" type="button" onClick={goToPrev}>
                이 전
              </button>
              <button className="submit_btn">제 출</button>
            </div>
          </div>

          {/* 
          <div className="test" ref={refs[3]}>
            <button className="prev_btn" onClick={goToPrev}>
              이 전
            </button>
            <input type="su
            bmit" value="제 출" className="submit_btn" />
          </div> */}
        </form>
      </div>
    </div>
  );
}
export default TestPage2;
