import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const goToNext = () => {
    navigate("/test"); // '/next-path'를 원하는 경로로 변경하세요.
  };

  return (
    <>
      <div>main</div>
      <button style={{ marginTop: "30px" }} type="button" onClick={goToNext}>
        GO
      </button>
    </>
  );
};
export default MainPage;
