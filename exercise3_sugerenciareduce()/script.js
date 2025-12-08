/*
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

const inputNumeros = document.getElementById("numeros");
const btnCalcular = document.getElementById("calcular");
const spanSuma = document.getElementById("resultado-suma");
const spanMultiplicacion = document.getElementById("resultado-multi");


const procesarNumeros = (listaNumeros) => {

    
    const suma = listaNumeros.reduce( ( acc, num ) => acc + num, 0 );

    
    const multiplicacion = listaNumeros.reduce( ( acc, num ) => acc * num, 1 );

    return { suma, multiplicacion };
};



btnCalcular.addEventListener("click", () => {


    const texto = inputNumeros.value;

    const arreglo = texto.split( "," ).map( n => parseFloat( n.trim () ) );

    
    if ( arreglo.some( isNaN ) ) {
        alert( "Escribe solo números separados por comas, carnal." );
        return;
    }

    
    const { suma, multiplicacion } = procesarNumeros( arreglo );


    spanSuma.textContent = suma;
    spanMultiplicacion.textContent = multiplicacion;

    // Probando que todo jale
    console.log( "Array:", arreglo );
    console.log( "Suma:", suma );
    console.log( "Multiplicación:", multiplicacion );
});


//esto solo es para la musica 
const music = document.getElementById( "Its Raining" );

music.muted = true;  
music.volume = 0.4;

document.addEventListener( "click", () => {
    music.muted = false; 
    music.play();
}, { once: true });