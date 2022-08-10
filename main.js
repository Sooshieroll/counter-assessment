let results = 0;

let input = document.getElementById('input');
let total = document.getElementById('number');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');


add.addEventListener('click', function () {
    results = parseInt(total.innerHTML) + parseInt(input.value);
    if (results > -1) {
        total.style.color = "black";
    } else {
        total.style.color = "red";
    }
    total.innerHTML = results;
})

subtract.addEventListener('click', function () {
    results = parseInt(total.innerHTML) - parseInt(input.value);
    if (results > -1) {
        total.style.color = "black";
    } else {
        total.style.color = "red";
    }
    total.innerHTML = results;
})



