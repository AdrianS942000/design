console.log("cześć!");

let przycisk = document.querySelector(".przycisk");
let tresc = document.querySelector(".tresc");

przycisk.addEventListener("click", () => {

    tresc.remove();
});

