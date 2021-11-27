let lista = []
function add() {
    let num = document.getElementById("num")
    let list = document.getElementById("list")

    if (num.value.length == 0) {
        alert("Campo vazio!")
    } else if (num.value > 100) {
        alert("Número muito grande!")
    } else if (lista.length == 0) {
        let num1 = document.createElement("option")
        num1.text = `Valor ${num.value} adicionado!`
        list.appendChild(num1)
        lista.push(num.value)
    } else if (lista.indexOf(num.value) == -1) {
        let num1 = document.createElement("option")
        num1.text = `Valor ${num.value} adicionado!`
        list.appendChild(num1)
        lista.push(num.value)
    } else if (lista.indexOf(num.value) != -1) {
        alert("Valor já adicionado!")
    }
    num.value = ``
    num.focus()
}
function analise() {
    function maior(n) {
        for (let c = 0; c < n.length; c++) {
            if (c == 0) {
                var maiorn = n[c]
            } else {
                if (maiorn < n[c]) {
                    maiorn = n[c]
                }
            }
        }
        return maiorn
    }
    function menor(n) {
        for (let c = 0; c < n.length; c++) {
            if (c == 0) {
                var menorn = n[c]
            } else {
                if (menorn > n[c]) {
                    menorn = n[c]
                }
            }
        }
        return menorn
    }
    function media(n) {
        let soma = 0
        for (let c = 0; c < n.length; c++) {
            soma += Number(n[c])
        }
        soma /= n.length
        return soma
    }
    function soma(n) {
        let soma = 0
        for (let c = 0; c < n.length; c++) {
            soma += Number(n[c])
        }
        return soma
    }
    let txt = document.getElementById("res")
    txt.innerHTML += `O maior número é ${maior(lista)}<br>`
    txt.innerHTML += `O menor número é ${menor(lista)}<br>`
    txt.innerHTML += `A média dos números é ${media(lista)}<br>`
    txt.innerHTML += `A soma dos números é ${soma(lista)}<br>`
    txt.innerHTML += `Foram informados ${lista.length} números!`
}
