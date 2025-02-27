import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

  

function generateExcuse () {
  const sujeto = ['yo', 'fui', 'estaba', 'mi perro', 'habia'];
  const accion = ['practicaba','hacia', 'jugaba', 'codificaba', 'mordio'];
  const donde = ['en codespace', 'el la sala','mi laptop', 'el cuarto','el cable',];
  const motivo = ['dañe el codigo', 'olvide', 'lo bote', 'en la laptop', 'cuando comia']; 

  let excuse = sujeto[Math.floor(Math.random() * sujeto.length)] + " " +
              accion[Math.floor(Math.random() * accion.length)] + " " +
              donde[Math.floor(Math.random() * donde.length)] + " " +
              motivo[Math.floor(Math.random() * motivo.length)] + "." 
           return excuse;
           
};
window.onload = function() { 
  
  const button = document.querySelector ("#Generar")
  if (button)  {
  button.addEventListener("click",function(){
  document.getElementById("excuse").innerHTML = generateExcuse();
}) 
  

  document.getElementById("excuse").innerHTML = generateExcuse();
};


  console.log(""); }
