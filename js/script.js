﻿import "./byeie"; // loučíme se s IE

/*
// snadné načtení souboru pro každého!
fetch("https://blabla.cz/blabla.json")
  .then(response => response.json()) // nebo .text(), když to není json
  .then(data => {
    // tady jde provést s daty cokoliv
  });
*/

//graf prvni
Highcharts.setOptions({
    colors: ['#AA4643', '#4572A7', '#F79A0C', '#3D96A', '#F79A0C', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']
});

Highcharts.chart('averagetime', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Kolik času strávíš na internetu?'
    },
    subtitle: {
        text: 'denně, podle věku'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Německo',
            'Švýcarsko',
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
        headerFormat: '<span style="font-size:09px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} minut</b></td></tr>',
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
        data: [114, 114, 102, 106, 132, 119, 110, 165, 139, 122, 93, 119, 91, 131, 125, 88, 74]
  
    }, {
        name: '12-14 let',
        data: [192, 184, 157, 211, 185, 193, 188, 237, 224, 190, 156, 162, 159, 202, 206, 146, 170],
  
    }, {
        name: '15-16 let',
        data: [229, 252, 181, 275, 239, 230, 231, 267, 236, 221,184, 205, 200, 253, 212, 196, 207],
        visible:false
  
    }]
  });

//graf druhy
Highcharts.chart('negative', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rozrušilo tě v posledním roce něco na internetu?'
    },
    subtitle: {
        text: 'děti, které odpověděly ano'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Německo',
            'Švýcarsko',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent</b></td></tr>',
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
        data: [20, 25, 4, 31, 27, 21, 18, 13, 40, 15, 8, 10, 10, 34, 22, 3, 33]
  
    }, {
        name: '12-14 let',
        data: [27, 35, 9, 36, 36, 21, 25, 25, 49, 26, 8, 13, 23, 30, 22, 13, 39]
  
    }, {
        name: '15-16 let',
        data: [34, 50, 10, 41, 37, 25, 36, 29, 49,32, 19, 23, 17, 41, 35, 11, 52],
        visible:false
  
    }]
  });
  
  //graf treti
  Highcharts.chart('frekvence', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Zažil jsi něco online, co tě rozrušilo?'
    },
    xAxis: {
        categories: [
        'Evropský průměr',
        'Česká republika',
        'Slovensko',
        'Srbsko',
        'Rumunsko',
        'Portugalsko',
        'Polsko',
        'Norsko',
        'Malta',
        'Litva',
        'Itálie',
        'Chorvatsko',
        'Francie',
        'Španělsko',
        'Estonsko',
        'Německo',
        'Švýcarsko',
    ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'v posledním roce, podle četnosti'
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
        name: 'pravidelně',
        data: [7, 12, 3, 13, 8, 5, 8, 4, 15, 7, 4, 3, 5, 9, 7, 2, 11]
    }, {
        name: 'občas',
        data: [17, 23, 4, 23, 25, 17, 17, 17, 30, 16, 6, 11, 12, 24, 17, 7, 27]
    }, {
        name: 'nikdy',
        data: [75, 66, 93, 65, 67, 78, 75, 79, 55, 77, 90, 86, 83, 66, 76, 91, 62]
    }]
});

//grafctvrty
Highcharts.chart('sexzpravy', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Dostal jsi jakýkoliv sexuálně zabarvený obsah?'
    },
    subtitle: {
        text: 'zprávy, fotografie, videa'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Flandry',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Finsko',
            'Španělsko',
            'Estonsko',
            'Německo',
            'Švýcarsko',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'děti, které odpověděly ano'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent</b></td></tr>',
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
        data: [16, 25, 36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25]
  
    }, {
        name: '15-16 let',
        data: [32, 50, 41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 45]
  
    }]
  });

//grafpaty
Highcharts.chart('sexpic', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Viděl jsi něco sexuálně laděného?'
    },
    subtitle: {
        text: 'internet, tisk, televize'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Švýcarsko',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent dětí</b></td></tr>',
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
        name: 'děti, které odpověděly ano',
        data: [
            33,
            43,
            27,
            50,
            36,
            32,
            29,
            39,
            40,
            24,
            27,
            28,
            21,
            41,
            22,
            41]
    }]
  });

//grafsesty
Highcharts.chart('rodice', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Baví se s tebou rodiče o internetu?'
    },
    xAxis: {
        categories: [
        'Evropský průměr',
        'Česká republika',
        'Slovensko',
        'Srbsko',
        'Rumunsko',
        'Portugalsko',
        'Polsko',
        'Norsko',
        'Malta',
        'Litva',
        'Itálie',
        'Chorvatsko',
        'Francie',
        'Španělsko',
        'Estonsko',
        'Německo',
        'Švýcarsko',
    ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
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
        data: [
            33,
            16,
            33,
            40,
            33,
            32,
            22,
            24,
            37,
            33,
            46,
            51,
            50,
            27,
            24,
            38,
            23,]
    }, {
        name: 'občas',
        data: [
            30,
            28,
            37,
            26,
            21,
            28,
            24,
            35,
            22,
            40,
            27,
            32,
            33,
            21,
            35,
            43,
            22,]
    }, {
        name: 'nikdy',
        data: [
            37,
            56,
            31,
            33,
            46,
            40,
            54,
            42,
            42,
            27,
            26,
            17,
            17,
            52,
            41,
            19,
            55,]
    }]
});

//grafsedmy
Highcharts.chart('safeonline', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Cítíš se online v bezpečí?'
    },
    subtitle: {
        text: 'dětí, které odpověděly vždy nebo velmi často'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Německo',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent</b></td></tr>',
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
        data: [61, 43, 67, 54, 44, 42, 56, 91, 49, 73, 53, 74, 55, 47, 79, 85]
  
    }, {
        name: 'chlapci',
        data: [70, 61, 65, 71, 50, 61, 69, 95, 60, 79, 64, 81, 58, 61, 84, 89]
  
    }]
  });

//grafosmy
  Highcharts.chart('setkani', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Komunikoval jsi na internetu s někým, koho jsi dříve neznal?'
    },
    subtitle: {
        text: 'děti, které odpověděly ano'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Švýcarsko',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent</b></td></tr>',
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
        name: 'psali jsme si',
        data: [37, 44, 34, 41, 38, 46, 40, 57, 34, 32, 23, 28, 25, 39, 42, 33]
  
    }, {
        name: 'setkali jsme se',
        data: [16, 20, 17, 25, 23, 20, 19, 21, 16, 12, 10, 10, 5, 22, 13, 14]
  
    }]
  });

//grafdevaty
Highcharts.chart('setkanipohlavi', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Kontakt s neznámými lidmi podle pohlaví'
    },
    subtitle: {
        text: 've věku 9-16 let'
    },
    xAxis: {
        categories: [
            'Evropský průměr',
            'Česká republika',
            'Slovensko',
            'Srbsko',
            'Rumunsko',
            'Portugalsko',
            'Polsko',
            'Norsko',
            'Malta',
            'Litva',
            'Itálie',
            'Chorvatsko',
            'Francie',
            'Španělsko',
            'Estonsko',
            'Švýcarsko',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'procent'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} procent</b></td></tr>',
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
        data: [33, 39, 33, 42, 38, 52, 33, 30, 24, 25, 21, 35, 38, 41, 32, 34]
  
    }, {
        name: 'chlapci',
        data: [35, 43, 43, 50, 42, 61, 35, 34, 23, 31, 29, 42, 46, 47, 35, 40]
  
    }]
  });