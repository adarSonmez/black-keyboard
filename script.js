const elements = document.querySelectorAll('[data-element]');
const space = document.querySelector('[data-space]');
const enter = document.querySelector('[data-enter]');
const capsLock = document.querySelector('[data-caps-lock]');
const backspace = document.querySelector('[data-backspace]');
const textArea = document.querySelector('#text-area');

class Keyboard {
    constructor() {
    }

    static write(button) {
        textArea.value = textArea.value + button.innerText.toString();
    }

    static delete() {
        textArea.value = textArea.value.toString().slice(0, -1);
    }

    static space() {
        textArea.value = textArea.value + " ";
    }

    static nextLine() {
        textArea.value += "\n";
    }

    static capsLock() {
        if (caps % 2 === 0) {
            elements.forEach(button => {
                button.innerHTML = button.innerHTML.toLocaleUpperCase();
            })
        } else {
            elements.forEach(button => {
                button.innerHTML = button.innerHTML.toLocaleLowerCase();
            })
        }

        caps++;
    }
}

let caps = 0;

// events
elements.forEach(button => {
    button.addEventListener('click', () => {
        Keyboard.write(button);
    })
})

backspace.addEventListener('click', () => {
    Keyboard.delete();
})

space.addEventListener('click', () => {
    Keyboard.space();
})

enter.addEventListener('click', () => {
    Keyboard.nextLine();
})

capsLock.addEventListener('click', () => {
    Keyboard.capsLock(caps);
})

// some music
let sound = new Audio();
sound.src = "media/disturbed.mp3";

document.addEventListener("click", function () {
    sound.play().then(r => nothing(r))
})

function nothing(r) {
    //nothing
}