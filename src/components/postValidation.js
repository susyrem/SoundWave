var formulario = document.forms["postingform"];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  var n = formulario.elements[0];
  var m = formulario.elements[1];

  var name = n.value;
  var message = m.value;

  // Resetting previous error styles
  n.classList.remove("error");
  m.classList.remove("error");

  // Validating input fields
  if (name.length === 0) {
    n.classList.add("error");
  }
  if (message.length === 0 || message.length > 120) {
    m.classList.add("error");
  }

  // If both fields are valid, proceed to add post
  if (name.length > 0 && message.length > 0 && message.length <= 120) {
    agregarPost(name, message);
    // Reset form fields
    formulario.reset();
  }
});

const agregarPost = (name, message) => {
  var lista = document.getElementById("sharedPost");

  var elementPost = document.createElement("div");
  elementPost.classList.add("element-post",);
  lista.appendChild(elementPost);

  createElement("Username", name, elementPost);
  createElement("Post", message, elementPost);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Delete";
  botonBorrar.className = "btn-borrar"; // Use className to add classes
  elementPost.appendChild(botonBorrar);

  botonBorrar.addEventListener("click", function() {
    elementPost.remove();
  });
};

const createElement = (description, value, parentElement) => {
  var spanName = document.createElement("span");
  spanName.textContent = description + ": " + value;
  parentElement.appendChild(spanName);
  parentElement.appendChild(document.createElement("br")); // Adding line break
};
