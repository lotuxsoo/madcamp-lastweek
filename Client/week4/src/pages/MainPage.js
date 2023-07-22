import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  const goTo1 = () => {
    navigate("/test1"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  const goTo2 = () => {
    navigate("/test2"); // '/next-path'를 원하는 경로로 변경하세요.
  };
  const goTo3 = () => {
    navigate("/test3"); // '/next-path'를 원하는 경로로 변경하세요.
  };

  return (
    <>
      <div>main</div>
      <button style={{ marginTop: "30px" }} type="button" onClick={goTo1}>
        test1
      </button>
      <button style={{ marginTop: "30px" }} type="button" onClick={goTo2}>
        test2
      </button>
      <button style={{ marginTop: "30px" }} type="button" onClick={goTo3}>
        test3
      </button>
    </>
  );
};
export default MainPage;
