const express = require('express');
const cookieParser = require('cookie-parser');
const fileupload=require('express-fileupload')
const ssr = require('../middleware/ssr');
const { verifyAccessToken } = require('../middleware/verifyTokens');
const { checkUser } = require('../middleware/auth');
const morgan = require('morgan')

const config = (app) => {

  app.use(morgan('dev'))

  app.use(fileupload());

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  app.use(ssr);
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(checkUser);
};

module.exports = config;
