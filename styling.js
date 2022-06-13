

function addListener() {
  let contactos = document.querySelectorAll(".contacto")
console.log(contactos);
contactos.forEach(contacto => {
  contacto.addEventListener("click", () => {
    contactos.forEach(c => c.classList.remove("active"))
    contacto.classList.add("active");
  })
})
}



function stylingInit() {
  addListener()
}