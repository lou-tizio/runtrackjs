function bissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
var isBissextile = bissextile(2010);
console.log(isBissextile);
