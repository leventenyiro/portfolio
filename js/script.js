function myAge() {
    let actualDate = new Date(Date.now())
    let myBirthDate = new Date(1999, 02, 25, 20, 25)
    
    let diff = new Date(actualDate.getTime() - myBirthDate.getTime())
    let age = diff.getUTCFullYear() - 1970

    document.getElementById("myAge").innerHTML = age
}

function toggleFontSize() {
    let isActive = document.getElementById("toggleFontSize").checked;
    if (isActive) {
        document.body.style.fontSize = "large"
    } else {
        document.body.style.fontSize = "medium"
    }
}