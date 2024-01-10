/* 
 01_object
    자바스크립트는 객체 기반 프로그래밍 언어로 원시 값을 제외한 나머지 값 (함수, 배열, 정규 표현식 등   은 모두 객체이다)
    객체는 0개 이상의 프로퍼티로 구성 된 집합이며 프로퍼티는 키 와 값으로 구성된다
    자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 갑싱 될 수 있다
    프로퍼티 갑싱 함수일 경우 method 라고 부른다

    객체 생성 방법
    자바, c++과 같은 클래스 기반의 객체 지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 합께 생사자르 호출하여
    인스턴스르 생성하는 방빗긍로 객체를 새엇ㅇ한다
    자바스크립느느 프로토타입 깆반 객체지향 언어로 클래스 기반 객체지향 언어와은 달리 다앙한 객체 생성 방법을 지원한다

    1. 객체 리터럴
    2. object 생성자 함수
    3. todtjdwk gkatn
    4. objec.creat 메서드 
    5. class

    이중 가장 일반적이고 간단한 방법이 객체 리터럴
    괄호 내에 0개 이상의 프로퍼티를 정의한다
*/

let student =  {
    name: "유관순",
    age: 16,
    getinfo : funnction() {
        return `${this.name}은 ${this.age}세 입니다.`
    }
};

console.log(typeof student);


// 프로퍼티를 정의하지 않을 시 빈 객체가 생성된다
var student2 ={}
console.log(typeof student2)
console.log(student2);

class student3 {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
}

const studentA = new student3("이순신", 30);
console.log(studenntA);