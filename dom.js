
// QUERYSELECTOR //
var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';


var thirdItem = document.querySelector
('.list-group-item:nth-child(3)');
thirdItem.textContent='None'







// QUERYSELECTORALL //
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
odd[i].style.backgroundColor = '#f4f4f4';
}

var secondItem = document.querySelectorAll
('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';