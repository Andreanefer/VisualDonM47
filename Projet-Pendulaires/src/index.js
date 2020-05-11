import bb from 'billboard.js'; //pronblème à cette ligne
import '../../node_modules/billboard.js/dist/billboard.css'; //Dois-je mettre le chemin exacte ?

const data = require('../data/data.json') ; 


bb.generate({
  
  data: {
    json: {
        passagers_train: data.map(({ passagers_train }) => passagers_train),
        passagers_tpr: data.map(({ passagers_tpr }) => passagers_tpr),
        passagers_bateau: data.map(({ passagers_bateau }) => passagers_bateau),
        km_train: data.map(({ km_train }) => km_train),
        km_tpr: data.map(({ km_tpr }) => km_tpr),
        km_bateau: data.map(({ km_bateau }) => km_bateau),
    },
    //Definition des axes y
    axes: {
        passagers_train: 'y',
        passagers_tpr: 'y',
        passagers_bateau: 'y',
        km_train: 'y2',
        km_tpr: 'y2',
        km_bateau: 'y2',
    },
    types: {
        passagers_train:"bar",
         passagers_tpr:"bar",
         passagers_bateau:"bar",
         km_train:"line",
         km_tpr:"line",
         km_bateau:"line",
    },
  },
  axis: {
    x: {
      type: 'category',
      categories: data.map(({ annee }) => annee)
    },
    //Definition de l'axe y
    y: {
      label: 'Nombre de passagers (en millier)',
    },
    //Montage + définition du 2e axe y
    y2: {
      show: true,
      label: 'Nombre de km parcouru (en million)',
    }
  },
  bindto: '#graphiquePendulaire',
})