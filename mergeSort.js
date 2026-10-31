function merge(left, right){
     
    let i = 0;
    let j = 0;

    const merged = [];

    while (i < left.length && j < right.length){
        if (left[i] <= right[j]){
            merged.push(left[i]);
            i++;
        }
        else{
            merged.push(right[j]);
            j++;
        }
    }

    while (i < left.length){
        merged.push(left[i]);
        i++;
    }

    while (j < right.length){
        merged.push(right[j]);
        j++;
    }

    return merged;
}

function mergeSort(arr){
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);

    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

// testing
// mergeSort([]) → []
// mergeSort([73]) → [73]
// mergeSort([1, 2, 3, 4, 5]) → [1, 2, 3, 4, 5]
// mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) → [0, 1, 1, 2, 3, 5, 8, 13]
// mergeSort([105, 79, 100, 110]) → [79, 100, 105, 110]

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));