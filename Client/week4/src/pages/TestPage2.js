import React, { useEffect, useState, useRef } from "react";
import "../css/form.css";
import "../css/reset.css";
import "../css/result.css";
import "../css/style.css";

function TestPage2() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const testRefs = useRef([]);

  const scrollToTest = (index) => {
    if (testRefs.current[index]) {
      testRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextButtonClick = () => {
    const currentTestIndex = testRefs.current.findIndex((ref) =>
      ref.classList.contains("current")
    );
    if (currentTestIndex >= 0) {
      scrollToTest(currentTestIndex + 1);
    }
  };

  const handlePrevButtonClick = () => {
    const currentTestIndex = testRefs.current.findIndex((ref) =>
      ref.classList.contains("current")
    );
    if (currentTestIndex > 0) {
      scrollToTest(currentTestIndex - 1);
    }
  };

  return (
    <section id="survey">
      <div className="wrapper">
        <form id="form" action="/submit/" method="post">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="a3Np13S61gdwUtBoimms9BhSFLK6InNFKnOKXRFBzLZGouatjuH3kBk1e64bEXE1"
          />
          <div
            className="test current"
            ref={(el) => (testRefs.current[0] = el)}
          >
            <div className="question_container">
              <h3 className="number">1/10</h3>
              <h3 className="question">당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-1"
                  value="5"
                  required
                />
                <label htmlFor="choice-1">
                  1. 게임 개발(유니티, 언리얼, Pygame)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-2"
                  value="1"
                  required=""
                />
                <label for="choice-2">
                  2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                  Network, Ubuntu, CentOS, 부하분산, etc)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-3"
                  value="4"
                  required=""
                />
                <label for="choice-3">3. 정보보안(해킹과 방어)</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-4"
                  value="2"
                  required=""
                />
                <label for="choice-4">
                  4. 프론트엔드(HTML, CSS, Javascript, etc)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-5"
                  value="3"
                  required=""
                />
                <label for="choice-5">
                  5. 데이터 분석과 인공지능(전처리, 분석, 시각화, 머신러닝,
                  딥러닝)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-1"
                  id="choice-6"
                  value=""
                  required=""
                />
                <label for="choice-6">
                  6. 이 길은 내 길이 아닌 것 같다... 고로 재미있는지 모르겠다.
                </label>
              </div>
            </div>
            <div className="btn_wrap">
              <button className="next_btn" onClick={handleNextButtonClick}>
                다 음
              </button>
            </div>
          </div>

          <div className="test" ref={(el) => (testRefs.current[1] = el)}>
            <div className="question_container">
              <h3 className="number">2/10</h3>
              <h3 className="question">당신이 가장 재밌었던 수업은?</h3>
            </div>
            <div className="answer">
              <div>
                <input
                  type="radio"
                  name="question-2"
                  id="choice-7"
                  value="3"
                  required
                />
                <label htmlFor="choice-7">
                  1. 게임 개발(유니티, 언리얼, Pygame)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-2"
                  id="choice-8"
                  value="2"
                  required=""
                />
                <label for="choice-8">
                  2. 백엔드 또는 인프라(C계열-닷넷, JAVA-Spring, Python-Django,
                  Network, Ubuntu, CentOS, 부하분산, etc)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-2"
                  id="choice-9"
                  value="5"
                  required=""
                />
                <label for="choice-9">3. 정보보안(해킹과 방어)</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="question-2"
                  id="choice-10"
                  value="1"
                  required=""
                />
                <label for="choice-10">
                  4. 프론트엔드(HTML, CSS, Javascript, etc)
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="question-2"
                  id="choice-11"
                  value="4"
                  required=""
                />
                <label for="choice-11">
                  5. 데이터 분석과 인공지능(전처리, 분석, 시각화, 머신러닝,
                  딥러닝)
                </label>
              </div>
            </div>
            <div className="btn_wrap btn_sort">
              <button className="prev_btn" onClick={handlePrevButtonClick}>
                이 전
              </button>
              <button className="next_btn" onClick={handleNextButtonClick}>
                다 음
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
export default TestPage2;
