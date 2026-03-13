async function send(){

let input = document.getElementById("input")
let msg = input.value

let chat = document.getElementById("chat")

chat.innerHTML += "<p><b>Tu:</b> "+msg+"</p>"

input.value=""

let response = await fetch("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",{
method:"POST"
})

let data = await response.json()

chat.innerHTML += "<p><b>IA:</b> "+data.reply+"</p>"

}
