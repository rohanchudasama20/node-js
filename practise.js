function findElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return true;
        }
    }
    return false;
}

const arr = [10, 20, 30, 40, 50];
const key = 60;

if (findElement(arr, key)) {
    console.log("Element found");
} else {
    console.log("Element not found");
}
