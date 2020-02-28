
Highcharts.chart('rodice', {
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
        name: 'často',
        data: [3, 13, 8, 5, 8, 4, 15, 7, 4, 3, 5, 9, 7, 2, 12, 11, 7]
    }, {
        name: 'občas',
        data: [4, 23, 25, 17, 17, 17, 30, 16, 6, 11, 12, 24, 17, 7, 23, 27, 17]
    }, {
        name: 'nikdy',
        data: [93, 65, 67, 78, 75, 79, 55, 77, 90, 86, 83, 66, 76, 91, 66, 62, 75]
    }]
});


40, 33, 32, 22, 24, 37, 33, 46, 51, 50, 27, 24, 38, 16, 23, 33
