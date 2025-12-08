// Complete the function to print out the string: This is a sentence.

let arr = ["This", "is", "a", "sentence.", "Hi", "Serch 🤖"];
function printOutString() {
  console.log( arr.join(" ") );
}

printOutString();

//esto solo es para la musica 
const music = document.getElementById("omori");

music.muted = true;  
music.volume = 0.4;

document.addEventListener("click", () => {
    music.muted = false; 
    music.play();
}, { once: true });
