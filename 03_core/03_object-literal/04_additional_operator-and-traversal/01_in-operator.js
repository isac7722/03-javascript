// in 연산자
// 프로퍼티 존재 여부 확인하기
var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

// 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환
// 프로퍼티 존재 여부를 쉽게 확인
console.log(student.name === undefined);        // false - 존재
console.log(student.height === undefined);      // true - 존재하지 않음
console.log(student.test === undefined);        


// == 은 값이 같을 때, === 같과 타입이 모두 같을 때

// 프로퍼티 값이 undefined라 프로퍼티는 존재하지만 true - 존재하지 않음으로 판별되는 문제

console.log("name" in student);                 // true - 존재
console.log("height" in student);               // false - 존재하지 않음
console.log("test" in student);                 // true - 존재


let categories = {
    option1 : "자동차",
    option2 : "기차",
    option3 : "비행기"
}

if ("자장가" in categories){
    console.log(`자장가라는 category가 있다`)
}
if("option3" in categories){
    console.log(`first option is ${categories.option1}라는 category가 있습니다.`)
}



