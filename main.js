

function initData() {
  fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(({results}) => {
      addContacts(results);
    })
    .catch(error => {
        console.error(error);
    });
}


// reemplazando el nombre y el contenido del mensaje (array)
function renderContact({name, last_message, user_picture}) {
  let templateContact = 
        `<div class="contacto" tabindex="0">
           <!-- foto del contact -->
          <div class="picture">
            <div class="contacto-foto">
              <img class="foto" src="${user_picture}"  alt="">
            </div>            
          </div>
          <!-- seccion que contieneel chat  -->
          <div class="ver-contacto">

            <div class="arriba">
              <div class="name"><span>${name}</span></div>
              <div class="date">ayer</div>
            </div>

            <div class="abajo">
              <div class="chat">${last_message}</div>
              <i class="material-icons mas">expand_more</i>
            </div>  

          </div>

        </div>`;

        return templateContact;
}

// reemplazando los datos en el html
function addContacts(contactData) {
  const contactList = document.querySelector(".lista-contactos");
  
  contactData.forEach(contact => {
    let render = renderContact({...contact});
    contactList.innerHTML = contactList.innerHTML + render;
    
  });
  
  stylingInit()
}

(function main() {
  initData()
})() 
