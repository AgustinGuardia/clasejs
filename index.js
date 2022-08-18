const ganador=3;
let entrada= prompt("Pense un numero del 1 al 10, intente adivinarlo:");
let numerodeintentos=0
while (entrada!=0) {
    numerodeintentos++
    if (ganador==entrada) {
        
        alert("¡Felicidades ganaste en el intento n°"+ numerodeintentos+"!");
        break;
    }
    else {
        entrada= prompt("A perdido, vuelva a intentarlo o ingrese 0 para rendirse:");
    }
}
if (entrada==0) {
    alert("Usted ha perdido")
}