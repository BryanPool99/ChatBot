//variables
const btnIniciarSesion=document.querySelectorAll(".btnIniciarSesion");
const btnCrearCuenta=document.querySelectorAll(".btnCrearCuenta");
const asideLogin=document.getElementById("section-login");
const asideRegister=document.getElementById("section-register");
const btnsChange=document.querySelectorAll(".btnChangeIPT");
const iconChange=document.querySelectorAll(".btnChangeIPT ion-icon");
const passwordInputs = document.querySelectorAll('input[type="password"]');

//evnts
btnCrearCuenta.forEach(e => {
    e.addEventListener("click",()=>{
        console.log("di click");
        asideRegister.style.display="block";
        asideLogin.style.display="none";

    })
});
btnIniciarSesion.forEach(e => {
    e.addEventListener("click",()=>{
        console.log("di click");
        asideLogin.style.display="block";
        asideRegister.style.display="none";
    })
});
let iconState = []; 
for (let i = 0; i < iconChange.length; i++) {
    iconState[i] = false; // Inicializamos cada icono en su estado inicial
    iconChange[i].addEventListener("click", function() {
      if (!iconState[i]) {
        iconChange[i].setAttribute("name", "eye-outline");
        passwordInputs[i].setAttribute("type", "text"); // Convertimos el input de tipo password a tipo text
      } else {
        iconChange[i].setAttribute("name", "eye-off-outline");
        passwordInputs[i].setAttribute("type", "password"); // Convertimos el input de tipo text a tipo password
      }
      iconState[i] = !iconState[i]; // Alternamos el estado del icono
    });
  }