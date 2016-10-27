
window.onload = function() {
    var ul=document.getElementsByTagName('ul')[0];
    var removeAll = document.getElementById('removeAll');
    var add = document.getElementById("add");
    add.onclick = function () {
        addLi(ul);
    }
    removeAll.onclick = function () {
        ul.innerHTML = '';
        toDoListCount();
    };
    
}


function addLi(targetUl) {
    var inputText = document.getElementById('text').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if (inputText.split(' ').join('').length === 0) {
        alert('No input');
        return false;
    }
    
    removeButton.className = 'removeMe';
    removeButton.innerHTML = ' DONE!';
    removeButton.setAttribute('onclick', 'removeMe(this);');
    removeButton.style.backgroundColor='#99abc4';
    
    li.style.fontSize="20px";
    
    li.appendChild(textNode);
    li.appendChild(removeButton);
    targetUl.appendChild(li);
    document.getElementById('text').value='';
    toDoListCount();
}

function removeMe(item){
    var parent = item.parentElement;
    parent.parentElement.removeChild(parent);
    toDoListCount();
}
function toDoListCount(){
    if(document.getElementsByTagName('li').length==0){
        document.getElementById('count').innerHTML="No items in your List";
    }
    else{
         document.getElementById('count').innerHTML="Number of items in your List: " +document.getElementsByTagName('li').length;
    }
}




