

 function agregarOpinion(){

   const nombreUsuarioImput=document.getElementById('nombreUsuario');
   const opinionTextoTextarea=document.getElementById('opinionTexto');
   const opinionesContainerDiv=document.getElementById('opinionesContainer');

   const nombre=nombreUsuarioImput.value.trim();
   const opinion=opinionTextoTextarea.value.trim();



   if (opinion === "" || nombre === "" ) {
      alert("por favor,escribe tu nombre y opinion antes de enviar")
      return;
   }
   
   const nuevaOpinion = document.createElement('div');
   nuevaOpinion.classList.add("opinion");

   const nombreParrafo = document.createElement('p');
   nombreParrafo.classList.add('nombre-opinion');
   nombreParrafo.textContent = nombre + ":";

   const opinionParrafo = document.createElement('p');
   opinionParrafo.classList.add('texto-opinion');
   opinionParrafo.textContent = opinion;

   const eliminarBoton = document.createElement('button');
   eliminarBoton.textContent = "Eliminar";
   eliminarBoton.classList.add("eliminar-opinion");
   eliminarBoton.addEventListener('click', eliminarOpinion);

   nuevaOpinion.appendChild(nombreParrafo);
   nuevaOpinion.appendChild(opinionParrafo);
   nuevaOpinion.appendChild(eliminarBoton);

   opinionesContainerDiv.appendChild(nuevaOpinion);
   nombreUsuarioImput.value = "";
   opinionTextoTextarea.value = "";
}
function eliminarOpinion(event){
   const botonEliminar = event.target;
   const opinionDiv = botonEliminar.parentNode;
   const opinionesContainerDiv = document.getElementById('opinionesContainer');

   opinionesContainerDiv.removeChild(opinionDiv);
}
