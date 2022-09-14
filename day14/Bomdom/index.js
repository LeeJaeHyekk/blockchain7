console.log(window.location);
// location은 현재 주소에 대한 내용을 담고있다.
// window가 뭐길래 주소 내용을 담고있는가?
// window는 BOM(browser Object model)이다.
// 브라우저의 정보를 갖고있다.
console.log(location);
// window는 root 객체이다.
// root는 최상위 폴더/객체이다.
console.log(window.navigator);
// 생각보다 자주 쓸지도 모름
console.log(window.navigator.userAgent);
// 브라우저와 os 관련된 정보가 정의되어 있다. 즉,현재 브라우저나 os등을 확인할 수 있다.
// userAgent를 정규표현식을 사용해 원하는 정보만 가져올 수도 있다.(다만, 라이브러리를 사용해서 쉽게 처리가 가능하다.)
// PS. 애플 계열은 IOS, iphone , iPad , Mac으로만 나타난다.
console.log(document.body);
// 적혀있는 그대로 body의 정보를 받아온다.
// document는 HTML 파일 구조에 대해서 정의한다.
// document는 DOM(Document Object Model)이다.
// HTML 구조의 root이다.
console.log(document);
console.dir(document);
// console.log로 나오지 않은 것은 dir로 확인하자.
// console.log확인시 html 구조가 나오면 dir로 확인하는 경우가 있다.
// console에 대해서는 Node.js에서 다시...
//  BOM/ DOM feat.MVC(모델뷰 컨트롤러)
// node, tag , Element란 무엇인가?
// tag 는 html에서 사용하는 명령어의 이름을 뜻했다. ex)html, body ,div ...
// Tag는 여는 Tag와 닫는 Tag로 사용한다. <div></div>
// Element는 뭐냐 >> 여는 Tag와 닫는 Tag를 모두 포함하는 내용이다. <<라고 했었다.
// Dom(documet) 내에서 정의되는 Tag의 내용이다.
// ex)document.getElementById('name') >> name을 id로 갖는 Tag를 찾는다.<< 정확히는 Element를 찾는다.
// Tag && Element의 차이는 무엇이냐? Tag는 이름 그 자체이다.Element는 객체이다.
// 즉, javascript에서 HTML 구조를 수정하거나 내용을 추가하거나 등등에서 사용하는 Tag에 대한 객체이다.
// HTML 파일에서 Tag(여는태그 , 자식들 포함)에 사용된 내용들을 모두 포함하는 것이 Element다.
//  객체 안에 있는 함수는 메서드(method) 라고 부흔다.
//  객체의 키를 프로퍼티 라고 부른다.
//  innerHTML은 여는 태그와 닫는 태그 사이의 데이터를 문자열로 받는다.
// outerHTML은 여는 태그와 닫는 태그를 모두 포함하여 데이터를 문자열로 받는다.
console.log(document.getElementsById("test").id);
console.log(document.getElementsById("test").style.border);
document.getElementById("test").style.border = "10px solid red";

// 상속하는 객체의 정보(프로퍼티, 메서드 모두 포함)를 갖는 다른 객체를 만드는 행위?
// A={a,b,c} => B가 A를  상속한다. => B ={a,b,c}
// person을 상속해서 kim,youm,jang을 만들 수 있다.(생성할 수 있다)
// js 는 프로토타입 형태로 되어있다. 기본적으로 Node를 기준으로 되어있다.
// Node를 이용하여 Element, document 등을 생성한다.
// 프로토타입은 상식적으로 생각했을때 테스트를 위한 임시 기계?
//  프로토타입을 업그레이드,즉 기능을 추가하거나 필요치 않은 기능을 삭제하거나 등등 더 좋게 만들어서 다음것을 만든다.
