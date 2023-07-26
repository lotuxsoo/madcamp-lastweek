import React, { useState, createRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "./GlobalStateProvider";
import "../css/reset.css";
import "../css/result.css";
import img4 from "../assets/프론트엔드.png";
import img1 from "../assets/게임개발.png";
import img5 from "../assets/데이터분석.png";
import img2 from "../assets/백엔드.png";
import img3 from "../assets/정보보안.png";

function ResultPage2() {
  const { globalState } = useGlobalState();
  console.log(globalState);
  const { max_key } = globalState;
  const [key, setKey] = useState("");

  useEffect(() => {
    setKey(max_key);
  }, [max_key]);

  return (
    <>
      {key == 4 && (
        <section id="main_contents">
          <div className="wrapper">
            <div
              className="result"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div className="titles">
                <h3>예술적 감각이 뛰어난 당신은!</h3>
                <h1>프론트엔드 개발자</h1>
              </div>
              <div className="result_img">
                <img src={img4} alt="frontend" />
              </div>
            </div>
            <div className="result_explains">
              <div className="explain">
                <h3 className="title">
                  나와 맞는 개발 유형은 프론트엔드 개발자!
                </h3>
                <ul>
                  <li>
                    내 눈으로 결과를 확인해야 함. 바로 바로 적용되는 화면에
                    성취감을 느낌.
                  </li>
                  <li>
                    어렸을 때 한번쯤은 호그와트 들어가는 상상해보지 않나?
                    상상력이 풍부하고 새로운 도전을 즐기는 편임.
                  </li>
                  <li>
                    은근히 완벽주의자 성향이 있어서 1px이라도 비뚤어지거나
                    대칭이 맞지 않으면 참을 수 없음.
                  </li>
                  <li>
                    자유로운 영혼이지만 내가 지금 무엇을 해야하는지 정확히
                    알아야 함.
                  </li>
                </ul>
              </div>
              <div className="explain">
                <h3 className="title">프론트엔드란?</h3>
                <ul>
                  <li>
                    FE(Front-End)라고도 부르며, 웹이나 앱을 이용할 때 눈으로
                    보는 모든 화면들을 만드는 개발자를 의미합니다.
                  </li>
                  <li>
                    반응형 웹이나 UI를 만들어야 하기 때문에 미적 감각이
                    필요합니다.
                  </li>
                  <li>
                    웹 퍼블리셔와 프론트엔드 개발자는 공동의 영역을 공유합니다.
                    웹 퍼블리셔는 주로 HTML, CSS를 사용하여 화면을 설계합니다.
                    프론트엔드 개발자는 js, jQuery, 백엔드와의 연동 등 화면
                    설계와 동시에 화면 구조까지 살펴볼 수 있는 사람을 말합니다.
                    그러나 실무에서는 이 두 가지 직업군의 롤 모두를 수행하는
                    사람이 많습니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <h3>이건 내가 아니야... 잘못된게 분명해!</h3>
              <a href="#">
                <button type="button">테스트 다시 하기</button>
              </a>
            </div>
          </div>
        </section>
      )}

      {key == 2 && (
        <section id="main_contents">
          <div className="wrapper">
            <div
              className="result"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div className="titles">
                <h3>보이지 않는 것을 보는 당신은!</h3>
                <h1>백엔드 개발자</h1>
              </div>
              <div className="result_img">
                <img src={img2} alt="frontend" />
              </div>
            </div>
            <div className="result_explains">
              <div className="explain">
                <h3 className="title">나와 맞는 개발 유형은 백엔드 개발자!</h3>
                <ul>
                  <li>
                    어떤 일이든 안정적인 것이 우선임. 밴드 활동을 한다면, 화려한
                    보컬보다는 안정적인 연주를 이끌어나가는 베이스와 드럼을 맡는
                    편.
                  </li>
                  <li>
                    주로 데이터를 다루는 데에 관심이 있음. 시각적으로 디자인을
                    하는 것에는 관심이 없고 귀찮음.
                  </li>
                  <li>
                    논리적인 사고를 하는 것을 즐기는 스타일으로 추리소설, 방탈출
                    게임 등을 좋아하고 어려운 문제를 해결하는데 성취감을 느낌.
                  </li>
                  <li>
                    효율적인 거 너무 좋아 최고야...! 목적지에 갈 때도 최단 경로
                    알아내서 그 길로 가는 편. 지하철 탈 때 아무 데서나 서 있지
                    않음. 빠른 환승 구역 앞에 서 있어야 마음이 안정됨.
                  </li>
                </ul>
              </div>
              <div className="explain">
                <h3 className="title">프론트엔드란?</h3>
                <ul>
                  <li>
                    프론트 개발자가 사용자에게 보여지는 화면을 담당하는
                    개발자라면, 백엔드 개발자는 로그인, 추천 기능 등 서비스의
                    뒷부분 즉, 서버 설계를 담당하는 개발자입니다.
                  </li>
                  <li>
                    클라이언트(사용자)와 데이터베이스(데이터가 모여있는 곳)
                    사이를 중계하는 서버를 개발합니다. 클라이언트가 요청하는
                    데이터를 가공하여 제공(예를 들어 넷플릭스에서 내가 원하는
                    영상 리스트업)하는 프로그램을 개발합니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <h3>이건 내가 아니야... 잘못된게 분명해!</h3>
              <a href="#">
                <button type="button">테스트 다시 하기</button>
              </a>
            </div>
          </div>
        </section>
      )}

      {key == 5 && (
        <section id="main_contents">
          <div className="wrapper">
            <div
              className="result"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div className="titles">
                <h3>Data에서 인사이트를 발견할 수 있는 당신은!</h3>
                <h1>데이터 분석과 인공지능</h1>
              </div>
              <div className="result_img">
                <img src={img5} alt="frontend" />
              </div>
            </div>
            <div className="result_explains">
              <div className="explain">
                <h3 className="title">
                  나와 맞는 개발 유형은 데이터분석 개발자!
                </h3>
                <ul>
                  <li>
                    하루하루 계획을 세워야 함. 준비없이 갑작스럽게 해야 될 일이
                    생기는 것은 질색!
                  </li>
                  <li>
                    효율적이고 합리적인 방식을 선호하는 타입. 자기전에 내일
                    어디갈지 뭐할지 다 정하고 자는 편.
                  </li>
                  <li>
                    의사결정 시 나의 느낌보다는 다른 사람들의 의견들을 꼼꼼히
                    조사하는 편. 그래서 뭔가 결정하는 데 하루 종일 걸림.
                  </li>
                </ul>
              </div>
              <div className="explain">
                <h3 className="title">데이터 분석과 인공지능이란?</h3>
                <ul>
                  <li>
                    데이터 분석은 정보에 대한 결론을 도출하기 위해 적합한
                    알고리즘과 통계기법을 적용해 패턴을 찾는 작업입니다."
                  </li>
                  <li>
                    인공지능은 데이터 분석 기반으로 인간만이 할 수 있다고
                    생각했던 기능을 컴퓨터가 수행하는 것을 목표로 합니다.
                  </li>
                  <li>
                    정보를 기반으로 의사결정을 지원하는 것을 목표로 하기 때문에
                    이해관계자가 잘 이해할 수 있도록 전달하는 것 또한
                    중요합니다.
                  </li>
                  <li>
                    무엇을 해결하고자 하는지 명확하게 판단해야 하기 때문에
                    원하는 목적과 어떤 임팩트가 있는지 구체적으로 정의하는 것이
                    좋습니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <h3>이건 내가 아니야... 잘못된게 분명해!</h3>
              <a href="#">
                <button type="button">테스트 다시 하기</button>
              </a>
            </div>
          </div>
        </section>
      )}

      {key == 3 && (
        <section id="main_contents">
          <div className="wrapper">
            <div
              className="result"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div className="titles">
                <h3>모든지 뚫고, 막을 수 있는 당신은!</h3>
                <h1>정보보안</h1>
              </div>
              <div className="result_img">
                <img src={img3} alt="frontend" />
              </div>
            </div>
            <div className="result_explains">
              <div className="explain">
                <h3 className="title">
                  나와 맞는 개발 유형은 정보보안 전문가!
                </h3>
                <ul>
                  <li>
                    어떤 서비스가 만들어지기 전에 시큐어코딩이 이뤄지지 않으면
                    사상누각! 아무리 좋은 서비스라 하더라도 단번에 무너질 수
                    있어!
                  </li>
                  <li>
                    그냥 웹페이지를 접속했을 뿐인데 나에겐 취약점이 너무나 많이
                    보인다! 이렇게 해도 뚫릴 것 같고, 저렇게 해도 뚫릴 것 같아.
                  </li>
                  <li>해커, 정의의 이름으로 너희들을 용납하지 않겠다!</li>
                  <li>
                    이미 완성품인데 괜히 분해해서 분석해 보고 싶음. 사실 그렇게
                    분해하다가 망가진 것도 있음...ㅎ"
                  </li>
                </ul>
              </div>
              <div className="explain">
                <h3 className="title">정보 보안이란?</h3>
                <ul>
                  <li>
                    정보보안은 보안 취약점을 찾아내어 문제를 해결하고 이를
                    악의적으로 이용하는 것을 방지하는 행위를 말합니다.
                  </li>
                  <li>
                    기업 측면에서는 네트워크, 데이터베이스 등의 정보자산을
                    안전하게 보호하고, 일반 사용자 측면에서는 개인 정보 유출,
                    남용을 방지하는 역할을 담당한다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <h3>이건 내가 아니야... 잘못된게 분명해!</h3>
              <a href="#">
                <button type="button">테스트 다시 하기</button>
              </a>
            </div>
          </div>
        </section>
      )}

      {key == 1 && (
        <section id="main_contents">
          <div className="wrapper">
            <div
              className="result"
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <div className="titles">
                <h3>게임을 좋아하고, 상상하길 즐겨하는 당신은!</h3>
                <h1>게임 개발</h1>
              </div>
              <div className="result_img">
                <img src={img1} alt="frontend" />
              </div>
            </div>
            <div className="result_explains">
              <div className="explain">
                <h3 className="title">나와 맞는 개발 유형은 게임 개발자!</h3>
                <ul>
                  <li>
                    뭐든 새로 나오면 한 번 경험해 봐야 직성이 풀림. 남들이 이거
                    해 봤냐고 물어보면 당연하지! 라고 답하는 편.
                  </li>
                  <li>
                    남들과 똑같기를 거부한다! 창의적인 스타일, 항상 새로운
                    재미있는 것을 추구한다.
                  </li>
                  <li>
                    밤새는 거 잘함. 해외에 나가도 시차적응이 필요없는 타입. 일이
                    오백만개 쌓여있어도 어찌저찌 마감기한 내에는 다 끝내는 편.
                  </li>
                  <li>
                    게임을 좋아하지 않는데 게임 개발 유형이 나왔다고 놀라지
                    마세요! 요리를 먹는 것과 요리를 하는 것은 다르답니다.
                  </li>
                </ul>
              </div>
              <div className="explain">
                <h3 className="title">게임 개발이란?</h3>
                <ul>
                  <li>
                    게임 개발자는 컴퓨터 게임이나 비디오 게임을 개발하는
                    개발자를 말합니다.
                  </li>
                  <li>
                    게임 프로그래머는 프로그래밍 언어 외에도 그래픽, 물리에 대한
                    이해를 바탕으로 가상세계를 구현하기 때문에 수학적, 물리적
                    지식이 필요합니다.
                  </li>
                  <li>
                    게임 개발은 가장 예측하기 힘든 분야입니다. 내가 재밌어도
                    남들은 재미없어 할 수도 있어요. 재미라는 요소 자체가
                    주관적이기 때문이에요. 그렇기 때문에 트렌드를 잘 읽어야
                    하고, 변화에 빠르게 대응하기 위해 구조를 탄탄하게 잡으려는
                    노력을 해야합니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="buttons">
              <h3>이건 내가 아니야... 잘못된게 분명해!</h3>
              <a href="#">
                <button type="button">테스트 다시 하기</button>
              </a>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
export default ResultPage2;
