const raqamlar=[2,5,7,10];
function yigindi(natija) {
    let result=0;
    for (let i = 0; i < natija.length; i++) {
        result+=natija[i];
    }
    return result;
}
console.log(yigindi(raqamlar));