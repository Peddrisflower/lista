const input = document.querySelector('input')
const buttonInserir = document.querySelector(".button-inserir")
const buttonRemove= document.querySelector(".button-remove")
const buttonRemoveTodos = document.querySelector(".button-remove-todos")
const ol = document.querySelector('ol')
const button = document.querySelectorAll('button')
const inputItemNumber = document.querySelector('#item_number')
const buttonRemoveItem = document.querySelector('.button-remove-item')


button.forEach((itemButton, indice) => {
    itemButton.addEventListener('mouseenter', ()=>{
        itemButton.style.cursor = 'pointer'
        
    })


    if(indice == 0){
        itemButton.style. backgroundImage = " background-image: linear-gradient(to right, #24C6DC 0%, #514A9D  51%, #24C6DC  100%);"
        itemButton.style.backgroundImage = " background-image: linear-gradient(to right, #24C6DC 0%, #514A9D  51%, #24C6DC  100%);"
       itemButton.style.backgroundImage = " background-image: linear-gradient(to right, #24C6DC 0%, #514A9D  51%, #24C6DC  100%);"
       
    }
})


//aplicando  eventos de teclado para inserir os dadoss 

input.addEventListener('keyup', teclado)
function teclado(event){
    if(input.value === ""){
        alert('Errror! Você precisar digita algo')
    }else{
    if(event.key === 'Enter'){
        const li = document.createElement('li')
        li.append(input.value)
        ol.appendChild(li)
        input.value = ""
    }
        
}


      
      
    
}

//aplicando evento no buto inseri

buttonInserir.addEventListener('click', inserir)
function inserir(){
    if(input.value === ""){
        alert('Error! Você precisar digita algo')
    }else{
    const li = document.createElement('li')
        li.append(input.value)
        ol.appendChild(li)
        input.value = ""
}
}

// aplicando o evento e click botao remover
 buttonRemove.addEventListener('click', remove)
 function remove(){
   const removeLI = document.querySelectorAll('li')
   ol.removeChild(removeLI[removeLI.length - 1])
 }
 //removendo tods
   buttonRemoveTodos.addEventListener('click', removeTodos)
   function removeTodos(){
    const removeLI = document.querySelectorAll('li')
    ol.remove(removeLI[removeLI.length])
    
   }

   buttonRemoveItem.addEventListener('click', function(){

    const listItems = document.querySelectorAll('li')
const itemIndex = parseInt(inputItemNumber.value) -1



    if(itemIndex >= 0 && itemIndex < listItems.length){
    ol.removeChild(listItems[itemIndex])
   inputItemNumber.value = ""


    }else{
        alert('Número invalido')
    }
   })
   
  