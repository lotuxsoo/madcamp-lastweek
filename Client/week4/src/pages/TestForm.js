import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/test2_form.css";

function TestForm() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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

  const goToNext = () => {
    if (answers[questions[currentQuestionIndex].number] === undefined) {
      alert("정답을 선택해주세요");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers[questions[currentQuestionIndex].number] === undefined) {
      alert("정답을 선택해주세요");
    } else {
      navigate("/result2/");
    }
  };

  return (
    <div className="testPage2">
      <div className="survey">
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div
              className="test"
              key={question.number}
              style={{
                display: currentQuestionIndex === index ? "block" : "none",
              }}
            >
              <div className="question_container">
                <h3 className="question">{`${question.number}. ${question.content}`}</h3>
              </div>
              {choices
                .filter((choice) => choice.question === question.id)
                .map((choice) => (
                  <div className="answer" key={choice.id}>
                    <input
                      type="radio"
                      name={`question-${question.id}`} // use question.id instead of question.number
                      id={`choice-${choice.id}`}
                      value={choice.id}
                      onChange={(e) => handleChange(e, question.id)} // pass question.id instead of question.number
                    />
                    <label
                      htmlFor={`choice-${choice.id}`}
                    >{`${choice.content}`}</label>
                  </div>
                ))}
              <div className="btn_wrap">
                {index > 0 && (
                  <button className="prev_btn" type="button" onClick={goToPrev}>
                    이전
                  </button>
                )}
                {index < questions.length - 1 ? (
                  <button className="next_btn" type="button" onClick={goToNext}>
                    다음
                  </button>
                ) : (
                  <button className="submit_btn">제 출</button>
                )}
              </div>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default TestForm;
