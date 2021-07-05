var a = [1,2,3,"hello",null,true,[[{1:0}]]];

console.log(a.length);

var b = [4];
b[1000] = 3;
console.log(b.length);
console.log(b[500]);

a.push(5);
console.log(a.length);

a.indexOf(null);

console.log(a);

["apple", "tomato"].forEach(function(value){
    console.log(value)
});