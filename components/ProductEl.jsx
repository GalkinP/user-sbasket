const React = require("react");


function ProductEl({ product }) {
  return (
      <div className="Prod">
        <p>{product.name}</p>
        <img src={`${product.img}`} />
        <p>{product.description}</p>
      </div>
  );
}

module.exports = ProductEl;
