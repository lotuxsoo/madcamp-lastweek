import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test1_form.css";
import question1Img from "../assets/test1-1-male.PNG";
import question2Img from "../assets/test1-2-male.PNG";
import question3Img from "../assets/test1-3-male.png";
import question4Img from "../assets/test1-4-male.PNG";
import question5Img from "../assets/test1-5-male.PNG";
import question6Img from "../assets/test1-6-male.PNG";
import question7Img from "../assets/test1-7-male.PNG";
import question8Img from "../assets/test1-8-male.PNG";
function TestPage1() {
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
  ];

  const getInputValue = () => {
    const inputValue1 = question1;
    const inputValue2 = question2;
    const inputValue3 = question3;
    const inputValue4 = question4;
    const inputValue5 = question5;
    const inputValue6 = question6;
    const inputValue7 = question7;
    const inputValue8 = question8;

    console.log(`Input 1 value: ${inputValue1}`);
    console.log(`Input 2 value: ${inputValue2}`);
    console.log(`Input 3 value: ${inputValue3}`);
    console.log(`Input 4 value: ${inputValue4}`);
    console.log(`Input 5 value: ${inputValue5}`);
    console.log(`Input 6 value: ${inputValue6}`);
    console.log(`Input 7 value: ${inputValue7}`);
    console.log(`Input 8 value: ${inputValue8}`);
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

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");
  const [question7, setQuestion7] = useState("");
  const [question8, setQuestion8] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentQuestionState = eval("question" + (showNextTest + 1));
    if (currentQuestionState === "") {
      alert("정답을 선택해주세요");
    } else {
      getInputValue();
      navigate("/coupang");
    }
  };

  useEffect(() => {
    if (showNextTest < refs.length) {
      refs[showNextTest].current.scrollIntoView({ behavior: "smooth" }); // This will scroll to the next test
    }
  }, [showNextTest]);

  return (
    <div className="testPage1">
      <div className="survey">
        <form id="form" onSubmit={handleSubmit}>
          <div className="test" ref={refs[0]}>
            <div className="question_container">
              <h3 className="number">1. 다음 상황에서 가장 적절한 말은?</h3>
              <img className="question_img" src={question1Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question1 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion1(1)}
              >
                아니에요! 다음에 만나면 말 놔요 ㅋㅋ
              </button>
              <button
                type="button"
                className={question1 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion1(2)}
              >
                그래 ㅋㅋ 언제 시간 괜찮아?
              </button>
              <button
                type="button"
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                네 그럴게요 ㅎㅎ 일정은 언제가 좋으세요?
              </button>
            </div>
            <div className="btn_wrap">
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>
          <div className="test" ref={refs[1]}>
            <div className="question_container">
              <h3 className="number">
                2. 다음 중 소개팅 만남 장소로 가장 적절한 것은?
              </h3>
              <img className="question_img" src={question2Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question2 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion2(1)}
              >
                정겨운 분위기의 삼겹살집
              </button>
              <button
                type="button"
                className={question2 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion2(2)}
              >
                정갈한 한 상의 한정식집
              </button>
              <button
                type="button"
                className={question2 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion2(3)}
              >
                대기는 있지만, 맛이 보장된 유명 맛집
              </button>
              <button
                type="button"
                className={question2 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion2(4)}
              >
                가격이 매우 비싼 고급 레스토랑
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>
          <div className="test" ref={refs[2]}>
            <div className="question_container">
              <h3 className="number">
                3. 처음으로 그녀에게 건낼 말로 가장 적절한 것은?
              </h3>
              <img className="question_img" src={question3Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question3 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion3(1)}
              >
                사진보다 실물이 더 이쁘시네요.
              </button>
              <button
                type="button"
                className={question3 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion3(2)}
              >
                얘기 많이 들었어요. 반가워요.
              </button>
              <button
                type="button"
                className={question3 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion3(3)}
              >
                어색한데 소주나 한잔 할까요?
              </button>
              <button
                type="button"
                className={question3 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion3(4)}
              >
                날씨 더운데 오시느라 힘들지 않으셨어요?
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[3]}>
            <div className="question_container">
              <h3 className="number">
                4. 다음 대화에서 여자의 말의 의미와 가장 가까운 것은?
              </h3>
              <img className="question_img" src={question4Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question4 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion4(1)}
              >
                술이 땡긴다.
              </button>
              <button
                type="button"
                className={question4 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion4(2)}
              >
                분위기가 어색하다.
              </button>
              <button
                type="button"
                className={question4 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion4(3)}
              >
                당신이 마음에 든다.
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[4]}>
            <div className="question_container">
              <h3 className="number">
                5. 여자의 칭찬에 대한 반응으로 가장 적절한 것은?
              </h3>
              <img className="question_img" src={question5Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question5 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion5(1)}
              >
                네 알아요~
              </button>
              <button
                type="button"
                className={question5 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion5(2)}
              >
                감사합니다. 그쪽은 제 이상형이에요.
              </button>
              <button
                type="button"
                className={question5 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion5(3)}
              >
                그쪽도 인상이 굉장히 좋으시네요!
              </button>
              <button
                type="button"
                className={question5 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion5(4)}
              >
                그런 말 처음 들어요..!
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[5]}>
            <div className="question_container">
              <h3 className="number">
                6. 아래 질문에 대한 대답으로 가장 올바른 것은?
              </h3>
              <img className="question_img" src={question6Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question6 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion6(1)}
              >
                좋아해요~ 최근에 어떤 영화 보셨어요?
              </button>
              <button
                type="button"
                className={question6 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion6(2)}
              >
                아니요. 저는 공연을 더 좋아해요.
              </button>
              <button
                type="button"
                className={question6 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion6(3)}
              >
                영화 싫어하는 사람도 있어요?
              </button>
              <button
                type="button"
                className={question6 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion6(4)}
              >
                그럼요~ 지난주에 개봉한 그 영화 봤어요?
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[6]}>
            <div className="question_container">
              <h3 className="number">
                7. 대화가 끊겼을 때 대처방안으로 그나마 적절한 것은?
              </h3>
              <img className="question_img" src={question7Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question7 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion7(1)}
              >
                눈을 지긋이 바라본다.
              </button>
              <button
                type="button"
                className={question7 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion7(2)}
              >
                연애 스타일에 대해 질문한다.
              </button>
              <button
                type="button"
                className={question7 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion7(3)}
              >
                상대가 말할 때까지 기다린다.
              </button>
              <button
                type="button"
                className={question7 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion7(4)}
              >
                "이제 슬슬 일어날까요?"라 말한다.
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button type="button" className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[7]}>
            <div className="question_container">
              <h3 className="number">
                8. 다음 중 소개팅 매너가 가장 아닌 것은?
              </h3>
              <img className="question_img" src={question8Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question8 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion8(1)}
              >
                상대가 앉을 의자를 손수건으로 닦아준다.
              </button>
              <button
                type="button"
                className={question8 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion8(2)}
              >
                너무 사적인 질문은 하지 않는다.
              </button>
              <button
                type="button"
                className={question8 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion8(3)}
              >
                박력있게 메뉴 선택을 리드한다.
              </button>
              <button
                type="button"
                className={question8 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion8(4)}
              >
                상대의 얼굴에 소스가 묻으면, 닦아준다.
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button className="submit_btn">제 출</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TestPage1;
