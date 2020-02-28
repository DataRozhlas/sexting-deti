import "./byeie"; // loučíme se s IE

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/

//graf prvni
Highcharts.chart('averagetime', {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Monthly Average Rainfall'
  },
  subtitle: {
      text: 'Source: WorldClimate.com'
  },
  xAxis: {
      categories: [
          'Slovensko',
          'RS',
          'RO',
          'PT',
          'PL',
          'NO',
          'MT',
          'LT',
          'IT',
          'HT',
          'FR',
          'ES',
          'EE',
          'DE',
          'CZ',
          'CH',
          'Průměr',
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Rainfall (mm)'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{
      name: '9-11 let',
      data: [102, 106, 132, 119, 110, 165, 139, 122, 93, 119, 91, 131, 125, 88, 114, 74, 114]

  }, {
      name: '12-14 let',
      data: [157, 211, 185, 193, 188, 237, 224, 190, 156, 162, 159, 202, 206, 146, 184, 170, 192]

  }, {
      name: '15-16 let',
      data: [181, 275, 239, 230, 231, 267, 236, 221,184, 205, 200, 253, 212, 196, 252, 207, 229]

  }]
});

//graf druhy
Highcharts.chart('negative', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Slovensko',
            'RS',
            'RO',
            'PT',
            'PL',
            'NO',
            'MT',
            'LT',
            'IT',
            'HT',
            'FR',
            'ES',
            'EE',
            'DE',
            'CZ',
            'CH',
            'Průměr',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '9-11 let',
        data: [4, 31, 27, 21, 18, 13, 40, 15, 8, 10, 10, 34, 22, 3, 25, 33, 20]
  
    }, {
        name: '12-14 let',
        data: [9, 36, 36, 21, 25, 25, 49, 26, 8, 13, 23, 30, 22, 13, 35, 39, 27]
  
    }, {
        name: '15-16 let',
        data: [10, 41, 37, 25, 36, 29, 49,32, 19, 23, 17, 41, 35, 11, 50, 52, 34]
  
    }]
  });
  
  //graf treti
  Highcharts.chart('frekvence', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Stacked bar chart'
    },
    xAxis: {
        categories: ['staty', 'Párkrát', 'Nikdy']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total fruit consumption'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Měsíčně',
        data: [3, 13, 8, 5, 8, 4, 15, 7, 4, 3, 5, 9, 7, 2, 12, 11, 7]
    }, {
        name: 'Občas',
        data: [4, 23, 25, 17, 17, 17, 30, 16, 6, 11, 12, 24, 17, 7, 23, 27, 17]
    }, {
        name: 'Nikdy',
        data: [93, 65, 67, 78, 75, 79, 55, 77, 90, 86, 83, 66, 76, 91, 66, 62, 75]
    }]
});

//grafctvrty
Highcharts.chart('negative', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Slovensko',
            'RS',
            'RO',
            'PT',
            'PL',
            'NO',
            'MT',
            'LT',
            'IT',
            'HT',
            'FR',
            'ES',
            'EE',
            'DE',
            'CZ',
            'CH',
            'Průměr',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '12-14 let',
        data: [36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25, 25, 16]
  
    }, {
        name: '15-16 let',
        data: [41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 50, 45, 32]
  
    }]
  });

//grafpaty
Highcharts.chart('sexpic', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Monthly Average Rainfall'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: [
            'Slovensko',
            'RS',
            'RO',
            'PT',
            'PL',
            'NO',
            'MT',
            'LT',
            'IT',
            'HT',
            'FR',
            'ES',
            'EE',
            'DE',
            'CZ',
            'CH',
            'Průměr',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: '12-14 let',
        data: [36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25, 25, 16]
  
    }, {
        name: '15-16 let',
        data: [41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 50, 45, 32]
  
    }]
  });