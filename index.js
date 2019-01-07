const CheckWords = require('check-word');
const words = CheckWords('en');

if (process.argv[2]) {
    let letters = process.argv[2].toLowerCase().split('').sort();

    for (let quantity = 3; quantity <= letters.length; quantity++) {
        console.log(`Words with ${quantity} letters:`);

        combination(letters, quantity);
        console.log('------------------------');
    }

} else {
    console.error(`Error: no letters detected!`);
    console.log(`Usage: node index.js *your letters here*`);
}

function combination(array, k){

    var combinations = [];
    var indices = [];

    (function run(level, start) {

        for(var i=0; i < array.length; i++){

            if(!indices[i]) {
                indices[i] = true;
                combinations[level] = array[i];

                if(level < k - 1){
                    run(level + 1, i + 1);
                } else {
                    let word = combinations.join("");
                    if (words.check(word)) {
                        console.log(word);
                    }
                }
                indices[i] = false;
            }
        }
    })(0, 0)

}
