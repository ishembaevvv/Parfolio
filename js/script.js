// TYPED EFFECT
let typed = new Typed('#typed', { 
    stringsElement: '#typed-strings', 
    typeSpeed: 100, 
    startDelay: 500, 
    backSpeed: 50, 
    loop: true 
});


// SWITCH MODE
let switchMode = document.getElementById('shitchMode');

switchMode.addEventListener('click', () => {
    let theme = document.getElementById('theme');

    if (theme.getAttribute('href') == "./css/style.css") {
        theme.href = "./css/lightMode.css";
        switchMode.innerHTML = "☀";
    } else {
        theme.href = "./css/style.css";
        switchMode.innerHTML = "☾";
    }
})