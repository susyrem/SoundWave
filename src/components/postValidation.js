/* Edit: document.querySelector() -> document.form[] */
var formulario = document.forms["postingform" ]

/* Edit: .onsubmit -> .addEventListener("submit") */
formulario.addEventListener( "submit", (e) => {

  /* Edit: prevent -> preventDefault() */
  e.preventDefault();
  
  var n = formulario.elements[0];
  var m = formulario.elements[1];

  var name = n.value;
  var message = m.value;

  console.log(name);
  console.log(message);

  if (name.length === 0) {
    n.classList.add("error")
  }
  if (message < 1 || message > 120) {
    e.classList.add("error")
  }

if (name.length > 0 
  && (message > 18 
    && message < 120) ) {
  addPost(name, message)
  }
}
);

/* Edit: Arrow function */
const addPost = (name, message) => {

var post = document.getElementById("sharedPost")

var elementPost = document.createElement("div")
/* Edit: added -> add */
elementPost.classList.add("element-post")
elementPost.appendChild(elementPost)


/* Edit: Arrow function */
const createElement = (description, value) => {
var spanName = document.createElement("span")
var espacio = document.createElement("br")
spanName.textContent = description + ": "
elementPost.appendChild(spanName)
elementPost.appendChild(espacio)
};

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