function add(a, b, Callback) {
    setTimeout(() => Callback(a+b), 0);
}

function result(sum)
{
    console.log("sum :" + sum);
}

console.log("Hello ");

add(1, 3, result);

console.log("Hi");