function sommeNombresPremier(a,b){
    if(a > 2 && b > 2){
        console.log(a, b)
    } else if(a % 1 === 0 && b % 1 === 0 ) {
        console.log(a + b)
    }else if(a % a === 0 && b % b === 0){
        console.log(a + b)
    }
    else {
        console.log("false");
    }
}
sommeNombresPremier(2, 9)