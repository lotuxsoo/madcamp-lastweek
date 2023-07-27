import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { shareKakao } from "./shareKakaoLink";
import kakaoLogo from "../assets/kakaoLogo.PNG";
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
        backgroundColor: "#f2a2a2",
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
        <div
          style={{
            margin: "30px",
          }}
        >
          <button
            style={{
              backgroundColor: "#f2a2a2",
              width: "50px",
              height: "50px",
              border: "none",
              marginRight: "40px",
            }}
            onClick={() =>
              shareKakao("http://localhost:3000/result", "소개팅 테스트")
            }
          >
            <img
              className="w-12 h-12"
              style={{ width: "50px", height: "50px" }}
              src={kakaoLogo}
              alt={"Kakao Logo"}
            />
          </button>
          <p
            style={{
              color: "black",
              fontFamily: "NEXON Lv1 Gothic OTF",
              marginTop: "10px",
            }}
          >
            카카오톡 공유하기
          </p>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <span
          style={{
            color: "white",
            fontFamily: "NEXON Lv1 Gothic OTF",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          {message}:
        </span>
        <span
          style={{
            color: "#f27999",
            fontFamily: "NEXON Lv1 Gothic OTF",
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          {percentage}
        </span>
      </div>

      {percentageValue > 50 && (
        <div
          style={{
            backgroundColor: "#f2a2a2",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "50px",
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
