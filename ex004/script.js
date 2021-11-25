function contar() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var seq = document.getElementById("seq").value
    var text = document.getElementById('text')
    var array = new Array()

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
    if (num1 >= num2) {
        text.innerHTML = `Impossivel fazer a contagem!`
    } else if (num1.length != 0 && num2.length != 0 && seq.length != 0) {
        while (num1 <= num2) {
            array.push(num1)
            num1 += seq
        }
        text.innerHTML = `${array}`
    }
    
}