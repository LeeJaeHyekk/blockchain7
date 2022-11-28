import "./App.css";
import { createStore } from "redux";
// createstore는 이름 그대로 store 만드는 함수. Deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될(컴퓨터 시스템 기능 등 )
// ex) img 태그 width 속성(attribute) << style로 사용
// createStore를 대신하는 함수가 @reduxjs/toolkit 라이브러리의 configureStore 메서드이다.
import { Provider } from "react-redux";
// React에서 Redux를 사용하기 위한 Root 컴포넌트를 가져온다.(Provider)
import { composeWithDevTools } from "redux-devtools-extension";
import { Redux } from "./Components/Redux";
import store from "./Components/Store";
// 브라우저의 redux DevTool과 연결헤 준다. 함수이다.

// let function reducer()= {}
// const reducer = (state, action) => {
//   // reducer 함수는 Redux 내에서 action을 받아서 작업을 진핼한 후에 state를 변경(재정의) 한다.
//   console.log(state, action);
//   switch (action.type) {
//     case "plus":
//       // action의 type이 plus일때 기존에 state에 1을 추가한다.
//       return { test: state.test + "1" };
//     // return 된 값은 state에 그대로 정의된다.
//     default:
//       return state;
//   }
// };
// const store = createStore(
//   //store를 생성한다.
//   reducer,
//   // (state) => state, // 첫번째 매개변수로 reducer를 전달한다.
//   { test: "testing" }, // 두번째 매개변수로 초기 상태를 전달한다.  initialize()/initializeState : 초기값 설정
//   composeWithDevTools() // 세번째 매개 변수로 옵션으로 devtool에 연결한다.
// );
// --------------------------------------------------------------------------------------------------------------------
// 동사무소에 가서 주민등록등본을 신청했다.
// dispatch를 사용해 action의 type으로 '주민등록등본'을 보냈다.
// 접수원은 주민등록증과 500원을 받았다.
// dispatch를 사용해 payload의 pay로 500을 포함하여 idcard로 true를 포함했다. reducer는 dispatch가 보낸 action을 받았다.
// 주민등록 등본을 찾아 출력했다.
// reducer는 받는 action을 기준으로 작업을 실행했다.
// 주민임을 확인하기 위해 idcard를 받은 것을 확인했다.
//  - 500원은 수수료로 챙겼다.
// 출력된 주민등록등본을 나에게 줬다.
// state에 주민등록등본이 정의되었으며 해당 내용은 view(컴포넌트)에서 받아 확인했다.
// ---------------------------------------------------------------------------------------------------------------------
function App() {
  return (
    <Provider store={store}>
      {/* Redux를 사용하기위해 Root 컴포넌트로 전체를 감싸준다.
      기존의 Root 컴포넌트는 Provider의 자식 컴포넌트가 된다.
      Provider의 props로 store를 전달한다. */}
      <div className="App">
        <button
          onClick={() => {
            store.dispatch({ type: "plus", payload: {} });
            // dispatch 메서드를 사용해서 action({type:"plus",payloa:{}}을 reducer에 전달)
          }}
        >
          +
        </button>
      </div>
    </Provider>
  );
}

export default App;
