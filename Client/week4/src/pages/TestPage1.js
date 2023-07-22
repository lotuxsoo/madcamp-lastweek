import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test1_form.css";

function TestPage1() {
  const navigate = useNavigate();
  const [showNextTest, setShowNextTest] = useState(0);
  const refs = [createRef(), createRef(), createRef(), createRef()];
  const goToNext = () => {
    setShowNextTest(showNextTest + 1); // increase the state by 1 when next button is clicked
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
          <div
            className="test"
            ref={refs[0]}
            style={{ display: showNextTest === 0 ? "block" : "none" }}
          >
            <div className="question_container">
              <h3 className="number">1/10</h3>
              <h3 className="question">당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <input
                type="radio"
                name="question1"
                id="choice1-1"
                value="1"
                required=""
                onChange={() => setQuestion1(1)}
              />
              <label for="choice1-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question1"
                id="choice1-2"
                value="1"
                required=""
                onChange={() => setQuestion1(2)}
              />
              <label for="choice1-2">
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
          <div
            className="test"
            ref={refs[1]}
            style={{ display: showNextTest === 1 ? "block" : "none" }}
          >
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
                onChange={() => setQuestion2(1)}
              />
              <label for="choice2-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question2"
                id="choice2-2"
                value="2"
                required=""
                onChange={() => setQuestion2(2)}
              />
              <label for="choice2-2">
                2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                Network, Ubuntu, CentOS, 부하분산, etc)
              </label>
            </div>
            <div className="btn_wrap">
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
            <div className="btn_wrap btn_sort">
              <button className="prev_btn">이 전</button>
            </div>
          </div>
          <div
            className="test"
            ref={refs[2]}
            style={{ display: showNextTest === 2 ? "block" : "none" }}
          >
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
                onChange={() => setQuestion3(1)}
              />
              <label for="choice3-1">1. 게임 개발(유니티, 언리얼, Pygame)</label>
              <input
                type="radio"
                name="question3"
                id="choice3-2"
                value="2"
                required=""
                onChange={() => setQuestion3(2)}
              />
              <label for="choice3-2">
                2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                Network, Ubuntu, CentOS, 부하분산, etc)
              </label>
            </div>
            <div className="btn_wrap">
              <button className="next_btn" onClick={goToNext}>
                다 음
              </button>
            </div>
            <div className="btn_wrap btn_sort">
              <button className="prev_btn">이 전</button>
            </div>
          </div>

          <div className="btn_wrap btn_sort" ref={refs[3]}>
            <button className="prev_btn">이 전</button>
            <input type="submit" value="제 출" className="submit_btn" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default TestPage1;
