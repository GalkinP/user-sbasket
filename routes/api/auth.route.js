const router = require("express").Router();
const bcrypt = require("bcrypt");
const cookiesConfig = require('../../config/cookiesConfig')
const { User } = require("../../db/models");
const { generateTokens } = require("../../utils/authUtils");

//РЕГИСТРАЦИЯ

router.post("/reg", async (req, res) => {
  const { name, email, password, role } = req.body;

  if (
    name.trim() === "" ||
    email.trim() === "" ||
    password.trim() === "" ||
    role.trim() === ""
  ) {
    res.status(400).json({ success: false, message: "Заполните все поля" });
  }

  try {
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) {
      return res
        .status(400)
        .json({ success: false, error: "mail уже занят" });
    }

    const hash = await bcrypt.hash(password, 10);
    const userInDb = await User.create({ name, email, password: hash, role });





    const { accessToken, refreshToken } = generateTokens({
    
      user: { id: userInDb.id, email: userInDb.email, name: userInDb.name },
    });


    res
      .cookie(cookiesConfig.refresh, refreshToken, {
        maxAge: cookiesConfig.maxAgeRefresh,
        httpOnly: true,
      })
      .cookie(cookiesConfig.access, accessToken, {
        maxAge: cookiesConfig.maxAgeAccess,
        httpOnly: true,
      })


    res.json({
      success: true,
      message: `Пользователь ${userInDb.name} успешно зарегистрирован`,
    });
  } catch (message) {
    console.error(message);
    res.status(500).json({ success: false, error: "Ошибка на сервере" });
  }
});




// АВТОРИЗАЦИЯ

router.post("/log", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userInDb = await User.findOne({ where: { email } });

    if (!userInDb) {
      return res
        .status(400)
        .json({ success: false, message: "Такого пользователя не существует" });
    }

    const check = await bcrypt.compare(password, userInDb.password);
    if (!check) {
      return res
        .status(400)
        .json({ success: false, message: "Неправильный пароль" });
    }

    const { accessToken, refreshToken } = generateTokens({
      user: { id: userInDb.id, name: userInDb.name, email: userInDb.email },
    });




    res.cookie("access", accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie("refresh", refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ success: true, message: "success" });
  } catch ({ message }) {
    res.status(500).json({ success: false, message: "error" });
  }
});

// ВЫХОД

router.get("/logout", (req, res) => {
  res.clearCookie("refresh").clearCookie("access");
  res.locals.user = undefined;
  res.redirect("/");
});

module.exports = router;
