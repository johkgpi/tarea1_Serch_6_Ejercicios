/*
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log("Inicio:", people);

// 1. Imprimir todos
console.log("Estos son los OG:", people.join( ", " ));

// 2. 💀 Dani
people.splice(people.indexOf("Dani"), 1);
console.log("Dani 💀 quedan:", people.join( ", " ));

// 3. 💀 Juan
people.splice(people.indexOf("Juan"), 1);
console.log("Juan 💀 quedan:", people.join( ", " ));

// 4. Mover a Luis al inicio
let luis = people.splice(people.indexOf("Luis"), 1)[0];
people.unshift(luis);
console.log("Luis paso a enfrente el orden es:", people.join( ", " ));

// 5. Llego yo
people.push("Johan");
console.log("Ya llegue ahora somos:", people.join( ", " ));

// 6. Loop para Maria
console.log("Paso 6 (loop hasta Maria):");
for (let i = 0; i < people.length; i++) {
    console.log("  -", people[i]);
    if (people[i] === "Maria") break;
}

// 7. Donde esta Maria
console.log("Ahora Mari esta:", people.indexOf("Maria"));

console.log("Quedamos asi:", people.join( ", " ));



//esto solo es para la musica 
const music = document.getElementById("Tokyo Daylight");

music.muted = true;  
music.volume = 0.10;

document.addEventListener("click", () => {
    music.muted = false; 
    music.play();
}, { once: true });