import React, { useEffect } from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { shareKakao } from "./shareKakaoLink";
import resultImg1 from "../assets/result1.PNG";
import resultImg2 from "../assets/result2.PNG";
import resultImg3 from "../assets/result3.PNG";
import kakaoLogo from "../assets/kakaoLogo.PNG";

const ResultPage = () => {
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
        backgroundColor: "#ba93e1",
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
              backgroundColor: "#ba93e1",
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
            color: "red",
            fontFamily: "NEXON Lv1 Gothic OTF",
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          {percentage}
        </span>
      </div>


      {percentageValue <= 50 && (
        <div
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "#ba93e1",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        
        }}
      >
        <iframe
          
          width="1000px"
          height="500px"
          src="https://www.youtube.com/embed/vsJGZOnMVt0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      )}

      {percentageValue > 50 && (
        <div
          style={{
            position: "relative",
            backgroundColor: "#ba93e1",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "50px",
          }}
        >
          <img style={{ marginTop: "100px" }} src={resultImg1} alt="img" />
          <img style={{ marginTop: "100px" }} src={resultImg2} alt="img" />
          <img
            style={{ marginTop: "100px", marginBottom: "100px" }}
            src={resultImg3}
            alt="img"
          />
        </div>
      )}
    </div>
  );
};

export default ResultPage;
