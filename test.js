// let boxBtn= document.getElementById("box")
// boxBtn.addEventListener("onclick",function(){
//     console.log("I want ot open the box!")
// })

// const container = document.getElementById("container")
//container.innerHTML = "<button> BUY! </button>"
//craete an element
//set text content
//append to container
// const button= document.createElement("button")
// button.textContent = "BUY!"
// container.append(button)

// container.addEventListener("click", function(){
//     container.innerHTML = "<p> Thank you for buying</p>"
// })

//-------- template strints/ literals ------------- //

const recipient = "James"
const sender = "Bijay"
// Refactor the email string to use template strings
//const email = "Hey" + recipient + "! How is it going? Cheers Bijay"

const email = `
        Hey ${recipient}! How is it going? Cheers ${sender}
`
console.log(email)