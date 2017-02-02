    // plugin to change color of bars based on value, is used all over the dashboards
    var Chart = require('chart.js')

    var barColors ={
      beforeUpdate: function(chartInstance) {


        chartInstance.data.datasets.forEach(function(dataset) {
          if (!dataset.colors) { return };
          var colors = dataset.colors
          dataset.backgroundColor = dataset.data.map(function(data, key) {
            return colors[key];
          })
        })
      }
    };

Chart.pluginService.register(barcolors)// register it as a plugin
