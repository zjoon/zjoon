
console.log("**************WELCOME TO FAULTY CALCULATOR**************");



const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




rl.question("Enter number one :  ", function (num1) {
    rl.question("Enter number two : ", function (num2) {
        rl.question("  Type + for addition press - for subtraction press * for multiplication press / for division :   ", function (input) {


            /*for testing*/

            /* rand = Math.random();
             console.log("Random value generated:", rand);
             */

            if (Math.random() < 0.1) {

                if (input == '+') result = Number(num1) - Number(num2);
                if (input == '-') result = Number(num1) / Number(num2);
                if (input == '*') result = Number(num1) + Number(num2);
                if (input == '/') result = Number(num1) ** Number(num2);


                console.log("Result is: " + result);


            }

            else {
                if (input == '+') result = Number(num1) + Number(num2);
                if (input == '-') result = Number(num1) - Number(num2);
                if (input == '*') result = Number(num1) * Number(num2);
                if (input == '/') result = Number(num1) / Number(num2);


                console.log("Result is: " + result);

            }

            rl.close();

        });
    });

});
