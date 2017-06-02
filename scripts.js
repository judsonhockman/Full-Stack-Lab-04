 var colors = ['black', 'blue', 'red', 'yellow', 'cyan', 'cyan'];
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.createElement("button");
    btn.innerText = "Add Square";
    btn.addEventListener('click', addSquare);

    // var body = document.getElementsByTagName("body")[0];
    document.body.appendChild(btn);

    var container = document.createElement('div');
    container.id = 'square-container';
    document.body.appendChild(container);

    function addSquare() {
        var existingSquares = document.getElementsByClassName('square').length;
        var sq = document.createElement('div');
        sq.className = 'square';
        sq.id = existingSquares;

        sq.addEventListener('click', changeColor);
        container.appendChild(sq);
        sq.addEventListener('mouseenter', insertId);
        sq.addEventListener('mouseleave', removeId);
        sq.addEventListener('dblclick', removeNeighbor);
    }

function changeColor(){
    //We can put an event in the () above. Like this:
    // function changeColor(event){
var index = Math.floor(Math.random() * colors.length);
var newColor = colors[index];
//We need to set newColor as the backgroundColor of the clicked div
this.style.backgroundColor = newColor;
//event.target.style.backgroundColor = newColor;
}

function insertId(){
    var id = this.id;
    this.innerText = id;
}

function removeId() {
this.innerText = '';
}

function removeNeighbor(){
    // if even remove the square after
    // if odd remove the square before
    var id = this.id;

    if (id % 2 === 0) {
// if even remove the square after
if (this.nextSibling) {
    this.nextSibling.remove();
} else {
    alert('There are no elements to the right to remove.');
}
    } else {
// if odd remove the square before
if (this.previousSibling) {
    this.previousSibling.remove();
     } else {
         alert ('There are no elements to the left to remove.');
     }
}
    }

});






// div
// width: 20em;
// length: 20em;
// color: black;

// var div = document.createElement("div");
// div.style.width = "20em";
// div.style.height = "20em";
// div.style.color = "black";
// div.innerHTML = "1";

// document.getElementById("main").appendChild(div);

 
