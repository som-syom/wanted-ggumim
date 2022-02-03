# 원티드 프리온보딩 프론트엔드 코스 개인 과제

## 👉 프로젝트 소개

- 목표 : 집꾸미기 집소개 기능에 포함되어있는 사진과 가구 정보를 조합한 컴포넌트 구현
- 기간 : 2022/02/01 ~ 2022/02/03

## 👉 배포 주소

https://som-syom-wanted-ggumim.netlify.app/

## 👉 구현한 기능

- 제공되는 API 를 호출하여 사진과 가구에 대한 정보 호출
- API 에서 받아온 좌표값에 맞추어 돋보기 모양 버튼을 표시
- 돋보기 버튼을 클릭하면 상품정보 tooltip 이 출력되며 돋보기 모양이 닫기버튼으로 변경되게 구현
- tooltip은 하나만 노출되도록 구현
  (tooltip 이 노출된 상태에서 다른 가구를 선택하면 열렸던 tooltip은 닫히고 선택한 가구의 tooltip만 노출되게 하였음)
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tooltip 출력하고 선택된 가구 표시
- 할인율이 있는 가구에는 tooltip 과 가구목록에 표시
- 선택한 가구에 따라 스크롤 이동
- 드래그하여 스크롤 이동

## 👉 프로젝트 설치 및 실행

1. git clone

```
git clone https://github.com/som-syom/wanted-ggumim.git
```

2. 패키지 설치

```
npm install
```

3. 프로젝트 실행

```
npm start
```

## 👉 프로젝트 구조

```
src
├── Assets
├── Components
│   ├── ImageContianer
│   └── MagnifierButton
│   └── Swiper
│   └── SwiperItem
│   └── ToolTip
├── Pages
├── Utils
│   ├── Styles
│   └── API
├── App.jsx
└── index.js
```
