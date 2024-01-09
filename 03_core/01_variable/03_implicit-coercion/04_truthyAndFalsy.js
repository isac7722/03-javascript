

let test = {
    a : null,
    b : 1,
    fun (){
        console.log(12332)
    }
}

console.log(test.a);
console.log(test.fun);
if(!test.fun){
    console.log("true");
}else{
    console.log("false");
}






//test라는 객체의 프로퍼티에 b의 값이 존재해?
// if (test?.b){
//     console.log("true")
// }else{
//     console.log("false");
// }


// //test라는 객체의 프로퍼티의 b에 값이 존재하는 경우 a를 출력
// console.log(test.a && "a");


// &&


// test.b ? console.log("true"): console.log("false");


// console.log("========================")

// test.fun();

// console.log("========================")

// if(test.c){
//     console.log("c");
//     test.fun();
// }
// if(test.b){
//     console.log("b")
//     test.fun();
// }



// test.fun1111();


console.log("========================");