export default function LogOut({ user, setUser }) {
  return (
    <div>
      {!user || `${user} 님 어서오세요.`}
      {/* user ? `${user}님 이 어서오세요` : "" */}
      {/*  || 는 `또는` 앞에게 아니면 뒤에 걸 띄운다.(출력한다.)*/}
      <button
        onClick={() => {
          setUser("");
        }}
      >
        logOut
      </button>
    </div>
  );
}
