import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test3_form.css";
import img1 from "../assets/test3_1.png";
import img2 from "../assets/test3_2.png";
import img3 from "../assets/test3_3.png";
import img4 from "../assets/test3_4.png";

import { useGlobalState } from "./GlobalStateProvider";

function TestPage3() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);

  const refs = [
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

  const getInputValue = async () => {
    const data = {
      inputValue1: question1,
      inputValue2: question2,
      inputValue3: question3,
      inputValue4: question4,
      inputValue5: question5,
      inputValue6: question6,
    };

    console.log("Sending data:", data);

    const response = await sendToDjango(data);
    setGlobalState(response);
    console.log("Response from server:", response);
  };

  const { globalState, setGlobalState } = useGlobalState();

  const sendToDjango = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/test1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      console.error("Failed to send data:", error);
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
    <div className="testPage3">
      <div className="survey">
        <form id="form" onSubmit={handleSubmit}>
          <div className="test" ref={refs[0]}>
            <div className="question_container">
              <h3 className="number">
                1. 남자의 '나 이제 출발해'의 의미로 올바른 것은?
              </h3>
              <img className="question_img" src={img1} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question1 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion1(1)}
              >
                지금 출발한다.
              </button>
              <button
                type="button"
                className={question1 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion1(2)}
              >
                곧 도착한다.
              </button>
              <button
                type="button"
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                이제 씻으려고 한다.
              </button>
              <button
                type="button"
                className={question1 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion1(3)}
              >
                오늘 약속을 미루고 싶다.
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
                2. 다음 남자의 카톡의 의미와 가장 가까운 것은?
              </h3>
              <img className="question_img" src={img2} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question2 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion2(1)}
              >
                그만 연락하고 게임하고 싶다.
              </button>
              <button
                type="button"
                className={question2 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion2(2)}
              >
                지금 당신이 보고싶다.
              </button>
              <button
                type="button"
                className={question2 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion2(3)}
              >
                안자고 뭐하는지 궁금하다.
              </button>
              <button
                type="button"
                className={question2 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion2(4)}
              >
                난 지금 몹시 졸리다.
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
                3. 다음 남자의 말의 진짜 의미로 가장 적절한 것은?
              </h3>
              <img className="question_img" src={img3} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question3 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion3(1)}
              >
                야비한 플레이에 당해서 분하다.
              </button>
              <button
                type="button"
                className={question3 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion3(2)}
              >
                내 실력을 칭찬해달라.
              </button>
              <button
                type="button"
                className={question3 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion3(3)}
              >
                실력이 매우 출중한 상대를 만났다.
              </button>
              <button
                type="button"
                className={question3 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion3(4)}
              >
                게임 한판 더 하고 싶다. 허락해달라.
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
                4. 다음 남자 말의 의미와 가장 가까운 것은?
              </h3>
              <img className="question_img" src={img4} alt="img" />
            </div>
            <div className="answer">
              <button
                type="button"
                className={question4 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion4(1)}
              >
                다음에 같이 먹으러 가자.
              </button>
              <button
                type="button"
                className={question4 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion4(2)}
              >
                음식이 아주 맛있다.
              </button>
              <button
                type="button"
                className={question4 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion4(3)}
              >
                당신 생각이 난다.
              </button>
              <button
                type="button"
                className={question4 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion4(4)}
              >
                누구랑 먹었는지 물어봐달라.
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
              <h3 className="number">5. 다음 남자의 말 중 사실인 것은?</h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question5 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion5(1)}
              >
                아~ 그건 내가 전문이지~
              </button>
              <button
                type="button"
                className={question5 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion5(2)}
              >
                딱 한잔만 더 하고 집에 갈게..
              </button>
              <button
                type="button"
                className={question5 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion5(3)}
              >
                미안ㅎ 뭐 좀 하느라 톡 못봤어
              </button>
              <button
                type="button"
                className={question5 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion5(4)}
              >
                나 인기 진짜 많았지ㅋㅋ
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
                6. "오빠 운.전.병 출신이야~" 남자의 말에 대한 반응으로 가장
                적절한 것은?
              </h3>
            </div>
            <div className="answer">
              <button
                type="button"
                className={question6 === 1 ? "selected" : ""}
                value="1"
                onClick={() => setQuestion6(1)}
              >
                아~..(어쩌라는 거지?)
              </button>
              <button
                type="button"
                className={question6 === 2 ? "selected" : ""}
                value="2"
                onClick={() => setQuestion6(2)}
              >
                와 정말? 오빠 진짜 멋있다!
              </button>
              <button
                type="button"
                className={question6 === 3 ? "selected" : ""}
                value="3"
                onClick={() => setQuestion6(3)}
              >
                어쩐지~ 운전 실력이 대단하더라ㅎㅎ
              </button>
              <button
                type="button"
                className={question6 === 4 ? "selected" : ""}
                value="4"
                onClick={() => setQuestion6(4)}
              >
                오 진짜? 몇 사단인데?
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
export default TestPage3;
