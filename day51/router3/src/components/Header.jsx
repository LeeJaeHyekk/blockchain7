import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      Header!
      <div>
        <Link to="/">
          {/* state  props를 사용해서 데이터를 전달할 수 있다. */}
          Home
        </Link>{" "}
        |<Link to="/login">Log in</Link>| <Link to="/log/in">Log in2</Link>|{" "}
        <Link to={"/log/out?"}>Log out2</Link>
        {/* a태그 대신 사용한다. a태그를 사용할떄는  외부 웹페이지에 접근해야될때 사용한다. localhost -> naver.com */}
      </div>
    </div>
  );
}
export default Header;
