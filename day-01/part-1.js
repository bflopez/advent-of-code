const fs = require('fs');

const input = fs.readFileSync('./input.txt', {encoding:'utf8', flag: 'r'});

const parsed = input.trim().split('\n')

let highest = 0;
let current = 0;
for (let i = 0; i < parsed.length; i++){
    if(parsed[i] !== ''){
        current = current + parseInt(parsed[i])
    }
    if(parsed[i] === ''){
        highest = Math.max(highest, current);
        current = 0;
    }
}
console.log('highest', highest)