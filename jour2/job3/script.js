const compterElt = document.getElementById('compteur');
const addOne = () => {
    let pCompteur = compterElt.textContent;
    compterElt.textContent = parseInt(pCompteur) + 1;
}
document.getElementById('button').onclick = addOne
