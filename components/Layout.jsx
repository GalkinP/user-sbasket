const React = require("react");
const Header = require('./Header')
const Registration = require("./Registration");
const Login = require("./Login");

module.exports = function Layout({ title, children, user}) {

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link rel="stylesheet" href="/css/styles.css" />
        <script defer src="/js/regButtons.js" />
        <script defer src="/js/register.js" />
        <script defer src="/js/auth.js" />
        <script defer src="/js/addBasketButtons.js" />
        <script defer src="/js/addBasket.js" />
        <script defer src="/js/removeBasket.js" />
        <script defer src="/js/updateBasket.js" />
        <script defer src="/js/addProdButtons.js" />
        <script defer src="/js/addProd.js" />
        <script defer src="/js/removeProd.js" />
      </head>
      <Header user={user}/>
      <Registration/>
      <Login/>
      <body>{children}</body>
    </html>
  );
};
