

let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl= document.getElementById("ul-el")
const body = document.getElementById("body")


inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value= ""
    renderLeads()
    
})

function renderLeads(){
    let listItems = ""
    for ( i = 0; i < myLeads.length; i ++){
        //ulEl.innerHTML += "<li>" + myLeads[i] +"</li"
        //create a element
        //set text content
        //append to ul
        // const li=  document.createElement("li")
        // li.textContent=myLeads[i]
        // ulEl.append(li)
        // listItems += "<li><a target= '_blank' href= '" + myLeads[i] +"'>"+ myLeads[i] + "</a></li>"
        listItems += `
            <li>
                <a target= '_blank' href= '${myLeads[i]}'> 
                ${myLeads[i]}
                </a>
            </li>
        `
    

    }
    ulEl.innerHTML = listItems
}


