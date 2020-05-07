import * as d3 from 'd3';
import * as bb from 'billboard';

const DATA = require('./data/data.json') ;

bb.generate({
  data: {
    json: {
      passagers: data.map(({ passagers }) => passagers),
      km: data.map(({ km }) => km),
    },
    //Definition des axes y
    axes: {
      passagers: 'y',
      km: 'y2',
    },
    types: {
      passagers:"bar",
      km:"line",
    },
  },
  axis: {
    x: {
      type: 'category',
      categories: annee.map(({ annee }) => annee)
    },
    // Nommer l'axe y
    y: {
      tick:{
        format: x => `${x/1000}k`
      },
      label: 'Nombre de passagers (en millier)',
    },
    // Montrer et nommer l'axe y2
    y2: {
      show: true,
      label: 'Nombre de km parcouru (en million)',
    }
  },
  bindto: graph5,
})
