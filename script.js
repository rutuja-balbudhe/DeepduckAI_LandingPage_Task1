const hamburger= document.getElementById('hamburger');
const navlist= document.getElementById('nav-list');
hamburger.addEventListener('click',()=>
{
    navlist.classList.toggle('active');
   
});
