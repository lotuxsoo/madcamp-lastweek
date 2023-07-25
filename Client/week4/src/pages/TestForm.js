import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test2_form.css";

function TestForm() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showNextTest, setShowNextTest] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8000/questions/")
      .then((response) => response.json())
      .then((data) => setQuestions(data));

    fetch("http://localhost:8000/choices/")
      .then((response) => response.json())
      .then((data) => setChoices(data));
  }, []);

  const handleChange = (e, questionNumber) => {
    setAnswers({
      ...answers,
      [questionNumber]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(answers);
    // navigate("/result2/");
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

  return (
    <div className="testPage2">
      <div className="survey">
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div className="test">
              <div className="question_container" key={question.number}>
                <h3 className="question">{`${question.number}. ${question.content}`}</h3>
              </div>
              {choices
                .filter((choice) => choice.question === question.id)
                .map((choice) => (
                  <div className="answer" key={choice.id}>
                    <input
                      type="radio"
                      name={`question-${question.number}`}
                      id={`choice-${choice.id}`}
                      value={choice.developer}
                      onChange={(e) => handleChange(e, question.number)}
                    />
                    <label
                      htmlFor={`choice-${choice.id}`}
                    >{`${choice.content}`}</label>
                  </div>
                ))}
              <hr />

              {showNextTest === index && (
                <div className="btn_wrap">
                  {index === 0 && (
                    <button
                      className="next_btn"
                      type="button"
                      onClick={goToNext}
                    >
                      다음
                    </button>
                  )}

                  {index > 0 && index < questions.length - 1 && (
                    <div
                      className="btn_wrap"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className="prev_btn"
                        type="button"
                        onClick={goToPrev}
                      >
                        이전
                      </button>
                      <button
                        className="next_btn"
                        type="button"
                        onClick={goToNext}
                      >
                        다음
                      </button>
                    </div>
                  )}

                  {index === questions.length - 1 && (
                    <div
                      className="btn_wrap"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className="prev_btn"
                        type="button"
                        onClick={goToPrev}
                      >
                        이전
                      </button>
                      <input type="submit" value="제출하기" />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          {/* <input type="submit" value="제출하기" /> */}
        </form>
      </div>
    </div>
  );
}
export default TestForm;
