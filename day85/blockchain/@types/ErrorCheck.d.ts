declare type TError<R> = {
  isError: true;
  msg: R;
};
// <R>||<T> << 타입을 가져다 사용(호출)할 때 어떤 타입인지 받겠다. T대신 다른거넣어도됨 타입에게서의 매개변수 제네릭(Generics)
// 타입에서의 매개변수

declare type TValue<T> = {
  isError: false;
  value: T;
};

declare type TResult<T, R> = TValue<T> | TError<R>;
//chain의 index.js의 TResult<IBlock, string> IBlock의 매개변수가 IBlock은 T로
/// string은 R로 TError은string
// 오른쪽 둘중의 하나의 타입이 나오는게 왼쪽의 타입이다
// 왼쪽의 T가 오른쪽 T로들어감 T,R은 타입의 매개변수
// 두 결과를 하나로 합친다
//TValue<T> 또는 TError<U>;이 나오는 type을 설정한다.
// 위에 R아무거나상관없다

///declare 은 전역으로 선언하는것이다.
