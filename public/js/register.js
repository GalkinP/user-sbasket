const message1 = document.querySelector('.message1')
if (regForm) {
  regForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const { name, email, password, role } = event.target;

    const data = {
      name: name.value,
      email: email.value,
      password: password.value,
      role: role.value,
    };

    if (data.name.trim() === "" ||data.email.trim() === "" ||data.password.trim() === "" ||data.role.trim() === "") {message1.innerHTML="заполните поля корректно";
    return;
  }

  try {
    const response = await fetch("/auth/reg", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json();
    // console.log(body);
    if (body.success) {
        authForm.setAttribute("style", "display: block;");
        regForm.setAttribute("style", "display: none;");
    } else {
      message1.innerHTML = body.error;
    }
  } catch (error) {
    console.log(error);
  }





  });
}
