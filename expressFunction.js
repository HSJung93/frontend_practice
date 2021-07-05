function printName(firstname) {

    // console.log(inner);
    var result = inner(); // 자바스크립트는 함수를 먼저 찾음. 뒤에 쓴 것 찾아서 올라옴
    console.log(typeof inner)
    console.log("name is " + result);

    function inner(){
        return "inner value";
    }

    // var inner = function() {
    //    return "inner value";
    // } // 이게 function expression 변수 값에 함수 표현식을 넣어놓은 것 !* 이렇게 쓰면 선언된 것만 끌고 와서 undefined가 된다. 이것이 호이스팅(hoisting)이다. 


}

printName(); 