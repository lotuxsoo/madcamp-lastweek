import React, { useState, createRef, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test2_form.css";

function TestPage2() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);

  const refs = [createRef(), createRef(), createRef(), createRef()];

  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");

  const getInputValue = () => {
    const inputValue1 = refs[0].current.value;
    const inputValue2 = refs[1].current.value;
    const inputValue3 = refs[2].current.value;
    console.log(`Input 1 value: ${inputValue1}`);
    console.log(`Input 2 value: ${inputValue2}`);
    console.log(`Input 3 value: ${inputValue3}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getInputValue();
  };

  const goToNext = () => {
    setShowNextTest(showNextTest + 1); // increase the state by 1 when next button is clicked
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
              <input
                type="radio"
                name="question1"
                id="choice1-1"
                value="1"
                required=""
                onChange={(e) => setQuestion1(e.target.value)}
              />
              <label for="choice-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question1"
                id="choice1-2"
                value="2"
                required=""
                onChange={(e) => setQuestion1(e.target.value)}
              />
              <label for="choice-2">
                2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                Network, Ubuntu, CentOS, 부하분산, etc)
              </label>
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
              <h3 className="question">당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="question2"
                id="choice2-1"
                value="1"
                required=""
                onChange={(e) => setQuestion2(e.target.value)}
              />
              <label for="choice-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question2"
                id="choice2-2"
                value="2"
                required=""
                onChange={(e) => setQuestion2(e.target.value)}
              />
              <label for="choice-2">
                2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                Network, Ubuntu, CentOS, 부하분산, etc)
              </label>
            </div>

            <div className="btn_two">
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
              <button className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
            </div>
          </div>
          <div className="test" ref={refs[2]}>
            <div className="question_container">
              <h3 className="number">3/10</h3>
              <h3 className="question">당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="question3"
                id="choice3-1"
                value="1"
                required=""
                onChange={(e) => setQuestion3(e.target.value)}
              />
              <label for="choice-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question3"
                id="choice3-2"
                value="2"
                required=""
                onChange={(e) => setQuestion3(e.target.value)}
              />
              <label for="choice-2">
                2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                Network, Ubuntu, CentOS, 부하분산, etc)
              </label>
            </div>
            <div className="btn_two">
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
              <button className="prev_btn" onClick={goToPrev}>
                이 전
              </button>
            </div>
          </div>
          {/* 
          <div className="test" ref={refs[3]}>
            <button className="prev_btn" onClick={goToPrev}>
              이 전
            </button>
            <input type="submit" value="제 출" className="submit_btn" />
          </div> */}
        </form>
      </div>
    </div>
  );
}
export default TestPage2;
