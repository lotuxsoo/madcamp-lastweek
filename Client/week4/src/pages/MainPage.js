import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.css";

const MainPage = () => {
  const navigate = useNavigate();
  const [chars, setChars] = useState([]);
  const text = "What's Your Type?";
  const [visibleText, setVisibleText] = useState("");
  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    let i = 0;
    const intervalId = setInterval(() => {
      if (i < text.length) {
        setVisibleText(text.substr(0, i+1));
        i++;
      } else {
        setVisibleText("");
        i = 0;
      }
    }, 200); // adjust the delay here

    return () => {
      document.body.style.backgroundColor = null;
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    const text = "What's Your Type?";
    setChars(text.split(""));

    return () => {
      document.body.style.backgroundColor = null; // cleanup function to reset
    };
  }, []);
  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    return () => {
      document.body.style.backgroundColor = null; // cleanup function to reset
    };
  }, []);
  const goTo1 = () => {
    navigate("/test1"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  const goTo2 = () => {
    navigate("/test2"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  const goTo3 = () => {
    navigate("/test3"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  const goTo4 = () => {
    navigate("/test4"); // '/next-path'를 원하는 경로로 변경하세요.
  };

  return (
    <div
      className="main"
      style={{
        backgroundColor: "#0D0D0D",
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ height: '100px', marginBottom: '50px' }}> {/* adjust the height as needed */}
        <h1 className="main-title">
          {visibleText}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        <button
          className="test1_button"
          style={{ marginRight: "20px" }}
          type="button"
          onClick={goTo1}
        >
          소개팅 유형 테스트
        </button>
        <button className="test2_button" type="button" onClick={goTo2}>
          개발자 유형 테스트
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <button
          className="test3_button"
          style={{ marginRight: "20px" }}
          type="button"
          onClick={goTo3}
        >
          연애 언어능력 테스트

        </button>
        <button className="test4_button" type="button" onClick={goTo4}>
          밈 테스트
        </button>
      </div>
    </div>
  );
};

export default MainPage;
