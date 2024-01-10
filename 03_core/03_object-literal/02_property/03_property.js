/* 03_property */


let dog = {
    name: "뽀삐",
    eat: function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
}

console.log(dog.name);
dog.eat("고구마");

dog['eat']('고구마');

var obj = {
    'dash-key' : 'dash-value',
    0:1
};

// console.log(obj.dash-key);
// console.log(obj.'dash-key')

console.log(obj['dash-key']);


// console.log(obj.0);

// console.log(obj);

console.log(obj[0]);
console.log(obj['0']);