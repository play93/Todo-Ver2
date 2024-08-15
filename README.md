# 목표

강의에 따라 Todo List 구현

## 1. UI구현

- flex : 부모요소에 flex를 지정하면 자식요소들의 배치를 `유연하게` 할 수 있도록 도와주는 속성
- flex: 1; => 부모요소를 벗어나지 않는 선에서 늘어날 수 있는 최대 길이만큼 늘어남
- flex-direction : 요소들을 어떤 방향으로 정렬할건지? (row: 행, column: 열)
- gap : 요소들 간의 간격을 주는 속성 (! diplay가 flex로 적용된 요소에만 적용할 수 있음)

- new Date().toDateString() => 날짜를 표시함. new Date()로 새로운 Date객체를 만든 후, toDateString()메서드를 이용해 Date객체를 문자열로 읽기 편하게 렌더링

<br>

## 2. 기능구현 준비

- 투두 아이템들의 데이터를 State로 만들어 보관
  - -> 새로운 데이터가 추가/삭제/수정될 때 화면에 바로바로 렌더링되어야 하기 때문
- state는 어디에 만들어 보관해야 하나?
  - -> state를 이용해야 되는 모든 컴포넌트들의 조상이 되는 App컴포넌트에
- mockData는 리렌더링 될 때마다 다시 생성될 필요X, 상수이기 때문에 값을 바꿀수도 X 여서 컴포넌트 외부에 선언해도 전혀 문제되지 않음!
- 이렇게 mockData를 만드는 걸 데이터모델링이라고 함

<br>

## 3. 투두 추가

- 배열이라고 .push()를 이용해 안의 값을 직접 변경하면 안됨! state의 값은 반드시 상태변화 함수를 호출해서만 수정할 수 있음
  - 이렇게 해야 변경된 state의 값을 리액트가 감지할 수 있고 컴포넌트를 정상적으로 리렌더링 시켜주기 때문
- 아이디는 아이템을 식별하기 위한 값이기 때문에 반드시 고유한 값이여야함
- 새로고침 후, 아무것도 입력하지 않은 상태에서 state가 추가됨. 데이터가 추가된 이후에 입력폼이 비워져야함. 엔터버튼으로도 추가가 가능하게.
- onKeyDown => 사용자가 키보드를 눌렀을 때 일어나는 이벤트를 지정.

## 4. 투두 리스트형태로 렌더링

- includes(item)메서드 : item으로 전달한 값이 문자열에 들어있는지 찾아서 있으면 True, 없으면 False를 반환
- toLowerCase()메서드 : 모든 문자열을 소문자로 변환해서 검색하도록
