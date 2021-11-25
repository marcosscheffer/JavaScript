function contar() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var seq = document.getElementById("seq").value
    var text = document.getElementById('text')
    text.innerHTML = `Contando: `

    if (num1.length == 0) {
        alert("Por favor preencha o campo de COMEÇO!")
    } else if (num2.length == 0) {
        alert("Por favor preencha o campo de FINAL!")
    } else if (seq.length == 0) {
        alert("Por favor preencha o campo de SEQUENCIA!")
    } 

    num1 = Number(num1)
    num2 = Number(num2)
    seq = Number(seq)
    if (num1 >= num2 || seq == 0) {
        text.innerHTML = `Impossivel fazer a contagem!`
    }else if (num1.length != 0 && num2.length != 0 && seq.length != 0) {
        for (let c = num1; c <= num2; c += seq) {
            text.innerHTML += `${c} \u{1F449}`
        }
        text.innerHTML += `\u{1F3C1}`
    }
}