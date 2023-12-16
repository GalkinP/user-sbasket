
const aForm = document.querySelector('#login')
const message2 = document.querySelector('.message2')


if (aForm) {
  aForm.addEventListener("submit", async (event) => {
    event.preventDefault();


    const {email,password} = event.target
    const data = {
        email:email.value,
        password:password.value,
    }

if(data.email.trim()==='' || data.password.trim() === '') {
    message2.innerHTML='заполните поля корректно';
    return
}
try {

    const response = await fetch('/auth/log', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    })
const body = await response.json()
if (body.success) {
    window.location.href = '/';
}else{
    message2.innerHTML=body.message
}



} catch (error) {
    console.log(error);
}


  });
}
