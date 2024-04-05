document.getElementById("melangerImages").addEventListener("click", melangerImages);

let images = document.querySelectorAll("#arc-en-ciel img");

function melangerImages() {
  let parent = document.getElementById("arc-en-ciel");
  for (let i = parent.children.length; i >= 0; i--) {
    parent.appendChild(parent.children[Math.random() * i | 0]);
  }
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  });
}

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text/plain");
  event.target.appendChild(document.getElementById(data));
  verifierOrdre();
});

function verifierOrdre() {
  let ordreCorrect = true;
  for (let i = 0; i < images.length; i++) {
    if (images[i].src !== "arc" + (i + 1) + ".png") {
      ordreCorrect = false;
      break;
    }
  }
  if (ordreCorrect) {
    document.getElementById("message").innerText = "Vous avez gagné";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").innerText = "Vous avez perdu";
    document.getElementById("message").style.color = "red";
  }
}

  