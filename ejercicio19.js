let personaJSON = '{"nombre": "Luis", "edad": 25}';
let persona = JSON.parse(personaJSON);
persona.edad = 30;
let personaActualizadaJSON = JSON.stringify(persona);
console.log(personaActualizadaJSON);