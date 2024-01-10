/* 
Variable Environment
컨텍스트 실행시 최최의 스냅샷을 유지하고 있으며 컨텍스트를 생성할 때 가장 먼저 정보를 담고 이를 뽁사하여 LexicalEnviornment를 만들어 이후에 LexicalEnvironment를 주로 활용한다
이로 인해 초기에는 LexicalEnviornment를 같은 상태를 유지한다

LexicalEnviornment를
변수, 함수, 선언 및 소코르를 관리하는데 사용되는 내부 데이터 구조

1. Environment Record: 변수 및 함수 선언을 저장하고 식별자와 매핑하는 방법을 제공하여 현재 스

*/

function outerFunction(){
    let outerVariable = "Outer"

    function innnerFunction(){
        let innerVariable = 'inner';

        console.log("inner: "+ outerVariable)
        console.log("inner: "+ innerVariable)
    }
    console.log("inner: "+ outerVariable)
    // console.log("Outer: "+"innerVariable")

    innnerFunction();
}
outerFunction();