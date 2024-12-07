## 목적

- SPA
  - Vainilla Scripts로 SPA 라우터를 직접 구현해보며 SPA의 동작 원리를 이해해요.
  - SPA를 직접 만들어보며 React가 어떻게 동작하는지? 어떤 고민들을 했는지 경험해봐요.
- 비동기
  - 실제 동작하는 API를 통한 비동기 통신을 구현해요.
- UX
  - UX 경험을 위한 화면 구현
- 컴포넌트 (Optional)
  - 컴포넌트 개념을 학습하고 컴포넌트 단위로 모듈화하여 개발
  - UI를 컴포넌트 단위로 생각하고 개발하는 연습
  - 재사용할 수 있는 컴포넌트를 고민해보기

## 목적이 아닌 것

이번 미션의 가장 중요한 핵심은 SPA 동작 원리 및 비동기 입니다. 이것 외에 많은 시간을 쏟고 있다면 위의 목적을 다시한번 읽고 선택과 집중을 하시면 좋을 것 같아요.

## 기능 요구사항

### 1. ‘Seoul’ 날씨를 주어진 API를 사용하여 현재 날씨를 보여줘요.

- [OpenWeather Current Weather Data](https://openweathermap.org/current)
- 온도는 °C로 표현되며 Response값도 °C로 리턴 받아요.
- [icon URL](https://openweathermap.org/weather-conditions#How-to-get-icon-URL)을 참고하여 날씨 아이콘이 노출되게 해요.

### 2. 현재 날씨를 클릭 시 페이지가 이동하고 해당 지역의 앞으로 5일간의 기상 상태 리스트를 3시간 간격으로 보여줘요.

- [OpenWeather 5day Weather Forecast Data](https://openweathermap.org/forecast5)
- 리스트에 대한 Skeleton UI를 구현해요.
- URL로도 진입이 가능해야 해요.

### 3. 배포

- 실행 가능한 페이지에 접근 할 수 있도록 github page 기능을 이용하고, 해당 링크를 PR과 README에 작성해요.

## UI

![2024-06-02_11-55-00.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/df24d9cd-6b45-411e-a669-92c0f7c7cdb4/0d9f3a95-9384-44f0-8775-721ab4d29d7b/2024-06-02_11-55-00.png)

## 프로그래밍 요구사항

> 이전 과제의 프로그래밍 요구사항을 기본으로 포함해요

- 비동기 통신에서 실패 할 경우를 대비해요.
  - 비동기 통신에서 일어날 수 있는 다양한 상황을 고려해봐요.
- 특정한 패턴에 사고를 끼워 맞추지 않고 단지 역할과 책임에 따라 관심사를 분리해요.
  - 어떠한 관점에서 역할과 책임에 따라 관심사를 분리하였는지 리뷰어에게 설명할 수 있어야 해요.
- 라우터를 직접 구현해봐요.
  - 라우터를 직접 구현해보며 SPA가 어떻게 구현되는지 이해해요.
  - 라우팅을 구현하기 위해 사용되는 기술들에 대한 이해
    - URL 구조
    - History 객체를 기반으로 어떻게 브라우저에서 상태를 관리하는지
- Vainilla Scripts로 SPA 라우터를 직접 구현해봐요.
  - 라우터를 직접 사용해보며 DX를 보기 (내가 작성한 라우터를 내가 직접 쓰는데, 쓰기 편한가?)
