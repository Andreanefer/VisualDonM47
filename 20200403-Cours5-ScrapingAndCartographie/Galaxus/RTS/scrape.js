//Ce code créer un scripte pour récupérer les données des sujets des 19h30 de la RTS

//Installation (Import) des modules
const fetch = require('node-fetch')
const R = require('ramda')
const dayjs = require('dayjs')
const fs = require('fs')

//Fonction pour trouver la prochaine date, 10 jours avant la précédente
const getNextMaxDate = maxDate =>
  (maxDate === 'ALL' ? dayjs() : dayjs(maxDate, 'YYYY-MM-DD'))
    .subtract(10, 'day')
    .format('YYYY-MM-DD')

//Telécharger les données
const getLatestEpisodes = maxDate =>
    fetch(`https://www.rts.ch/play/tv/show/6454706/latestEpisodes?maxDate=${maxDate}`)
      .then(r => r.json())

//Sauvegarder les données de la RTS
const file = fs.createWriteStream('scraped.ndjson')
const saveLatest = latest =>
file.write(`${JSON.stringify(latest)}\n`)

//Fonction pour mettre un maximum dans la boucle (ici : téléchargement des données depuis maintenant jusqu'au 1er janvier 2000)
const loopShouldEnd = maxDate => {
    if (maxDate === 'ALL') { return false }
    return dayjs(maxDate, 'YYYY-MM-DD').isBefore('2000-01-01', 'YYYY-MM-DD')
}

//La boucle qui permemet de répéter l'opération pour tous les 19h30 de la RTS datant du 1.1.2000 jusqu'à aujourd'hui
const loop = (maxDate, callback) => {
    if (loopShouldEnd(maxDate)) {
      //La date appeler callback si c'est le moment d'arrêter
      return callback()
    }
    // récupérer les épisodes
    getLatestEpisodes(maxDate)
      .then(latest => {
        // sauver les épisodes
        saveLatest(latest)
        // si "episodes" est vide arrêter la boucle
        if (R.propOr([], 'episodes', latest).length === 0) {
          return callback()
        }
        // générer la prochaine date
        const nextMaxDate = getNextMaxDate(maxDate)
        // loguer pour savoir où nous en sommes
        console.log(nextMaxDate)
        // appeler loop avec la nouvelle date
        // pour être gentil avec la RTS et pour ne pas se faire bannir de leur serveur,
        // attendons 1 seconde (1000 millisecondes) avant de continuer la boucle
        setTimeout(() => {
          loop(nextMaxDate, callback)
        }, 1000)
      })
      // arrêter la boucle s'il y a une erreur
      .catch(callback)
  }

  loop('ALL', err => console.log(err || 'done'))