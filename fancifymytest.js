const textAreaElement = document.getElementById("inputTextArea") 
const fancifyRadioElement = document.getElementById("fancyShmancy")
const boringRadioElement = document.getElementById("boringBetty")

function onClickBig(){
    document.getElementById("inputTextArea").style.fontSize = "24pt"
    isBig = true
}

function onClickMoo(){
    let text = textAreaElement.value
    text = text.toUpperCase()
    let sentences = text.split(".")
    let mooifyText = sentences.join("-Moo.")
    textAreaElement.value = mooifyText
    isMooified = true
}

fancifyRadioElement.addEventListener('change', ()=>{
    textAreaElement.style.color = "blue"
    textAreaElement.style.fontWeight = "bold"
    textAreaElement.style.textDecoration = 'underline'
})

boringRadioElement.addEventListener('change', ()=>{
    textAreaElement.style.color = "black"
    textAreaElement.style.fontWeight = "normal"
    textAreaElement.style.textDecoration = ''
})

function onChange(){
    //const text = textAreaElement.textContent
    alert("Style of text changed")
}