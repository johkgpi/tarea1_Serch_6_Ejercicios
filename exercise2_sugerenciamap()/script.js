/*Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
*/

const arrayMultiplication = (arr) => {
    const arrayMulty = arr.map( num => num * 2 );
    console.log( arrayMulty );
};

const arrayIncome = [1, 2, 3, 4, 5];
arrayMultiplication( arrayIncome );

//esto solo es para la musica 
const music = document.getElementById("spiritedaway");

music.muted = true;  
music.volume = 0.4;

document.addEventListener("click", () => {
    music.muted = false; 
    music.play();
}, { once: true });

