var url = "/api/shootings";
  //d3.json(url).then(function(response) {
//console.log(response);
//});


  var data = {
    labels: ['Handgun', 'Multiple Guns', 'Unknown', 'Rifle', 'Shotgun'],
    series: [44, 20, 21, 10, 5]
  };
  
  var options = {
    labelInterpolationFnc: function(value) {
      return value[0]
    }
  };
  
  var responsiveOptions = [
    ['screen and (min-width: 320px)', {
      chartPadding: 30,
      labelOffset: 100,
      labelDirection: 'explode',
      labelInterpolationFnc: function(value) {
        return value;
      }
    }],
    ['screen and (min-width: 516px)', {
      labelOffset: 80,
      chartPadding: {
        top: 50,
        right: 40,
        bottom: 50,
        left: 40
      },
    }]
  ]; 
  
  new Chartist.Pie('#chartpie', data, options, responsiveOptions);