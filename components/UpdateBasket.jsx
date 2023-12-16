const React = require("react");

function UpdateBasket() {
  return (
    <div className="input updateBasket">
      <form id="updateBasket" className="form">
        <h2>Отредактируйте название</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Новое название"
            required
          />
        </div>
        <div></div>
        <button type="submit">Изменить</button>
        <button type="button" className="cancel4">
          X
        </button>
        <div className="message2"></div>
      </form>
    </div>
  );
}

module.exports = UpdateBasket;
