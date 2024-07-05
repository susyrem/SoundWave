/* Edit: document.querySelector() -> document.form[] */
var formulario = document.forms["postingform" ]

/* Edit: .onsubmit -> .addEventListener("submit") */
formulario.addEventListener( "submit", (e) => {

  /* Edit: prevent -> preventDefault() */
  e.preventDefault();
  
  var n = formulario.elements[0];
  var m = formulario.elements[1];

  var name = n.value;
  var message = e.value;

  if (name.length === 0) {
    n.classList.add("error")
  }
  if (message < 1 || message > 120) {
    e.classList.add("error")
  }

if (name.length > 0 
  && (message > 18 
    && message < 120) ) {
  agregarPost(name, message)
  }
}
);

/* Remove: button */

/* Edit: Arrow function */
const agregarPost = (name, message) => {

var post = document.getElementById("sharedPost")

var elementPost = document.createElement("div")
/* Edit: added -> add */
elementPost.classList.add("element-post")
lista.appendChild(elementPost)


/* Edit: Arrow function */
const createElement = (description, value) => {
var spanName = document.createElement("span")
var espacio = document.createElement("br")
spanName.textContent = description + ": "
elementPost.appendChild(spanName)
elementPost.appendChild(espacio)
}

createElement("Username", name)
createElement("Post", message)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Delete Post"
botonBorrar.id = "btn-borrar"
var corteLinea = document.createElement("br")
elementPost.appendChild(corteLinea)
elementPost.appendChild(botonBorrar);

botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}