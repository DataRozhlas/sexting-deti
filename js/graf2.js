
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