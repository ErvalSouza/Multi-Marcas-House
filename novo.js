let multimarcas= "multimarcasHouse"
let carro= [{
    codigo: 1,
    marca: "VW",
    Modelo:"Gol",
    Ano: 2015,
AntigosDonos: ["Joao", "Francisco"],
Vendido: false
},
{
    codigo: 2,
    marca: "Honda",
    Modelo:"Civic",
    Ano: 2019,
AntigosDonos: ["Maria"],
Vendido: true  
}]


function adicionarCarro(codigo,marca,Modelo,Ano,AntigosDonos,Vendido){
    let novoCarro={codigo,
    marca,
    Modelo,
    Ano,
    AntigosDonos,
    Vendido
}
carro.push(novoCarro)
}
adicionarCarro(3,"VW", "DE",2019,["JO"],false)
// console.log(carro)

function buscarCarro(id){
    for(let i=0; i<carro.length;i++){
if(carro[i].codigo== id){
    console.log(carro[i])
}
    }
}
// buscarCarro(1)

function alterarStatusVendido(id){
    for(let i=0;i<carro.length;i++){
        if(carro[i].codigo==id){
            carro[i].Vendido = !carro[i].Vendido
        }
    }
}
console.log(carro)
alterarStatusVendido(1)
console.log(carro[0])