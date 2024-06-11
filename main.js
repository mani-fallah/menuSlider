const toggle = document.getElementById('toggle')
const close = document.getElementById('close')
const open = document.getElementById('open')
const modal = document.getElementById('modal')

// toggle nav

toggle.addEventListener("click",()=>{
    document.body.classList.toggle('showNav')
});

// show modal
open.addEventListener('click',()=>{
    modal.style.display='block'
})

// Hide modal
close.addEventListener('click',()=>{
    modal.style.display='none'
})

// Hide modal on click outside
window.addEventListener('click', e => e.target == modal?
modal.style.display='none':false)
