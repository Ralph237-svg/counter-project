let display = document.getElementById("display");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset =  document.getElementById("reset");
let count = 0;

increase.addEventListener("click", () =>{
    count <= display.value;
    count++;
        display.value= count;
});

decrease.addEventListener("click", () =>{
    count--;
    display.value = count;
});

reset.addEventListener("click", () =>{
    count = 0;
    display.value = count;
});

