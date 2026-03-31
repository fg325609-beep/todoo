
function addTodo(){
    const input = document.getElementById("input")
    const list = document.getElementById("list")

    if (event) event.preventDefault();
    if (input.value === "") return
    
    
    let li = document.createElement("li");
    li.textContent = input.value;
    
    let btn = document.createElement("button")
    btn.textContent = "delete"
    
    btn.onclick = function(){
        li.remove();
        
    }

    li.appendChild(btn);
    list.appendChild(li)
}