const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag: 'r'});

const parsed = input.trim().split('\n')

let highest = [];
let current = 0;
for (let i = 0; i < parsed.length; i++){
    if(parsed[i] !== ''){
        parsed[i] = parseInt(parsed[i])
    }
}
for (let i = 0; i < parsed.length; i++){
    if(parsed[i] !== ''){
        current += parsed[i]
    }
    if(parsed[i] === ''){
        highest.push(current)

        current = 0;
    }
}
highest.sort((a,b) => b - a )
console.log('highest', highest[0] + highest[1] + highest[2])