// //indexOf

// let stringExemplo= "Aprendendo JavaScript"

// console.log(stringExemplo.indexOf("e"))
 

// // slice

//  let  nome = "João José da Silva Xavier";
//  console.log(nome.slice(5))
  
 
//  //trim
//   let stringExemplo = "  Aprendendo JavaScript!  "
//   console.log(stringExemplo.trim())
 

//   // splite
//  let stringExemplo = "João da Silva Oliveira";
//  console.log(stringExemplo.split(" "))


//  // replace
//  let exemplo = "JavaScript é na Digital House!";
// console.log(exemplo.replace("JavaScript", "Java"))

// arrow function
//  let total = (a,b) => {
//      return a+b
//     }

//  console.log(total(2,2))

// if else

// let saldo = 10
// // if(saldo > 0){
// //     console.log("Seu saldo está positivo! Gostaria de fazer um investimento?")

// // }else {
// //     console.log("Seu saldo está negativo! Gostaria de fazer um empréstimo?")
// // }

// saldo>0? console.log("Positivo") : console.log("Negativo")

 
// switch case


// let dia= "terça"

// function fimDeSemana(dia){
// switch (dia) {
//     case "segunda":
//         case "quarta":
//             case "sexta":
//     console.log("Voce tem aula")
//         break;

//     default:
//         console.log("Voce não tem aula")
//         break;
// }
// }
//   fimDeSemana(dia)

// if else

// let dia = 'segunda-feira'
// function fimDeSemana(dia) {
//     if (dia == 'sexta-feira') {
//         console.log('Bom fim de semana!');
//     } else if (dia == 'segunda-feira') {
//         console.log('Boa semana!');
//     } else {
//         console.log('Bom dia!');
//     }
// }

// switch

// let dia= "segunda"
// function fimDeSemana(dia){
// switch (dia) {
//     case "sexta":
//         console.log("Bom fim de Semana")
//         break;
//         case "segunda":
//             console.log("Boa Semana")
//             break;
        

//     default:
//         console.log("Bom Dia")
//         break;
// }
// }
// fimDeSemana(dia)



// for
// for(let i=1; i<=10;i++){
//  let res=  i*5
//   console.log(res)  
// }
 


// for
// let listaDeCarros= ["Fox","Uno","Gol","Astra","Fiesta"]
// for(let i=0; i<listaDeCarros.length;i++){
//     let carrosBuscados= listaDeCarros[i]
//     console.log(carrosBuscados)
// }


// let listaDeLucro = [100, 30, 300, -10, 600, 10]
// let lucroTotal = 0;
// for(let i=0;i<listaDeLucro.length;i++){
// lucroTotal+=listaDeLucro[i]
// }
// console.log(lucroTotal)


// let listaDeLucros= [100,30,300,-10,600,10]

// let reduzido= (vInicial, vAtual)=> vInicial+vAtual



//  console.log(listaDeLucros.reduce(reduzido))

// map

// let vencedores = [
//     {
//         nome : "Equipe Super",
//         pais : "Brasil"
//     },
//     {
//         nome : "Time Maximo",
//         pais : "EUA"
//     },
//     {
//         nome : "Mega Grupo",
//         pais : "Canadá"
//     }
//  ];

//  let copiados= vencedores.map(Vi => Vi.pais)
//  console.log(copiados)

// foreach

// const paises = ['Argentina', 'Brasil', 'Colombia'];


// paises.forEach(valor=> console.log(valor))

// for in
var pessoa = {
	nome: 'Guilherme',
	idade: 23
};

for(let valor in pessoa){
console.log(pessoa[valor])
}




// Callback

// function aplicar(num){
//     console.log(num)
// }

// function dobro(n1,cb){
// let op=n1*2
// cb(op)
// }
// function triplo(n1,cb){
//     let op=n1*3
//     cb(op)
//     }
    
// dobro(10,aplicar)
// triplo(10,aplicar)

