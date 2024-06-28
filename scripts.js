function ejercicio1(a=0, b=0, operacion="suma") {
   switch (operacion) {
      case "suma":
         return console.log(a + b);
      case "resta":
         return console.log(a - b);
      case "multiplicacion":
         return console.log(a * b);
      case "divicion":
         return console.log(a / b);
      default:
         console.error(`La operacion ${operacion} no es valida`);
   }
}



function ejercicio2(a=0, b=0) {
   let nums = [];
   for(let i = a ; i <=b; i++){
      if(i % 2 == 0) nums.push(i)
   }
console.log(nums);
}

function ejercicio3(a=0, x=12){
   let result;
   for(i = 0; i <= x; i++){
      result = a * i;
      if(i!== 5)console.log(`${a} x ${i} = ${result}`);
   }
}

function ejercicio4(){
   let nums = [];
   let multiplos = [];
   for(let i = 1; i <= 100; i++){
      nums.push(i);
   }
   console.log(`este es el areglo principal ${nums}`);
   nums.filter((index)=> {if(index % 3 === 0) multiplos.push(index)
   });
   console.log(`esto son los numeros multiplos de 3 ${multiplos}`);
}

function ejercicio5(){
   let num = Math.floor(Math.random() * (1000 - 1) + 1);
   let mitad = num / 2;
   let doble = num * 2;
   let raiz = Math.sqrt(num);
   console.log(`el numero generado es ${num}, su mitad es ${mitad}, su doble es ${doble} y su raiz es ${raiz} `);
}

function ejercicio6(a = "monday 19 August 2022"){
   let cumple = new Date(a);
   let hoy = new Date();
   let dia = Math.floor((cumple.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));
   console.log(cumple, hoy);
   console.log(dia);
}

function ejercicio7(text="hola mundo"){
   let word = text.split(" ")
   console.log(word);
}

function ejercicio8(){
   const personas = [
      {
         nombre: "juan",
         apellido: "perez",
         edad: 19
      },
      {
         nombre: "marta",
         apellido: "zapata",
         edad: 30
      },
      {
         nombre: "juan",
         apellido: "mora",
         edad: 16
      },
      {
         nombre: "carlos",
         apellido: "montiel",
         edad: 15
      },
   ]
   console.log(personas);
   personas.filter((index)=>{
      if(index.nombre === "juan") console.log(`${index.nombre} ${index.apellido}`);
   });
   personas.filter((index)=>{
      if(index.edad >= 18) console.log(`${index.nombre} ${index.apellido} ${index.edad}`);
   })
}

function ejercicio9(open="", close=""){
   if(open === "" || close === "") console.log("Faltan Parametros");
   else{
      let today = new Date();
         testOpen = new Date(open);
         testCloses = new Date(close);
      
      let resulOpen = Math.floor((testCloses.getTime() - testOpen.getTime()) / (1000 * 60));
      let resulTime = Math.floor((testOpen.getTime() - today.getTime()) / (1000 * 60));

      if(testCloses.getTime() < today.getTime()) console.log("El examen ya cerro");
      else{
         if(resulTime > 0) console.log(`Faltan ${resulTime} minutos para que el examen abra`);
         else console.log("El examen esta abierto");
         console.log(`El examen durarar abierto ${resulOpen} minutos`);
      }
   }
}

function ejercicio10(){
   const num = [1, 2, 5, 8, 8, 1, 6, 5]

   let resul = num.filter((item, index)=>{
      return num.indexOf(item) === index
   });
   console.log(resul);
   
   //segunda forma
   let rest2 = new Set(num);
   console.log(rest2);
   let rest3 = [...arguments, ...rest2]
   console.log(rest3);
}
//ejecutar funcions!!
ejercicio10();