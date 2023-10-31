
const menuElement=document.getElementById('menu');
const navElements=document.querySelector('.navitems');
 const bodyElement=document.body;


function displayMenu(){

    navElements.classList.toggle('display');
    bodyElement.classList.toggle('hidden');
}


function hideMenu(){
    navElements.className='';
}

menuElement.addEventListener('click',displayMenu);








 