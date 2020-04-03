//Création d'un scripte pour récupérer les données de Galaxus
const data = require('./chaussettes.json')
//En raison du gros volumes de données dans le fichier "chaussettes.json", on utilise ramda afin de filiter les données
const R = require('ramda')

console.log(data);

//Filtrer les donners avec Ramda
const products = R.path([0, 'data', 'productType', 'filterProductsV4', 'products', 'results'], data)

console.log(products);

//Fonction pour sortir l'identifiant unique, le nom du produit, la marque, la description et le prix (TVA incluse)
const getProductData = R.pipe(
    R.pick(['id', 'name', 'brandName', 'nameProperties', 'pricing']),
    d => ({ ...d, price: R.path(['price', 'amountIncl'], d.pricing) }),
    R.omit(['pricing'])
  )

  //Sauvegarder le résultat
  console.log(
    JSON.stringify(
      products.map(getProductData)
    )
  )

