window.onload = function () {
    //gestion des langues
    const fr = document.querySelectorAll(".fr")
    const en = document.querySelectorAll(".en")
    fr.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.setItem('langage', 'fr')
            window.location.reload(true);
        })
    })
    en.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.setItem('langage', 'en')
            window.location.reload(true);
        })
    })
}
