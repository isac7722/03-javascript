

let student = {
    name : "유관순",
    age : 16
}

console.log(student)


let obj = {
    normal : "normal value",
    '@space@' : 'space value',
    "":"", // 빈 문다열 키는 오류가 발생하지는 않지만 권장하지 않는다
    0:1, //숫자 키는 내부적으로 문자열을 변환된다
    var:"var", //예약어 키는 오류 발생은 하지 않은나 권장하지 않는다
    normal: "new normal" // 이미 존재하는 키는 중복 선언하면 덮어쓴다
}


let keyValue = "test";

obj[keyValue] = 'test value';

console.log(obj);



