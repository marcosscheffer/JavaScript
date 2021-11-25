function calc() {
    let num1 = document.getElementById("txtn").value
    let txt = document.getElementById("res")
    txt.innerHTML = `<option>Resultado:</option>`
    
    if(num1.length == 0) {
        alert("Por favor preencha o campo!")
    } else {
        num1 = Number(num1)
        for (let c = 0; c <= 10; c++) {
            let cont = document.createElement('option')
            cont.text = `${num1} X ${c} = ${num1*c}`
            txt.appendChild(cont)
        }
    }
}