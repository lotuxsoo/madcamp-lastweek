# What's Your Type
---

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/8fba3bbb-cadd-4a6c-b51a-3c1949f0c239" width="1000" height="700">
<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/5d0c0d7a-43b0-4b5d-8b5f-a854ab63e6a9" width="800" height="700">

Week4 4분반 경민,수연팀

- 네가지의 유형테스트를 제공합니다.
- 소개팅유형 테스트, 개발자 유형테스트 , 연애 유형 테스트, 밈테스트
- 결과를 카카오톡 공유하기가 가능합니다.
- 결과를 보기 위해 광고를 띄움으로써 수익을 창출 할 수 있습니다.
- 테스트 결과에 맞는 유튜브 영상이나 결과이미지를 제공합니다.

---

### a. 개발 팀원

- 김경민 - 한양대학교 컴퓨터소프트웨어학부 19학번
- 최수연 - 숙명여자대학교 컴퓨터과학전공 19학번

---

### b. 개발환경

- Language: React.js, Django
- IDE: Visual Studio code

---

### c. Web applicaiton 소개

### 1.Main page

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/c91b757b-aec6-443f-b19c-f682206c6ad1" width="1000" height="700">
<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/081d037a-c0ff-479e-a135-c5de9eb31aff" width="1000" height="700">


***Major features***
- 애플리케이션의 제목인 "What's Your Type?"이 한 글자씩 나타나며 애니메이션 효과를 주는 기능이있습니다. 애니메이션은 무한히 반복됩니다.
- 사용자는 네 가지 다른 성향 테스트 중 원하는 것을 선택할 수 있습니다. 각 테스트 버튼을 누르면 해당 테스트 페이지로 이동합니다.

---

***기술설명***
- 사용자가 입력한 직군 정보를 통해 Designer와 Developer를 구분하여 서로 다른 form을 보여줍니다. 
- 입력을 완료한 경우 onsubmit을 호출해 서버로 data를 넘기고, 서버에서 mongodb에 insert하는 방식입니다.
- 사용자가 입력한 정보는 모두 useState를 통해 내용이 변화할때마다 실시간으로 업데이트 됩니다.

---

### 2.TestPage

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/56d5cd7a-6d33-4bc6-8f1a-cb457ca307df" width="1000" height="700">

***Major features***
- 원하는 경우 포트폴리오 내용을 수정할 수 있습니다.

---

***기술설명***
- 

---

### 3.ResultPage

<img src="https://github.com/rudals9686/madcamp_week3/assets/20718582/1cd95a9b-c770-49e1-b697-82cbf7948caa" width="1000" height="400">

***Major features***
- 사용자가 데이터베이스에 있는 모든 포트폴리오를 검색할 수 있습니다.
- 사용자이름, 직군과 일치하는지 확인하여 실시간으로 결과를 필터링할 수 있습니다.
- 검색 결과에서 포트폴리오 항목을 클릭하면 해당 포트폴리오에 대한 페이지로 이동합니다

---

***기술설명***
- 사용자 데이터를 비동기로 가져오는 기능은 React의 useEffect와 axios 라이브러리를 이용해 구현되었습니다. 
- 특정 시간이 지난 후에 HTTP 요청이 발생하고, 요청이 완료되면 사용자 데이터가 앱의 상태로 설정됩니다.
- 포트폴리오를 클릭하면 navigate를 통해 portfolio의 id에 해당하는 값의 viewcv로 전환됩니다.

---
