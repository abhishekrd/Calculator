const toggle = document.getElementById('toggle');
const container = document.getElementById('container');
const section = document.querySelector('section');
toggle.onclick = function () {
    toggle.classList.toggle('active');
    section.classList.toggle('active');
    container.classList.toggle('active');
}



let input = document.getElementById('input');
let result = document.getElementById('output');
function calculate(value) {
    switch (value) {
        case "AC":
            input.innerHTML = "";
            output.innerHTML = 0;
            break;

        case "C":
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1);
            output.innerHTML = math.evaluate(`${input.innerHTML}`) === undefined ? 0 : math.evaluate(`${input.innerHTML}`);
            break;

        case "=":
            output.innerHTML = math.evaluate(`${input.innerHTML}`);
            break;

        default:
            input.innerHTML += value;
    }


}