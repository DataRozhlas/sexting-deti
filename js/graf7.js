Highcharts.chart('safeonline', {
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
        name: 'dívky',
        data: [67, 54, 44, 42, 56, 91, 49, 73, 53, 74, 55, 47, 79, 85, 43, 61]
  
    }, {
        name: 'chlapci',
        data: [65, 71, 50, 61, 69, 95, 60, 79, 64, 81, 58, 61, 84, 89, 61, 70]
  
    }]
  });