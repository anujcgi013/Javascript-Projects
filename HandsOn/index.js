
// var x=10;
// function fullName() {
//     console.log("Hello World!")
// }

// fullName()
// console.log(x);
// console.log(fullName)


// var x=1;
// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// }

// function b()
// {
//     var x=100;
//     console.log(x);
// }

//Output - 10 100 1  

function a(){
    var d=100;
    console.log(c);
    b();
    function b(){
        console.log(c);
        console.log(d);
    }
}

a();
var c=100;
a();

