let token;

function login() {
    const formData = new FormData(document.querySelector("#login"));
    const validationEmail = document.querySelector('#validation-email');
    const validationPassword = document.querySelector('#validation-password');
    const email = formData.get('correo');
    const password = formData.get('password');

    if (email == "") {
        validationEmail.innerText = ('Ingrese un correo valido');
    }

    if (password == "") {
        validationPassword.innerText = ('Ingrese su contraseña');
    }

    if (email != "") {
        validationEmail.innerText = ('');
    }

    if (password != "") {
        validationPassword.innerText = ('');
    }

    if (email && password != "") {
        let myHeaders = new Headers();

        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "correo": email,
            "password": password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            //redirect: 'follow'
        };

        fetch("http://localhost:3000/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                result = JSON.parse(result);
                console.log(result);
                if (result.message == "Unauthorized") {
                    alert(result.message);
                } else {
                    token = result.token;
                    localStorage.setItem("token", token);
                    location.href = "http://127.0.0.1:5500/index.html";
                }
            })
            .catch(error => console.log('error', error));
    }



}