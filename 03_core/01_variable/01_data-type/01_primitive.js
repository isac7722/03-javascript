// number
// const let var
// 숫자 타입
// 자바의 경우 정수와 실수를 구분해 int, long float, double 등과 같은 다양한 숫

let integer = 10;
let double = 5.5;
let negative = -10;
console.log(10 === 10.0);

console.log(10/4);

// 숫자 타입은 추가적으로 세가지 특별한 값도 표현할 수 있다]
// Infinity:
// -Infiintity:


console.log(10/0); // Infinity
console.log(10/-0); // -Infinity
console.log(1 * "문자열"); // NaN


console.log("=================================")

/* 02. 문자열 타입 */
/* 문자열 타입은 텍스트 데이터를 나타내는데 사용한다
문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 빽틱으로 텍스트를 감싼다
자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시 타입 */

let string;
string = 'javascript'
string = "javaScript"
string = `javaScript`

string = '작은 따옴표로 감싼 문자열 내의 큰 따옴표는 문자열로 인식'


/* 템플릿 리터럴 */
let str1 = "안녕하세요"

//이스케이프 시퀀스를 사용해야 한다
let str = "안녕하세요 \n 이상우 입니다."

let multiline = `안녕하세요
이상우 입니다.`;

console.log(multiline);

let firstName = "이"
let lastName = "상우"

console.log(`안녕하세요 ${lastName}${firstName}입니다.`)

// TODO:


/* 03 불리언 타입
        불리언 타입의 값은 놀리적 참, 거짓을 나타내는 true와 false 뿐이다 */


let flag = true;
console.log(flag)

flag = false;
console.log(flag)


/* undefined 타입
    undefined 타입의 값은 undefined가 유일하다
    var 키워드로 선언한 변수는 암묵적을 undefined로 초기화 된다
    변수를 선언한 이후 값을 할당하지 않은 변수를 참조하면 undefined가 반환된다
    개발자가 의도적으로 변수에 할당하는 것은 본래 취지와 어긋나고 혼란을 줄 수 잇다 
    */


let test;
console.log(test)

// const test2; const는 상수 값이기 때문에 undefined으로 초기화를 할 수 없음

/* Null 타입
    null 타입의 값은 null이 유일하다
    변수에 값이 없다는 것을 의도적으로 명시할 때 사용한다.
    이전에 할당 되어 있던 ㄱ밧에 대한 참조를 명시적으로 제거하지 안흔 것을 의미하고
    자바 스크릅트 엔진은 주구도 참조하지 안흔 메모리 공간에 가비지 콜렉션을 수행하게 된다 */

    let nullval = "something"
    nullval = null
    console.log(nullval);


    /* 
        Symbol 타입
        심벌을 ES6에서 추가된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다
        다른 값과 중복 되지  안흔 유일무이한 값등로 이름 충돌할 위험이 없는 객체에 유링ㄹ한 프로퍼티 키를 만들기 위해 사용한다
     */

let key = Symbol("key");
console.log(typeof key);


// 객체 생성
let obj = {};
obj[key] = "value"
console.log(obj[key]);


console.log(obj)

