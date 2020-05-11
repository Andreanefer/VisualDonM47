const fs = require('fs')

const passagersCsv = fs.readFileSync('NombrePassagersTransportes.csv', 'utf-8')
const kmsCsv = fs.readFileSync('NombreKMParcourus.csv', 'utf-8')

const removeSemiColons = d =>
  Array.from(d).filter(letter => letter !== ';').join('')

const fixLine = line => line.trim().split(',')
  .map(removeSemiColons)
  .map(d => isNaN(Number(d)) ? "-" : Number(d))

const [ kmHead, ...kmLines] = kmsCsv.split('\n').map(fixLine)
const [ pHead, ...pLines ] = passagersCsv.split('\n')
  .map(line => line.split(',').map(d => isNaN(Number(d)) ? "-" : Number(d)))

const ajouterCles = prefix => d => ({
  annee: d[0],
  [`${prefix}_train`]: d[1],
  [`${prefix}_tpr`]: d[2],
  [`${prefix}_bateau`]: d[3],
})

const passagers = pLines.map(ajouterCles('passagers'))
const km = kmLines.map(ajouterCles('km'))


const chercherValeursKm = annee => km.find(d => d.annee === annee)

const resultat = passagers.map(d => ({ ...d, ...chercherValeursKm(d.annee) }))

console.log(
  JSON.stringify(resultat, null, 2)
)

//isNaN(Number(d)) ? 0 : Number(d)