import Count2Clomp from "../components/Count2";
import { action } from "../modules/count1";
import { connect } from "react-redux";
const Count2Container = ({ count2, plus, minus, input }) => {
  return (
    <Count2Clomp count2={count2} plus={plus} minus={minus} input={input} />
  );
};
const mapStateToProps = (state, props) => {
  return { count2: state.count2, ...props };
  // 객체 내의 값이 그대로 적용한다.
};
const mapDispatchToProps = (dispatch) => {
  return {
    plus: () => {
      dispatch(action.plus);
    },
    minus: () => {
      dispatch(action.minus);
    },
    input: () => {
      dispatch(action.input);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count2Container);
// connect는 매개변수로 mapStateToProps로 콜백함수 또는 mapDispatchToProps 콜백함수를 받는다 dispatch를 사용할라면 mapstate를 꼭 써야한다.
// mapStateToProps 콜백함수와 mapDispatchToProps 콜백함수의 return 값은 객체로 내보낸다.
// mapStateToprops 콜백함수의 매개변수로는 state 와 props를 받는다.
//  -state는 store(redux)의 state이다.
//  -props는 상위 컴포넌트에 전달한 props이다
//  mapDispatchToProps 콜백 함수의 매개변수로는 dispatch를 받는다.
//  -dispatch는 store의 dispatch 메서드 이다
//  connect의 매개변수인 두 콜백함수의 return값인 객체는 객체 내의 각각의 프로퍼니가 2번째 함수(Count2Container를 매개변수로 받는 함수)
//  mapStateToPtops 콜백함수와 mapDispatchToProps 콜백함수의 return 값
