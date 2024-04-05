// function citation() {
//     var citation = document.getElementById("citation").textContent;
//     console.log(citation);
//  }

const citation = () => {
    var citation = document.getElementById("citation").textContent;
    console.log(citation);

    // document.getElementById("citation").innerHTML = "<p>texte BBA<p>";
}
document.getElementById("button").onclick = citation;
