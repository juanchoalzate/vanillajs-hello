/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generadorexcusas();
  });

  console.log("Hello Juancho from the console! ");
};

let generadorexcusas = () => {
  let pronoun = ["Un", "El"];
  let subject = ["estudiante", "perro", "amigo", "conductor", "vecino"];
  let action = [
    "perdió mi",
    "dañó mi",
    "escondió mi",
    "rompió mi",
    "manchó mi"
  ];
  let possetion = ["libro", "teléfono", "llave", "computadora"];
  let where = ["en la escuela", "en mi casa", "en el trabajo", "en la calle"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjtIndx = Math.floor(Math.random() * subject.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let possetionindex = Math.floor(Math.random() * possetion.length);
  let whereindex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subjtIndx] +
    " " +
    action[actionindx] +
    " " +
    possetion[possetionindex] +
    " " +
    where[whereindex]
  );
};
