function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'midia/baby.png')
            } else if (idade >= 6 && idade <= 12) {
                img.setAttribute('src', 'midia/boy.png')
            } else if (idade >= 13 && idade <= 20) {
                img.setAttribute('src', 'midia/ten_M.png')
            } else if (idade >= 21 && idade <= 40) {
                img.setAttribute('src', 'midia/adult_M.png')
            } else if (idade >= 41 && idade <= 60) {
                img.setAttribute('src', 'midia/old_M.png')
            } else if (idade >=61) {
                img.setAttribute('src', 'midia/old_m.png')
            }
        } else if (fsex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade <= 5) {
                img.setAttribute('src', 'midia/baby.png')
            } else if (idade >= 6 && idade <= 12) {
                img.setAttribute('src', 'midia/girl.png')
            } else if (idade >= 13 && idade <= 20) {
                img.setAttribute('src', 'midia/ten_F.png')
            } else if (idade >= 21 && idade <= 40) {
                img.setAttribute('src', 'midia/adult_F.png')
            } else if (idade >= 41 && idade <= 60) {
                img.setAttribute('src', 'midia/old_F.png')
            } else if (idade >=61) {
                img.setAttribute('src', 'midia/old_w.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
        document.getElementsByTagName("img").src = ``
        res.appendChild(img)
        img.style.marginTop = `20px`

    }
}