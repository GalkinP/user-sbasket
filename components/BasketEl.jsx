const React = require("react");

function BasketEl({ basket, user }) {
  return (
    <div className="basketName" data-id={basket.id}>
      <a className="a" data-id={basket.id} href={`/baskets/${basket.id}`}>
        {basket.name}
      </a>
      {user && user.id === basket.userId && (
        <div className="basketButtons">
          <button className="delBasketBtn" data-id={basket.id}>
            удалить
          </button>
          <button className="updateBasketBtn" data-id={basket.id}>
            изменить
          </button>
        </div>
      )}
    </div>
  );
}

module.exports = BasketEl;
