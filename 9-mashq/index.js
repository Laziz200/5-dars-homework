let arr=[111,4,6,2,99,44,11];
function sortfunc(minn) {
    let min=0;
    for (let i = 0; i < minn.length; i++) {
        if (minn[i]<min) {
            min=minn[i];
        }
    }
    return min;
}
console.log(sortfunc(arr));