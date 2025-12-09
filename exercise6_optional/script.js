
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true;
            }
        }
        n--;

    } while (swapped);

    return arr;
}


document.getElementById("btnBurbuja").addEventListener("click", () => {
    
    let input = document.getElementById("inputNumeros").value;

    if (input.trim() === "") {
        alert("Pon números carnal 😭");
        return;
    }

    
    let arr = input.split(",").map(num => Number(num.trim()));

    if (arr.some(isNaN)) {
        alert("Solo números separados por comas, compa 🙏");
        return;
    }

    let resultado = bubbleSort(arr);

    document.getElementById("resultado").value = resultado.join(", ");
});

//esto solo es para la musica 
const music = document.getElementById("Soft and Wet");

music.muted = true;  
music.volume = 0.2;

document.addEventListener("click", () => {
    music.muted = false; 
    music.play();
}, { once: true });