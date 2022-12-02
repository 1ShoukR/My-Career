
let height = [7, 4, 8, 2, 9];
let n = height.length;

const countBuildings = (height, n) => {
let count = 1;
let curr_max = height[0];
    for (let i = 1; i < n; i++) {
        if (height[i] > curr_max || height[i] == curr_max) {
            count++;
            curr_max = height[i];
        }
    }
    return count, console.log(count)
}



console.log(countBuildings(height, n))
