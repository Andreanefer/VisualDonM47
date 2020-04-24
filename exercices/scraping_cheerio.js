const cheerio = require('cheerio')
const fs = require('fs')
const page = fs.readFileSync('page.html', 'utf-8')
const $ = cheerio.load(page)
const row = $('.row')
const parts = $('.col-sm-4.col-lg-4.col-md-4', row)
parts.each((index, part) => {
  // le prix est le texte du premier <h4>
  // le nom est l'attribut "title" de l'élément <a> à l'intérieur du deuxième <h4>
})