let token = localStorage.getItem('token');
console.log(token);
let rifas = document.querySelector('.card-rifa');

var myHeaders = new Headers();
myHeaders.append("authorization", token);
myHeaders.append("Cookie", "connect.sid=s%3AB9xlh0YNKcHbeZT2qXDQyOVTkNuS5-XH.7eJT%2B3yxCYJzJ1ldPRuThMhN9imCWsZPcw222frcOnM");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

fetch("http://localhost:3000/rifas/", requestOptions)
    .then(response => response.text())
    .then(result => {
        result = JSON.parse(result);
        let a = "hola";
        let html = "";
        for (let i = 0; i < result.results.length; i++) {
            html += '<div class="card-contenido">';
            html += '<img src="./images/play5.jpeg" alt="play5"></img>';
            html += '<div class="datos-rifa">';
            html += '<p>' + result.results[i].nombre + '</p>';
            //html += '<p>Sony</p>';
            html += '<p>Fecha: ' + result.results[i].fecha + '</span></p>';
            html += '<p>Número de boletos: <span>' + result.results[i].boletos + '</span></p>';
            html += '<p>Precio boleto:<span> $' + result.results[i].precio + '</span></p>';
            html += '</div>';
            html += '<div class="descripcion-rifa">';
            html += '<p><span> Descripcion:</span></p>';
            html += '<p>' + result.results[i].descripcion + '</p>';
            html += '</div>';
            html += '<div class="btn-rifa">';
            html += "<button onclick='verBoletos(\"" + result.results[i]._id + "\")'>Compar boleto</button>";
            html += '</div>';
            html += '</div>';
        }

        // \" escape comillas

        rifas.innerHTML = html;
        console.log(result)
    })
    .catch(error => console.log('error', error));

function verBoletos(idRifa) {
    console.log(idRifa);

}