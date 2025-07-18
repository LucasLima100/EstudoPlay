function Menu() {

    const menu = document.getElementById("dropdown")
    menu.style.display = menu.style.display === "block" ? "none" : "block";
    
    
    }

    let imagems = ["Imagens/img2.jpeg", "Imagens/img3.jpeg", "Imagens/img.jpeg"];
    let index = 0;
    let intervalo;

function iniciarCarrossel() {

intervalo = setInterval(() => {

index = (index + 1) % imagems.length;
document.getElementById("imgs").src = imagems[index];
}, 2000);
 }

 iniciarCarrossel();

 document.getElementById("imgs").addEventListener("click", () => {
    clearInterval(intervalo);
    setTimeout(() => {
        iniciarCarrossel();
    }, 2500)
 });