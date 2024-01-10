// 함수 선언문과 할당문의 차이


//프로그램의 흐름을 기준으로 생각한다
/* 

함수 선언문


1번
function test(){
    console.log("이거랑")
}



2번
function test(){
    console.log("이거 중 어떤 것이 실행되는가?")
}


3번
var variable;


4번
test();

5번
console.log(variable)

6번
variable = "testsetsetestet"

*/


test();
console.log(variable);

// 함수 선언문
function test(){
    console.log("이거랑")
}

function test(){
    console.log("이거 중 어떤 것이 실행되는가?")
}

var variable = "testewstestet";

console.log(variable);


// ------------------------------------------------------------------------------------
// 프로그램을 여기서부터 시작한다고 생각하자

/* 
함수 할당문

1번
    var funcTest;

2번
    console.log(funcTest);

    3번
    var funcTest =() =>{
    console.log("1")

    4번
    funcTest();

    5번
    var funcTest =() =>{
    console.log("2")

    6번
    funcTest();
}


*/
console.log(funcTest)


var funcTest =() =>{
    console.log("1")
}

funcTest();

var funcTest =() =>{
    console.log("2")
}

funcTest();

//자바스크립트의 let은 도일한 변수명을 생성할 수 없다
/* let funcTest =()=>{
    console.log("2")
} */


// 함수 선언문과 표현식
function a(){

};


// 함수 할당식 중

//익명함수 표현식
const b = function(){};

//기명함수 표현식
const c = function d(){};

//일회성 함수
(function(){
        console.log('이거 맞냐?')
})