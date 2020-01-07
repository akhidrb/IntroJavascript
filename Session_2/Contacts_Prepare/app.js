var names = []
var numbers = []
function addProfile() {
    var name = window.prompt("Enter name:");
    var number = window.prompt("Enter number:");
    names.push(name)
    numbers.push(number)
    displayProfile(name, number);
}

function displayProfile(name, number) {
    var parent = document.getElementById('contactsList')
    var child = document.createElement('div');
    var p = document.createElement('p');
    var button = document.createElement('button');
    var str = "Name: " + name + ", Number: " + number; 
    p.innerHTML = str;
    button.id = "delete-"+name;
    button.innerHTML = "Delete";
    button.onclick = function() {deleteProfile(name)};
    child.id = name;
    child.appendChild(p);
    child.appendChild(button);
    parent.appendChild(child);
}

function deleteProfile(buttonId){
    var elem = document.getElementById(buttonId);
    elem.remove();
}