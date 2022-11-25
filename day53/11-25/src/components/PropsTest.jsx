export default function PropsTest() {
  return <Child1 test="testing" />;
}
function Child1({ test }) {
  return <Child2 test={test}></Child2>;
}
function Child2({ test }) {
  return <Child3 test={test}></Child3>;
}
function Child3({ test }) {
  return <Child4 test={test}></Child4>;
}
function Child4({ test }) {
  return <div>{test}</div>;
}
