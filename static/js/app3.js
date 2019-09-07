new Chartist.Bar('#chartbar', {
    labels: ["Handgun", "Multiple Guns", "Unknown", "Rifle", "Shotgun"],
    series: [
      [18, 14, 0, 6, 2],
      [20, 12, 0, 4, 1],
      [87, 30, 66, 17, 8]
    ]
}, {
    // Default mobile configuration
    stackBars: true,
    axisX: {
      labelInterpolationFnc: function(value) {
        return value.split(/\s+/).map(function(word) {
          return word[0];
        }).join('');
      }
    },
    axisY: {
      offset: 20
    }
  }, [
    // Options override for media > 400px
    ['screen and (min-width: 400px)', {
      reverseData: true,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: Chartist.noop
      },
      axisY: {
        offset: 60
      }
    }],
    // Options override for media > 800px
    ['screen and (min-width: 800px)', {
      stackBars: false,
      seriesBarDistance: 10
    }],
    // Options override for media > 1000px
    ['screen and (min-width: 1000px)', {
      reverseData: false,
      horizontalBars: false,
      seriesBarDistance: 15
    }]
  ]);
  
  