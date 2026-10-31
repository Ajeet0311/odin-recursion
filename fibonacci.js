function fibonacci(num){
    console.log("This was printed recursively");
    
    if (num === 1) return [0];
    if (num === 2) return [0,1];

    const prev = fibonacci(num-1);

    return [...prev, prev[num-2] + prev[num-3]];
}

console.log(fibonacci(8));