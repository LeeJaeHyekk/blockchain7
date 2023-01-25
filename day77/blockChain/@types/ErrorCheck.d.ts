declare type TError<T> = {
  isError: true;
  msg: T;
};
// <T> << 타입을 가져다가 사용(호출)할 때 어떤 타입인지 받겠다.
declare type TResult<T> = {
  isError: false;
  value: T;
};
