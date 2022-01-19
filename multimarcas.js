
let multimarcas= "multimarcasHouse"
let carro= [{
    codigo: 1,
    marca: "VW",
    Modelo:"Gol",
    Ano: 2015,
AntigosDonos: ["Joao", "Francisco"],
Vendido: true
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
let novoCarro={
codigo,
marca,
Modelo,
Ano,
AntigosDonos,
Vendido,
}
carro.push(novoCarro)
}
// adicionarCarro(3,"VW","Fusca",1990,"Maria",false)




function buscarCarro(busca){
     for(let i=0;i<carro.length;i++){

        if(carro[i].codigo==busca){
    console.log(carro[i])

} 
else{
    console.log("Codigo não encontrado")
}
     }
 } 

// buscarCarro(6)

function alterarStatusVendido(id){
    for(let i=0;i<carro.length;i++){
        if(carro[i].codigo== id){
carro[i].Vendido = !carro[i].Vendido
        }
    }

}


alterarStatusVendido(1)
console.log(carro[0])

