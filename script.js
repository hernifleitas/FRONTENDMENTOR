let submit = document.getElementById("submit");
let parrafo = document.getElementById("parrafo" );
let container = document.getElementById("container");
let thankContainer = document.getElementById("thankContainer");
let res = 0

let options = document.querySelectorAll(".btn");

options.forEach((option) => {
    option.addEventListener("click", ()=>{
        res = option.value;
    })
})

submit.addEventListener("click", ()=>{
    parrafo.innerHTML = `You selected ${res} of 5 `
    container.style.display = "none";
    thankContainer.style.display = "flex"
})

