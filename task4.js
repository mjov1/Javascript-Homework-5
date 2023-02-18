let nums = [12, 12, 31, 31, 14, 15];

let max = nums[0];

for (i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    } 
}

console.log(max);