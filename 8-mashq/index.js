let arr=[111,4,6,2,99,44,11];
function sortfunc(maxx) {
    let max=0;
    for (let i = 0; i < maxx.length; i++) {
        if (maxx[i]>max) {
            max=maxx[i];
        }
    }
    return max;
}
console.log(sortfunc(arr));