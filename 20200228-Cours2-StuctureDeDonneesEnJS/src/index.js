import * as d3 from 'd3';


const WIDTH = 1000;
const HEIGHT = 500;


const body = d3.select('body')
    .attr('width', WIDTH)
    .attr('height', HEIGHT)

const ul = body.append('ul');

const lis =ul.selectAll('li')
    .data(villes).enter()
    .append('li')
    .text(d => d.nom)