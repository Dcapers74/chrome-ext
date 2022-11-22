let myLeads=[]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
renderLead()
})

function renderLead(){
let listItems = ""
for (let i = 0; i < myLeads.length; i++)
{
//listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>"+ myLeads[i] + "</a> </li>"
        //creating a template String use to backqtexts can use multiple lines
listItems += `<li>
 <a target='_blank' href="${myLeads[i]}"> ${myLeads[i]}
 </a>
  </li>`
}           
ulEl.innerHTML = listItems
}



let myArray = ["my","favorite","class"]

for (let i = 0; i < 3; i++){
console.log(myArray[i])
}