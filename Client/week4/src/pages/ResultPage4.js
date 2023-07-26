import React, { useEffect } from "react";
import { useGlobalState } from './GlobalStateProvider';
import { shareKakao } from './shareKakaoLink';
import resultImg1 from "../assets/result4-1.png";
import resultImg2 from "../assets/result4-2.png";
import resultImg3 from "../assets/result4-3.png";
import resultImg4 from "../assets/result4-4.png";
import resultImg5 from "../assets/result4-5.png";
import kakaoLogo from "../assets/kakaoLogo.PNG";
import "../css/test1_form.css";


const ResultPage4 = () => {
  const { globalState } = useGlobalState();
  const { message } = globalState; // Here we destructure the correct_count value from the globalState
  const correct_count = Number(message);

  useEffect(() => {
    document.body.style.backgroundColor = '#0D0D0D';
    return () => {
      document.body.style.backgroundColor = null; // cleanup function to reset
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div style={{ position: 'relative', backgroundColor: '#ffffff', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ position: 'absolute', top: '10px', right: '10px', color: 'white', textAlign: 'right' }}>
        <button style={{ backgroundColor: '#ffffff', width: '60px', height: '50px', border: 'none', marginRight: '10px' }} onClick={() => shareKakao('http://localhost:3000/result', '밈 테스트')}>
          <img className="w-12 h-12" style={{ width: '100%', height: '100%' }} src={kakaoLogo} alt={"Kakao Logo"} />
        </button>
      </div>
      <span style={{  fontFamily: 'Arial', fontSize: 50 }}>밈테스트 결과</span>
      <span style={{  fontFamily: 'Arial', fontSize: 50 }}>당신은</span>
      {correct_count <= 1 && (
        <div>
          <img style={{  width: '1000px' }} src={resultImg1} alt="img" />
        </div>
      )}
      {correct_count > 1 && correct_count <= 3 && (
        <div >
          <img style={{  width: '1000px' }} src={resultImg2} alt="img" />
        </div>
      )}
      {correct_count > 3 && correct_count <= 5 && (
        <div >
          <img style={{  width: '1000px' }} src={resultImg3} alt="img" />
        </div>
      )}
      {correct_count > 5 && correct_count <= 7 && (
        <div >
          <img style={{  width: '1000px' }} src={resultImg4} alt="img" />
        </div>
      )}
      {correct_count > 7 && (
        <div >
          <img style={{ width: '1000px' }} src={resultImg5} alt="img" />
        </div>
      )}

    </div>
  );
};

export default ResultPage4;
