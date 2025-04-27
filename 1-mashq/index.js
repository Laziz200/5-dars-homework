let nums = [3.02, -3.65, 5, -9];

function normalizeNumbers(numbers) {
    var result = numbers.map(num => Math.round(num));
    return result;
}
let rounded=normalizeNumbers(nums)
console.log(rounded);

function Numbers(numbers) {
    var result = numbers.map(num => Math.abs(num));
    return result;
}
console.log(Numbers(rounded));
