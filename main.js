
const contactData = [
  {
    name: "Carolina del Norte",
    chat: "hola juanita"
  },
  {
    name: "Paoula",
    chat: "Lorem Ipsum is simply dummy text of the printing and typesetting industr"
  },
  {
    name: "Anaztacio",
    chat: "hContrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  },
  {
    name: "Juanita",
    chat: "Contrary to popular belief, Lorem Ipsum is not simply random text"
  },
  {
    name: "la vecina",
    chat: " to make a type specimen book"
  },
  {
    name: "Paoula",
    chat: "Lorem Ipsum is simply dummy text of the printing and typesetting industr"
  },
  {
    name: "Anaztacio",
    chat: "hContrary to popular belief, Lorem Ipsum is not simply random text. It has roots"
  },
  {
    name: "Juanita",
    chat: "Contrary to popular belief, Lorem Ipsum is not simply random text"
  },
  {
    name: "la vecina",
    chat: " to make a type specimen book"
  }
  
]





function renderContact({name, chat}) {
  let templateContact = 
        `<div class="contacto">
           <!-- foto del contact -->
          <div class="picture">
            <div class="contacto-foto">
              <img class="foto" src="img/segundodeltercerymas.png"  alt="">
            </div>            
          </div>
          <!-- seccion que contieneel chat  -->
          <div class="ver-contacto">

            <div class="arriba">
              <div class="name"><span>${name}</span></div>
              <div class="date">ayer</div>
            </div>

            <div class="abajo">
              <div class="chat">${chat}</div>
              <i class="material-icons mas">expand_more</i>
            </div>  

          </div>

        </div>`;

        return templateContact;
}

function addContacts() {
  const contactList = document.querySelector(".lista-contactos");

  contactData.forEach(contact => {
    let render = renderContact({...contact});
    contactList.innerHTML = contactList.innerHTML + render;
    
  });
  
}

/* function copyContact() {

  const contactList = document.querySelector(".lista-contactos");
  const contact = document.querySelector(".contacto");


  for (i=0; i < 20; i++) {

    // const clonContact= contact.cloneNode(true);
    contactList.appendChild(contact);
    console.log(contact.attributes);
  }

  const nameNode = contact.querySelector(".name span");
  nameNode.textContent = "Wilder"
}*/

(function main() {
  addContacts()
//  copyContact()
})() 
