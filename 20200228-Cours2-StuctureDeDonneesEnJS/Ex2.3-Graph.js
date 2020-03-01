import data from 'Ex2.2-Data.js';

viewof graph = {
    const WIDTH = width
    const HEIGHT = width / 3
    const container = DOM.svg(WIDTH, HEIGHT)
    const DATA = data
    const MARGIN = 5
    const BAR_WIDTH = WIDTH / DATA.length
    const svg = d3.select(container)
    
    // nous allons utiliser une échelle linéaire
    const heightScale = d3.scaleLinear()
      // les données en entrée
      .domain([0, d3.max(DATA)]) // d3.max retourne le maxium d'une liste
      // les données en sortie
      .range([0, HEIGHT])
    
    // comme 8 est la valeur maximale, heightScale(8) retourne la hauteur HEIGHT
    // heightScale(4) retourne la moitié de HEIGHT ...
    
    svg.selectAll('rect')
      .data(DATA)
      .enter()
      .append('rect')
      .attr('x', (d, i) =>  i * BAR_WIDTH)
      .attr('width', BAR_WIDTH - MARGIN)
      // utiliser heightScale pour y et height
      .attr('y', d => HEIGHT - heightScale(d))
      .attr('height', heightScale)
  
    
    return container
  }