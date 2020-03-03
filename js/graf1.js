import "./byeie";
Highcharts.chart('averagetime', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Průměrný věk strávený online'
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: [
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'HT',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Německo',
            'Česká republika',
            'Švýcarsko',
            'Průměr',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'v minutách'
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