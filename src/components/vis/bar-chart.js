import React from 'react'

import * as d3 from "d3";

class BarChart extends React.Component {


  componentDidMount() {
    this.drawChart();
  }


  arc() {
    return d3.arc()
      .innerRadius(100)
      .outerRadius(110)
      .startAngle(0)
  }

  tau = Math.PI * 2;

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];

    const graph = d3.select(this.refs.arc).append('svg')
      .attr('height', '400px')
      .attr('width', '100%')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(150, 150)`);

    graph.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 100 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green")
  }

  render(){
    return  <div ref="arc" style={{width:"100%"}} />
  }

}

export default BarChart
