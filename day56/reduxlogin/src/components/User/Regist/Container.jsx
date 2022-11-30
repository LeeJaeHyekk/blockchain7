// import { useDispatch } from "react-redux";
import store from "../../../modules/store";
import { action } from "../../../modules/userDB";
import RegistComponent from "./Componets";

const RegistContainer = () => {
  // 1. onClick을 선언한다.
  // const dispatch = useDispatch();
  const onClick = (userId, userPw, userName) => {
    // 5. onClick을 호출 당했다. 매개변수로 userId, userPw,userName를 받았다.
    console.log("RegistContainer onClick=>dispatch");
    // 6. store의 dispatch를 호출했다. 매개변수로 action의 regist를 호출해 return값을 전달했다. => dispatch 호출보다 action의 regist호출이 먼저 실행된다.
    // 7. action의 regist를 호출했다. userId, userPw, userName를 매개변수로 전달했다.
    // 10. dispatch를 호출했다. action.regist의 return값(반환값,action)을 매개변스로 전달한다.
    // 11. dispatch는 reducer를 호출하며 액션을 매개변수로 전달한다.
    store.dispatch(action.regist(userId, userPw, userName));
    console.log("RegistContainer", onClick);
    // 2. onClick을 RegistComp에 props로 전달한다
    // 화살표 함수
    // ()=>({}) << 왼쪽 () 안에 있은 것이 function()의 괄호안에 있는 것과 같다. 즉 왼쪽 ()안의 것이 매개변수 이다.
    //  - =>(화살표) 오른쪽은 함수의 return 값이다.(현재는 {},객체를 반환한다.)
    // ()=>[] << 왼쪽()는 받는 매개변수이다. 오른쪽은 함수가 return 하는 [] 배열이다.
    // ()=>{} << 왼쪽()는 받는 매개변수이다. 오른쪽 {}중괄호는 함수의 내용이다.
    // ()=>{return{}} <<왼쪽()는 받는 매개변수이다. 오른쪽 {}는 함수의 내용이며 return다음의 {}, 객체를 반환한다.
    // ()=>({a:1})==()=>{return {a:1}} == function(){return{a:1};}
    // ()=>[] ==()=>{return[];}
    // (a)=>{return a+1;} == function(a){return a+1;}
  };
  return <RegistComponent onClick={onClick} />;
};
export default RegistContainer;
