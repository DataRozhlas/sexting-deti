
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