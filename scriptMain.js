//esto solo es para la musica 
const music = document.getElementById( "Hyrule" );

music.muted = true;  
music.volume = 0.25;

document.addEventListener( "click", () => {
    music.muted = false; 
    music.play();
}, { once: true });