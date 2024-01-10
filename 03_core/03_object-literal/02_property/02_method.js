let dog = {
    name : "뽀삐",
    eat: (food)=>{
        // console.log(`${name}은 ${food}를 마있게 먹어요`);
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    },

    eat2 : function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
}


dog.eat.bind(dog.name,"고구마");

dog.eat2("고구마");

// 화살표 함수와 function의 차이 this의 차이
