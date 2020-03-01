const fs = require('fs')
const data = fs.readFileSync('Ex2.2-Donnees/DataRiviera.csv', 'utf-8')

const result = data
    .split('\n')
    .map(ligne => ligne.split('\t'))
    .map(d => ({ville: d[1], pop : Number(d[2].split(' ').join(""))}))
    

console.log(
    JSON.stringify(result, null, 2)
);
