import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

class App extends Component {
  render() {

      const percent = 78;

      const chartOptions = {
          chart: {
              type: "gauge",
              plotBackgroundColor: null,
              plotBackgroundImage: null,
              plotBorderWidth: 0,
              plotShadow: false
          },
          title: {
              text: null
          },
          pane: {
              startAngle: -150,
              endAngle: 150,
              background: [{
                  backgroundColor: {
                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                      stops: [
                          [0, '#FFF'],
                          [1, '#333']
                      ]
                  },
                  borderWidth: 0,
                  outerRadius: '109%'
              }, {
                  backgroundColor: {
                      linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                      stops: [
                          [0, '#333'],
                          [1, '#FFF']
                      ]
                  },
                  borderWidth: 1,
                  outerRadius: '107%'
              }, {
                  // default background
              }, {
                  backgroundColor: '#DDD',
                  borderWidth: 0,
                  outerRadius: '105%',
                  innerRadius: '103%'
              }]
          },

          // the value axis
          yAxis: {
              min: 0,
              max: 200,

              minorTickInterval: 'auto',
              minorTickWidth: 1,
              minorTickLength: 10,
              minorTickPosition: 'inside',
              minorTickColor: '#666',

              tickPixelInterval: 30,
              tickWidth: 2,
              tickPosition: 'inside',
              tickLength: 10,
              tickColor: '#666',
              labels: {
                  step: 2,
                  rotation: 'auto'
              },
              title: {
                  text: 'km/h'
              },
              plotBands: [{
                  from: 0,
                  to: 120,
                  color: '#55BF3B' // green
              }, {
                  from: 120,
                  to: 160,
                  color: '#DDDF0D' // yellow
              }, {
                  from: 160,
                  to: 200,
                  color: '#DF5353' // red
              }]
          },


          series: [{
              name: 'Speed',
              data: [{percent}],
              tooltip: {
                  valueSuffix: ' km/h'
              }
          }]
      };

    return (



      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
            <HighchartsReact
                highcharts={Highcharts}
                options={chartOptions}
            />
        </p>
      </div>
    );
  }
}

export default App;
