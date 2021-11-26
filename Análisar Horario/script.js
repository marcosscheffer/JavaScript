function reload() {
    var date = new Date
    var hour = date.getHours()
    var min = date.getMinutes()
    var img = document.getElementById("img")
    var text = document.getElementById("text")
    text.innerHTML = `Agora são ${hour}:${min}`
    if (hour >= 6 && hour <= 11) {
        img.src = "./midia/morning.png"
        document.body.style.background = "sky"
    } else if (hour >= 12 && hour <=19) {
        img.src = "./midia/evening.png"
        document.body.style.background = "yellow"
    } else {
        img.src = "./midia/night.png"
        document.body.style.background = "grey"
    }
}