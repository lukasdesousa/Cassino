document.addEventListener('click', (e) => {
    e.preventDefault('submit')
})


// ANIMAÇÃO DE FECHAR / ABRIR O MENU LATERAL
const hideMenu = document.querySelector('#hide-menu')

const menuBtn = document.addEventListener('click', (e) => {
    let element = e.target

    if (element.classList.contains('user-icon')) {
        hideMenu.style.display = 'block'
        hideMenu.style.animation = 'menuAnim 0.3s linear 1;'
    }

    if (element.classList.contains('close-icon')) {
        hideMenu.style.display = 'none'
        
    }
})