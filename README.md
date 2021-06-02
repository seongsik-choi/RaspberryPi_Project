# RaspberryPi_Project

## 도우미 기능을 탑재한 음성인식 SmartMirror

**1) Project Subject**
  -  Raspberry Pi, Google API, Token 정보를 이용하고, 사용자의 음성 인식을 통해 JavaScript 기반 동적으로 실시간 정보를 제공하는 SmartMirror를 제작한다 
  
**2) Main Function**
  - SmartMirror Display 상에 실시간으로 변하는 기상, 뉴스, 일정 정보 등을 제공한다.
  - NewsFeed 기능를 이용해 실시간 뉴스 데이터를 제공한다. 
  - Google Calender 기능을 이용해 Google 계정에 연동된 일정표를 제공한다.  
  - 날씨 정보 API(Weather forecast)를 이용해 실시간 날씨 및 날씨 예보 기능을 제공한다.
  - Google Map API를 이용해 지도 기능 및 버스 및 대중교통 정보를 제공한다.
  - 동영상 재생(Youtube) API를 이용해 영상 기능을 제공한다. 
  - 대기질 지수 API(AirQuality)를 이용해 실시간 미세먼지 정보를 제공한다.
  - pushbullet 통신을 사용해 사용자 스마트폰과 연동기능을 사용해 알림을 표시하고, SmartMirror를 제어한다.
  - Google Assistant API를 사용하여 음성인식을 지원하고, SmartMirror 기본 설정을 제어한다.
  
 **3) Technology**
  - O/S : Raspbian OS
  - Language : Javascript, css, HTML, JSON
  - Technology : Node.js, npm, Google API, Google Assistant API
  - Tools : Magic Mirror
---

**4) Flow Chart**
  -  All)    
![image](https://user-images.githubusercontent.com/76051264/102740805-fbe0cf80-4393-11eb-8e65-142e0fd995ac.png)

  - Detail)  
![image](https://user-images.githubusercontent.com/76051264/102740103-5547ff00-4392-11eb-8654-58d2e50e14ce.png)
---

**4) Function Diagram**
![image](https://user-images.githubusercontent.com/76051264/102740288-c982a280-4392-11eb-93f3-397dc3f3d3c1.png)

  - ① Raspberry의 npm(node package manager)실행을 통해 Magic Mirror인 SmartMirror에 접근한다.
  - ② SmartMirror 디스플레이에는 시계, 날씨, 날씨 정보 및 예보, 구글 캘린더 일정, 대기 질 지수, 뉴스 피드, 구글 어시스턴트 키워드 아이콘, 스마트폰과 연동된 알림 표시(Pushbullet), 구글 맵 API를 활용한 실시간 지도, 대중교통정보 모듈이 표시된다. 모듈 들은 JavaScript 파일로 구성되어있다.
  - ③ 디스플레에는 구글 어시스턴트 키워드를 입력받는 아이콘이 있으며, 연결된 마이크에 키워드인 “SmartMirror”음성 입력 시 구글 어시스턴트 음성을 인식받는 Hotword 모듈이 동작하여 구글 어시스턴트를 동작시킨다. 이후 추가 음성 입력을 통해 유튜브 재생, 구글 캘린더에 연동된 일정 브리핑, 설정된 위도, 경도에 따른 기상정보, 그 외 구글 어시스턴트 기본 기능인 검색 기능, SmartMirror 종료 등을 음성과 디스플레이로 확인할 수 있다.
  - ④ Pushbullet API를 통해 통신기능을 사용하여, SmartMirror 디스플레이에 기기등록된 사용자의 스마트폰 알림을 표시할 수 있다. 실시간으로 수신되는 문자, 카카오톡, 전화, App들의 알림을 디스플레이에 보여준다. pushbullet은 스마트폰의 App과 데스크톱 app 두 가지 모두를 사용 할 수 있으며, 지정된 명령어를 통해 SmartMirror 디스플레이 표시되는 모듈들을 숨기거나 보여줄 수 있으며, 스마트폰의 디스플레이를 끄거나 켜고, 라즈베리파이의 전원을 끌 수 있다.
---

**5) Action**
  - 기본 동작의 경우 npm이 설치 된 MagicMiiror 디렉토리 내부에서 실행할 수 있다.  
  - MagicMirror dic에는실행에 필요한 configuration파일 있는 config/dic, UI 설정을 위한 css/dic, 화면에 시각화 및 API를 동적으로 사용하기 위한 모듈들이 모여있는 modules/dic 등으로 구성 되어있다.
  - Terminal에서 npm start 명령어로 Smart mirror 실행이 가능하다.

![image](https://user-images.githubusercontent.com/76051264/102741243-34cd7400-4395-11eb-8633-eb20267de852.png)

![image](https://user-images.githubusercontent.com/76051264/102741303-5af31400-4395-11eb-8984-08433dfe8844.png)
---