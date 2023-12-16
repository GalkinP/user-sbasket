const React = require("react");


function Login() {
  return (
    <div className="input authorization">
      <form id="login" className="form">
        <h2>Авторизируйтесь</h2>
        <div>
          <input type="text" name="email" placeholder="email" required />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Войти</button>
        <button type="button" className="cancel2">X</button>
        <div className="message2"></div>
      </form>
    </div>
  );
}

module.exports = Login;
