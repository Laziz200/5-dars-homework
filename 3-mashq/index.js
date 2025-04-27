function kubniqaytar(kub) {
    let toq=0;
    let juft=0;
    for (let i = 1; i <= kub; i++) {
        if (i%2==0) {
            juft+=i;
        }
        else{
            toq+=i;
        }
    }
    return {juft,toq};
}
let num=kubniqaytar(10);
console.log(num.juft);
console.log(num.toq);