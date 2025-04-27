function onetwo(one) {
    let boshliq=one.trim();
    let bir=boshliq.at(0);
    let qolgan=boshliq.slice(1);
    return qolgan+bir;
}
let str=onetwo("  tJavascrip  ");
console.log(str);