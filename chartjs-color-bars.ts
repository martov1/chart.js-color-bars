    // plugin to change color of bars based on value, is used all over the dashboards

    let barColors ={
      beforeUpdate: function(chartInstance) {


        chartInstance.data.datasets.forEach(function(dataset) {
          if (!dataset.colors) { return };
          let colors = dataset.colors
          dataset.backgroundColor = dataset.data.map(function(data, key) {
            return colors[key];
          })
        })
      }
    };

    export {barColors}
