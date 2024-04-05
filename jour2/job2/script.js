const newElement = document.createElement('article')
const showhide = () => {
    const articleSelect = document.querySelector(newElement.localName);
    if (articleSelect){
        document.body.removeChild(newElement)
    } else{
        newElement.innerText = "L'important n est pas la chute, mais l'atterrissage."
        document.body.appendChild(newElement);
    } 
 }
document.getElementById("button").onclick = showhide;


