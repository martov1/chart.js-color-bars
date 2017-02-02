# chart.js-color-bars

This plugin allows you to pass an array of background colors for your bar chart.


## How to use

*for typescript*

```

import {barColors} from 'chart.js-color-bars' //import it
Chart.pluginService.register(barcolors)// register it as a plugin
```
*for javascripr*
```
require("path-to-chartjs-color-bars.js")
```
on your dataset, add an array of colors of the same length as your array of data.

```
  datasets: [{
            label: ' % de venta',
            data: [10,5,4],
            borderWidth: 3,
            borderColor: '#ffa596',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            colors: ["red","green","blue"],
          }]
```
Result:

![screenshot](https://github.com/martov1/chart.js-color-bars/blob/screenshots/photo.jpg)
