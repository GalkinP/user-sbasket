const React = require("react");
const Layout = require("../Layout");
const AddProductForm = require("../AddProductForm");

function BasketPage({ basket, user }) {
  return (
    <Layout user={user}>
      <AddProductForm basket={basket} user={user}/>
      <p>в корзине:</p>
      <div className="BasketPage">
        {basket.Products &&
          basket.Products?.map((product) => (
            <div key={product.id} className="inbasket" data-id={product.id}>
              <a href={`/products/${product.id}`}>
                <p>{product.name}</p>
              </a>

              <img
                src={product.img}
                style={{ width: "200px", borderRadius: "5px", margin: "5px" }}
              />
              <p>{product.description}</p>

              {user && user.id === basket.userId && (
                <div className="basketButtons">
                  <button className="delProdBtn" data-id={product.id}>
                    удалить
                  </button>
                  <button className="updateProdBtn" data-id={product.id}>
                    изменить
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>{" "}
      {user && user.id === basket.userId && (<button className="addProdBtn">добавить продуктов</button>)}
    </Layout>
  );
}

module.exports = BasketPage;
