import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test1_form.css";
import question1Img from "../assets/test1-1-male.PNG";
import question2Img from "../assets/test1-2-male.PNG";
import question3Img from "../assets/test1-3-male.png";

function TestPage1() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);
  const refs = [createRef(), createRef(), createRef(), createRef()];
  const goToNext = () => {
    setShowNextTest(showNextTest + 1); // increase the state by 1 when next button is clicked
  };

  const goToPrev = () => {
    if (showNextTest > 0) {
      setShowNextTest(showNextTest - 1); // decrease the state by 1 when prev button is clicked
    }
  };

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submit logic here
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
              <h3 className="number">1/10</h3>
              <img className="question_img" src={question1Img} alt="img" />
            </div>
            <div className="answer">
              <button
                className={question1 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion1(1)}
              >
                아니에요! 다음에 만나면 말 놔요 ㅋㅋ
              </button>
              <button
                className={question1 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion1(2)}
              >
                그래 ㅋㅋ 언제 시간 괜찮아?
              </button>
              <button
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                네 그럴게요 ㅎㅎ 일정은 언제가 좋으세요?
              </button>
            </div>
            <div className="btn_wrap">
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>
          <div className="test" ref={refs[1]}>
            <div className="question_container">
              <h3 className="number">2/10</h3>
              <img className="question_img" src={question2Img} alt="img" />
            </div>
            <div className="answer">
              <button
                className={question2 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion2(1)}
              >
                정겨운 분위기의 삼겹살집
              </button>
              <button
                className={question2 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion2(2)}
              >
                정갈한 한 상의 한정식집
              </button>
              <button
                className={question2 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion2(3)}
              >
                대기는 있지만, 맛이 보장된 유명 맛집
              </button>
              <button
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
              <button className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>
          <div className="test" ref={refs[2]}>
            <div className="question_container">
              <h3 className="number">3/10</h3>
              <img className="question_img" src={question3Img} alt="img" />
            </div>
            <div className="answer">
              <button
                className={question3 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion3(1)}
              >
                사진보다 실물이 더 이쁘시네요.
              </button>
              <button
                className={question3 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion3(2)}
              >
                얘기 많이 들었어요. 반가워요.
              </button>
              <button
                className={question3 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion3(3)}
              >
                어색한데 소주나 한잔 할까요?
              </button>
              <button
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
              <button className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={refs[3]}>
            <button className="prev_btn" onClick={goToPrev}>
              이 전
            </button>
            <input type="submit" value="제 출" className="submit_btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default TestPage1;
