const React = require("react");

// const Registration = require("./Registration");
// const Login = require("./Login");

function Header({ user }) {
  let contentNavBar;
  if (user) {
    contentNavBar = (
      <>
        <div>{`Привет, ${user.name}!`}</div>
        <a href="/auth/logout">Выйти</a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <button className="reg">Регистрация</button>
        <button className="auth">Войти</button>
      </>
    );
  }

  return (
    <header>
      <div className="container">{contentNavBar}</div>
    </header>
  );
}

module.exports = Header;
