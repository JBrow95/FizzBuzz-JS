for (var f = 1; f < 101; f++) {
    if (f % 15 == 0) {
        console.log("FizzBuzz");
    }
    else if (f % 5 == 0) {
        console.log("Fizz");
    }
    else if (f % 3 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(f)
    };
};
