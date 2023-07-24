import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/CoupangPage.css';  // assuming you have a CSS file named CoupangPage.css in the same folder

const CoupangPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.open('https://link.coupang.com/a/4NDwH', '_blank');
    navigate('/result');
  };

  const loadCoupangScript = () => {
    const coupangContainer = document.getElementById('coupang-container');
    coupangContainer.innerHTML = '';  // clear the container

    const s = document.createElement('script');
    s.src = "https://ads-partners.coupang.com/g.js";
    s.onload = function () {
      new window.PartnersCoupang.G({
        "id": 687494,
        "trackingCode": "AF9005125",
        "subId": null,
        "template": "carousel",
        "width": "680",
        "height": "140"
      });
    };
    coupangContainer.appendChild(s);
  };

  useEffect(() => {
    loadCoupangScript();
  }, []);  // [] means this useEffect will run once on component mount

  return (
    <div className="container">
        <div>"이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다."</div>
      <button className="center-button" onClick={handleClick}>클릭하고 결과보기</button>
      <div id="coupang-container"></div>
    </div>
  );
};

export default CoupangPage;
