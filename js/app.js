// Function for intro text animation 
let i = 0;
let txt = 'Hi!  I  am   Kamil'; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    const textField = document.getElementById("intro-text");
    // textField.classList.add()
    if (i < txt.length) {
        textField.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
typeWriter();