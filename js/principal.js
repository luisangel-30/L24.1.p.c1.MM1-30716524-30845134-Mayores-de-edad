import CL_persona from "./CL_persona.js";
import CL_reporte from "./CL_reporte.js";

let perso1 = new CL_persona("Luis", 15);
let perso2 = new CL_persona("Ana", 19);
let perso3 = new CL_persona("José", 21);
let perso4 = new CL_persona("Carmen",17);
let perso5 = new CL_persona("Rosa", 18);
let perso6 = new CL_persona("José", 22);
let perso7 = new CL_persona("Maria", 17);
let perso8 = new CL_persona("Luz", 19);
let perso9 = new CL_persona("Rafael", 23);
let perso10 = new CL_persona("Liz", 15);
let perso11 = new CL_persona("Marcos", 20);
let perso12 = new CL_persona("Leo", 16);

let reporte = new CL_reporte();

reporte.procesarpersonas(perso1);
reporte.procesarpersonas(perso2);
reporte.procesarpersonas(perso3);
reporte.procesarpersonas(perso4);
reporte.procesarpersonas(perso5);
reporte.procesarpersonas(perso6);
reporte.procesarpersonas(perso7);
reporte.procesarpersonas(perso8);
reporte.procesarpersonas(perso9);
reporte.procesarpersonas(perso10);
reporte.procesarpersonas(perso11);
reporte.procesarpersonas(perso12);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> cantidad de personas: ${reporte.devolverpersonas()}
<br> cantidad de personas mayor de edad: ${reporte.devolvermayor()}
<br> porcentaje de perspnas mayor de edad: ${reporte.porcentaje().toFixed(2)}%
`;