let section1 = document.querySelector(".section1")
let section2 = document.querySelector(".section2")
let section3 = document.querySelector(".section3")
let section4 = document.querySelector(".section4")
let section5 = document.querySelector(".section5")
let section6 = document.querySelector(".section6")
let password = document.querySelector("#password")
let amount = document.querySelector("#amount")
let beep = new Audio("beep.mp3")

let section1Btn = document.getElementById("startBtn")
let section2Btn = document.getElementById("section2")
let section3Btn = document.getElementById("section3")
let section4Btn = document.getElementById("section4")


section1Btn.addEventListener('click', () => {
    section1.style.visibility = "hidden"
    section1.style.opacity = "0"
    section2.style.display = "block"
})
section2Btn.addEventListener('click', () => {
    section2.style.visibility = "hidden"
    section2.style.opacity = "0"
    section3.style.display = "block"
})
section3Btn.addEventListener('click', () => {
    section3.style.visibility = "hidden"
    section3.style.opacity = "0"
    if (password.value == "") {
        alert("Enter Value Please")
        section3.style.visibility = "visible"
        section3.style.opacity = "1"
    }
    else {
        section4.style.display = "block"
    }
})
section4Btn.addEventListener('click', () => {
    section4.style.visibility = "hidden"
    section4.style.opacity = "0"
    if (amount.value == "") {
        alert("Enter Value Amount")
        section4.style.visibility = "visible"
        section4.style.opacity = "1"
    }
    else if (amount.value % 500 == "0") {
        setTimeout(() => {
            section6.style.display = "block"
        }, 3000)
        setTimeout(() => {
            beep.play()
        }, 5000);
        section5.style.display = "block"
    }
    else if (amount.value % 500 != "0") {
        alert("Enter Amout Multiple of 500")
        section4.style.visibility = "visible"
        section4.style.opacity = "1"
    }
    else {
        section5.style.display = "block"
    }

})