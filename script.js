function calcular(){

    let dolar = parseFloat(document.getElementById("dolar").value);
    let yuca = parseFloat(document.getElementById("yuca").value);
    let maquila = parseFloat(document.getElementById("maquila").value);
    let kg = parseFloat(document.getElementById("kg").value);
    let carton = parseFloat(document.getElementById("carton").value);

    let costoKgYuca = yuca / 46;
    let costoKgMaquila = maquila / 46;

    let precio = (costoKgYuca + costoKgMaquila) * kg;

    let resultadoDolar = precio / dolar;

    let total = resultadoDolar + carton;

    document.getElementById("kgYuca").innerText = costoKgYuca.toFixed(2);

    document.getElementById("kgMaquila").innerText = costoKgMaquila.toFixed(2);

    document.getElementById("precio").innerText = precio.toFixed(2);

    document.getElementById("resultadoDolar").innerText = resultadoDolar.toFixed(2);

    document.getElementById("total").innerText = total.toFixed(2);

}
async function obtenerTipoCambio(){

    try{

        const response = await fetch(
            "https://api.exchangerate-api.com/v4/latest/USD"
        );

        const data = await response.json();

        const crc = data.rates.CRC;

        document.getElementById("dolar").value =
            crc.toFixed(2);

    }catch(error){

        alert("No se pudo obtener el tipo de cambio");

        console.log(error);

    }

}