const fs = require('fs')

const csv = fs.readFileSync('DistanceparcouruenKM.csv', 'utf-8')

const lines = csv.split('\n')

const removeSemiColons = d =>
  Array.from(d).filter(letter => letter !== ';').join('')

const fixLine = line => {
  const [annee, km] = line.trim().split(',')
  return {
    annee: Number(annee),
    km: Number(removeSemiColons(km))
  }
}

console.log(
  JSON.stringify(
    lines.map(fixLine)
  )
)