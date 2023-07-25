import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test4_form.css";
import question1Img from "../assets/test4-1.png";
import question2Img from "../assets/test4-2.png";
import question3Img from "../assets/test4-3.png";
import question4Img from "../assets/test4-4.png";
import question5Img from "../assets/test4-5.png";
import question6Img from "../assets/test4-6.png";
import question7Img from "../assets/test4-7.png";
import question8Img from "../assets/test4-8.png";
import { useGlobalState } from './GlobalStateProvider';
function TestPage4() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);
  const refs = [createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef(), createRef()];
  const { globalState, setGlobalState } = useGlobalState();

  const sendToDjango = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/test4/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
  
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error('Failed to send data:', error);
    }
  };
  
  const getInputValue = async () => {
    const data = {
      inputValue1: question1,
      inputValue2: question2,
      inputValue3: question3,
      inputValue4: question4,
      inputValue5: question5,
      inputValue6: question6,
      inputValue7: question7,
      inputValue8: question8,
    };

    console.log('Sending data:', data);

    const response = await sendToDjango(data);
    setGlobalState(response);
    console.log('Response from server:', response);
};
  const goToNext = () => {
    
    const currentQuestionState = eval('question' + (showNextTest + 1));
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
     
    const currentQuestionState = eval('question' + (showNextTest + 1));
    if (currentQuestionState === "") {
      alert("정답을 선택해주세요");
    }
    else{
      getInputValue();
    navigate('/coupang4');
    }
  };

  useEffect(() => {
    if (showNextTest < refs.length) {
      refs[showNextTest].current.scrollIntoView({ behavior: "smooth" }); // This will scroll to the next test
    }
  }, [showNextTest]);

  return (
    <div className="testPage4">
      <div className="survey">
        <form id="form" onSubmit={handleSubmit}>
          <div className="test" ref={refs[0]}>
            <div className="question_container">
              <h3 className="number">1. 저기요 홍대가려면 어떻게 가야해요?</h3>
              <img className="question_img" src={question1Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question1 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion1(1)}
              >
                아이브의 키치요
              </button>
              <button
                type="button"
                className={question1 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion1(2)}
              >
                뉴진스의 하입보이요
              </button>
              <button
                type="button"
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                뉴진스의 디토요
              </button>
              <button
                type="button"
                className={question1 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion1(4)}
              >
                아이들의 퀸카요
              </button>
              <button
                type="button"
                className={question1 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion1(5)}
              >
                뉴진스의 슈퍼사이요
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
              <h3 className="number">2. 다음 드라마 장면에서 나올 대사는?</h3>
              <img className="question_img" src={question2Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question2 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion2(1)}
              >
                와우~ 멋지다 연준아!
              </button>
              <button
                type="button"
                className={question2 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion2(2)}
              >
                브라보~ 멋지다 연준아!
              </button>
              <button
                type="button"
                className={question2 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion2(3)}
              >
                브라보~ 마이 라이프 나의 인생아~
              </button>
              <button
                type="button"
                className={question2 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion2(4)}
              >
                브라보~ 멋지다 연진아!
              </button>
              <button
                type="button"
                className={question2 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion2(5)}
              >
                브라보 맛있다~
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
              <h3 className="number">3. 다음 가수가 외칠 말은?</h3>
              <img className="question_img" src={question3Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question3 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion3(1)}
              >
                제 콘서트 와주셔서 감사해요
              </button>
              <button
                type="button"
                className={question3 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion3(2)}
              >
                저 오늘 겨드랑이 밀었어요요
              </button>
              <button
                type="button"
                className={question3 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion3(3)}
              >
                여러분~ 너무 보고싶었어요~
              </button>
              <button
                type="button"
                className={question3 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion3(4)}
              >
                민효린 화이팅!
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
              <h3 className="number">4. 다음 나올 대사는?</h3>
              <img className="question_img" src={question4Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question4 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion4(1)}
              >
                야 너 F야?
              </button>
              <button
                type="button"
                className={question4 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion4(2)}
              >
                야 T발 너 C야?
              </button>
              <button
                type="button"
                className={question4 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion4(3)}
              >
                나 프리틴데 너 큐티야?
              </button>
              <button
                type="button"
                className={question4 === 3 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion4(4)}
              >
                나 아이브로우 잘됐냐?
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
              <h3 className="number">5. 그녀의 이상형이 아닌것은?</h3>
              <img className="question_img" src={question5Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question5 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion5(1)}
              >
                돈 많은 사람
              </button>
              <button
                type="button"
                className={question5 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion5(2)}
              >
                차 있는 사람
              </button>
              <button
                type="button"
                className={question5 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion5(3)}
              >
                집 좋은 곳인 사람
              </button>
              <button
                type="button"
                className={question5 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion5(4)}
              >
                운전 잘하는 사람
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
              <h3 className="number">6. 인물이름과 대사가 올바른 것은?</h3>
              <img className="question_img" src={question6Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question6 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion6(1)}
              >
                다나카 - 오이시쿠나레 모야모야뀽
              </button>
              <button
                type="button"
                className={question6 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion6(2)}
              >
                다나카 - 오이시쿠나레 모에모에큥
              </button>
              <button
                type="button"
                className={question6 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion6(3)}
              >
                김경욱 - 대츠 베리 핫!
              </button>
              <button
                type="button"
                className={question6 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion6(4)}
              >
                왕간다 - 나 비싸~
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
              <h3 className="number">7. 최근 방영하고 있는 하트시그널4의 장면중 하나이다. 다음 중 인물의 대사에 알맞은 것은?</h3>
              <img className="question_img" src={question7Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question7 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion7(1)}
              >
                내일 봬요 누나
              </button>
              <button
                type="button"
                className={question7 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion7(2)}
              >
                내게와 영주
              </button>
              <button
                type="button"
                className={question7 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion7(3)}
              >
                연하 어떄?
              </button>
              <button
                type="button"
                className={question7 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion7(4)}
              >
                손 어는 것도 추억이지~
              </button>
              <button
                type="button"
                className={question7 === 5 ? "selected" : ""}
                value="5"
                onClick={() => setQuestion7(5)}
              >
                평소에? 아니면 오늘?
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
              <h3 className="number">8. 다음 직원의 대사로 적절한 것은?</h3>
              <img className="question_img" src={question8Img} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question8 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion8(1)}
              >
                이걸 끼고 해야 능률이 올라갑니다.
              </button>
              <button
                type="button"
                className={question8 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion8(2)}
              >
                연하 어때?
              </button>
              <button
                type="button"
                className={question8 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion8(3)}
              >
                영차 좋았어~
              </button>
              <button
                type="button"
                className={question8 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion8(4)}
              >
                에어팟 껴도 되나요?
              </button>
            </div>
            <div
              className="btn_wrap"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <button type="button" className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
              <button   className="submit_btn"  >제 출</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TestPage4;
