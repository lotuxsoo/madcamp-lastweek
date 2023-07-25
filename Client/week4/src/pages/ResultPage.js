import React, {useEffect} from "react";
import { useGlobalState } from './GlobalStateProvider';
import { shareKakao } from './shareKakaoLink';


const ResultPage = () => {
  const { globalState } = useGlobalState(); 

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
    <div style={{ backgroundColor: '#0D0D0D', height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <p style={{ color: 'white', fontFamily: 'Arial', fontSize: 100}}>{globalState.message}</p>
      <button onClick={() => shareKakao('http://localhost:3000/result', '소개팅 테스트')}>
  <img className="w-12 h-12" src={`${process.env.PUBLIC_URL}/assets/KakaoLogo.png`} alt={"Kakao Logo"} />
</button>
      {percentageValue <= 50 && (
        <iframe 
          width="1200" 
          height="700" 
          src="https://www.youtube.com/embed/vsJGZOnMVt0" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      )}
      {percentageValue > 50 && percentageValue <80 &&(
        <p>조금만 더 센스를 길러보아요!</p>
      )}
      {percentageValue >= 80 && (
        <p>소개팅 성공확률이 높으시네요! 당장 여소를 받아보세요!</p>
      )}
    </div>
  );
};

export default ResultPage;
