let arr=[];
let arr1=[];
let length=Number(prompt("1-arrayga nechta son kiritasiz?"));
let length1=Number(prompt("2-arrayga nechta son kiritasiz?"));
for (let i = 1; i <= length; i++) {
    let num=Number(prompt(`${i} chi sonni kiriting`));
    arr.push(num);
}

for (let i = 1; i <= length1; i++) {
    let num1=Number(prompt(`${i} chi sonni kiriting`));
    arr1.push(num1);
}

function sortfunc(max1,maxx2) {
    let max=0;
    let max2=0;
    for (let i = 0; i < max1.length; i++) {
        if (max1[i]>max) {
            max=max1[i];
        }
    }
    for (let i = 0; i < maxx2.length; i++) {
        if (maxx2[i]>max2) {
            max2=maxx2[i];
        }
    }
    return {max,max2};
}
let result=sortfunc(arr,arr1)
console.log(`1-arrayning eng katta qiymati=${result.max}`);
console.log(`2-arrayning eng katta qiymati=${result.max2}`);