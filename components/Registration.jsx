const React = require("react");
// const Layout = require("../Layout");

function Registration() {
  return (
    <div className="input registration">
      <form id="reg" method="POST" className="form">
        <h2>Регистрация</h2>
        <div>
          <input type="text" name="name" placeholder="name" required />
        </div>
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
        <select name="role" id="select" >
          <option >посмотреть</option>
          <option >владелец</option>
        </select>
        <button type="submit">Зарегистрироваться</button>
        <button type="button" className="cancel1">X</button>
        <div className="message1"></div>
      </form>
    </div>
  );
}

module.exports = Registration;
