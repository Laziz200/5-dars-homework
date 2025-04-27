function sumdouble(a,b) {
    var result=0;
    if (a===b) {
        result=a+b*2;
    }
    else{
        result=a+b;
    }
    return result
}
console.log(sumdouble(1,2));
console.log(sumdouble(3,2));
console.log(sumdouble(2,2));