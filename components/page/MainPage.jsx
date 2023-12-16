const React = require("react");
const Layout = require("../Layout");
const AddBasket = require("../AddBasket");
const UpdateBasket = require("../UpdateBasket");
const BasketEl = require("../BasketEl");

function MainPage({ baskets, user }) {
  console.log(baskets, "=============");
  return (
    <Layout user={user}>
      {user && (
        <>
          <AddBasket /> <UpdateBasket />
        </>
      )}
      <p>выберите кAрзину:</p>
      <div className="mainPage">
        {baskets.map((basket) => (
          <BasketEl key={basket.id} basket={basket} user={user} />
        ))}
      </div>{" "}
      {user && <button className="addBasketButton">Добавить корзину</button>}
    </Layout>
  );
}

module.exports = MainPage;
