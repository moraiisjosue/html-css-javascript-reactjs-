function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h2.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const ligthMode = "Ligth Mode";
    const darkMode = "Dark Mode";
    if(body.classList.contains(darkModeClass)){
        h2.innerHTML = darkMode + " ON";
        button.innerHTML = ligthMode;
        return;
    } 
    h2.innerHTML = ligthMode + " ON";
    button.innerHTML = darkMode;
}

const darkModeClass = 'dark-mode';
const button = document.getElementById('select-mode');
const h2 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);