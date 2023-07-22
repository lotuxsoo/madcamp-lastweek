import React from "react";
import "../css/form.css";
import "../css/reset.css";
import "../css/result.css";
import "../css/style.css";

function TestPage2() {
  return (
    <section id="survey">
      <div className="wrapper">
        <form id="form" action="/submit/" method="post">
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            value="a3Np13S61gdwUtBoimms9BhSFLK6InNFKnOKXRFBzLZGouatjuH3kBk1e64bEXE1"
          />
          <div className="test">
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TestPage2;
