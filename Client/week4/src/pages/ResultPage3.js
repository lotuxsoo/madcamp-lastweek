import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { shareKakao } from "./shareKakaoLink";
import kakaoLogo from "../assets/kakaoLogo.PNG";
import "../css/result_form.css";
import couple from "../assets/couple.jpeg";

const ResultPage3 = () => {
  const { globalState } = useGlobalState();
  console.log("global: ", globalState);

  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    return () => {
      document.body.style.backgroundColor = null; // cleanup function to reset
    };
  }, []);

  const [message, percentage] = globalState.message.split(":");
  const percentageString = globalState.message.split(":")[1].trim();
  const percentageValue = Number(percentageString.replace("%", ""));

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#0D0D0D",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "white",
          textAlign: "right",
        }}
      >
        <button
          style={{
            backgroundColor: "#0D0D0D",
            width: "60px",
            height: "50px",
            border: "none",
            marginRight: "10px",
          }}
          onClick={() =>
            shareKakao("http://localhost:3000/result", "소개팅 테스트")
          }
        >
          <img
            className="w-12 h-12"
            style={{ width: "100%", height: "100%" }}
            src={kakaoLogo}
            alt={"Kakao Logo"}
          />
        </button>
      </div>

      <span style={{ color: "white", fontFamily: "Arial", fontSize: 50 }}>
        {message}:
      </span>
      <span style={{ color: "red", fontFamily: "Arial", fontSize: 70 }}>
        {percentage}
      </span>

      {percentageValue <= 50 && (
        <iframe
          style={{ marginTop: "100px" }}
          width="1200"
          height="700"
          src="https://www.youtube.com/embed/vsJGZOnMVt0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {percentageValue > 50 && (
        <div
          style={{
            position: "relative",
            backgroundColor: "#0D0D0D",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img
            style={{ marginTop: "100px", marginBottom: "100px" }}
            src={couple}
            alt="img"
          />
        </div>
      )}
    </div>
  );
};

export default ResultPage3;
