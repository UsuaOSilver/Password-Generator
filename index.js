let pwChar = ['1','3','4','T','d','0','x','X','p','z','y','Y','c','Z','$','*','#','@','%','!','^']
let numOption = 4;

let generateBtn = document.getElementById("gen-pw-button")
let option1 = document.getElementById("option-item-1")
let option2 = document.getElementById("option-item-2")
let option3 = document.getElementById("option-item-3")
let option4 = document.getElementById("option-item-4")
let options = [option1, option2, option3, option4]


function genPw() {
    for(let j = 0; j < numOption; j++) {
        options[j].textContent = ""
        for(let i = 0; i < pwChar.length; i++) {
            let randomIndex = Math.floor(pwChar.length * Math.random())
            options[j].textContent += pwChar[randomIndex]
        }
        console.log(options[j].textContent)
    }
}

generateBtn.addEventListener("click", genPw);

genPw()