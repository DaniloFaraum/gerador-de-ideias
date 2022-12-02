const coisa = ["Um cozinheiro","Um ninja","Eduardo Zavati","Um ladrão","Um alienigena","He-Man","Saul Goodman","Um homem cenoura"]
const acao = ["se escondendo","perdido","caindo do céu","no telefone","correndo","comendo pão de queijo"]
let pressed = 0
let multi1 = 8
let multi2 = 7

function gerar(){
    let random1 = parseInt(Math.random()*multi1)
    let random2 = parseInt(Math.random()*multi2)
    let coisaCerta = coisa[random1]
    let acaoCerta = acao[random2]
    document.getElementById("ideia1").textContent = coisaCerta
    document.getElementById("ideia2").textContent = acaoCerta
}

function personagem(){
    document.getElementById("field").innerHTML = '<input placeholder="Insira o personagem" id="campo"></input> <button id="confirmar" onclick=personagem2()>Confirmar</button>'

}

function personagem2(){
    let texto = document.getElementById("campo").value 
    coisa.push(texto)
    multi1++
    document.getElementById("field").innerHTML = ""
    console.log(coisa)
}

function acaos(){
    document.getElementById("field").innerHTML = '<input placeholder="Insira a ação" id="campo2"></input> <button id="confirmar2" onclick=acaos2()>Confirmar</button>'
}

function acaos2(){
    let texto2 = document.getElementById("campo2").value 
    acao.push(texto2)
    multi2++
    document.getElementById("field").innerHTML = ""
    console.log(acao)
}
