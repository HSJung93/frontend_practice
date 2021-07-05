var obj = {name:"crong", "age":20}

console.log(obj["name"]);
console.log(obj.age);

const myFriend = {key:"value", key2:"value"};
console.log(myFriend);

myFriend["name"] = "crong";
console.log(myFriend["name"]);

myFriend.age = 32 ;

delete myFriend.key;
console.log(myFriend);

for (value in myFriend){
    console.log(myFriend[value]);
}

Object.keys(myFriend).forEach(function(key){
    console.log(myFriend[key]);
});