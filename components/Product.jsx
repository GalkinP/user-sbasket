const React = require("react");
const Layout = require("../components/Layout");

function Product({ product }) {
  return (
    <Layout>
      <div className="Product">
        <p>{product.name}</p>
        <img src={`${product.img}`} />
        <p>{product.description}</p>
      </div>
    </Layout>
  );
}

module.exports = Product;
