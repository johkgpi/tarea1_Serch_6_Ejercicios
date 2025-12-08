// Create a program that loops over the 2 arrays; if there are any common courses print them 
// out to the console.
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Respuesta:

let cursosEnComun = student1Courses.filter(course => 
    student2Courses.includes(course)
);

console.log(cursosEnComun);

//esto solo es para la musica 
const music = document.getElementById("Lavender Theme");

music.muted = true;  
music.volume = 0.25;

document.addEventListener("click", () => {
    music.muted = false; 
    music.play();
}, { once: true });