let a = 'str';

function counterConstructor() {
    let c = 0;


    function counter() {
        console.log(a);
        return ++c;
    }

    return counter;
}

let counter1 = counterConstructor();
counter1()
counter1()
counter1()
counter1()
console.log(counter1());




let counter2 = counterConstructor();
counter2()
console.log(counter2())


let counter3 = counterConstructor();

console.log(counter3())