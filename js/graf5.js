
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