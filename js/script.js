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
Highcharts.setOptions({
    colors: ['#AA4643', '#4572A7', '#F79A0C', '#3D96A', '#F79A0C', '#172983', '#007BC2', '#89BA17', '#D4B66D', '#B85637', '#A21F16', '#732813', '#5C748C']
});

var grafDataNeg = [];
var grafNegCat = [ 'Evropský průměr', 'Česká republika', 'Slovensko', 'Srbsko', 'Rumunsko', 'Portugalsko', 'Polsko', 'Norsko', 'Malta', 'Litva', 'Itálie', 'Chorvatsko', 'Francie', 'Španělsko', 'Estonsko', 'Německo', 'Švýcarsko' ];
var grafNegVal = [20, 25, 4, 31, 27, 21, 18, 13, 40, 15, 8, 10, 10, 34, 22, 3, 33];

for (let index = 0; index < grafNegVal.length; index++) {
    grafDataNeg.push(
        {y: grafNegVal[index],
        name: grafNegCat[index]}
    );    
}

Highcharts.chart('negative', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Rozrušilo tě v posledním roce něco na internetu?'
    },
    credits: {
        enabled: true,
        text: 'Zdroj: EU Kids Online 2020',
        href: 'https://irtis.muni.cz/news/eu-kids-online-2020-report'
    },
    subtitle: {
        text: 'děti, které odpověděly ano'
    },
    xAxis: {
        type: 'category',
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
        id: 'hlavni',
        name: '9-11 let',
        data: grafDataNeg,
        dataSorting: {
            enabled: true
        }
      }, {
        linkedTo: 'hlavni',
        name: '12-14 let',
        showInLegend: true, 
        data: [27, 35, 9, 36, 36, 21, 25, 25, 49, 26, 8, 13, 23, 30, 22, 13, 39]
    }, {
        linkedTo: 'hlavni',
        name: '15-16 let',
        showInLegend: true, 
        data: [34, 50, 10, 41, 37, 25, 36, 29, 49,32, 19, 23, 17, 41, 35, 11, 52],
  
    }]
  });
  
  //graf treti
  var frekvenceData = [];
  var frekvenceKategorie = [ 'Evropský průměr', 'Česká republika', 'Slovensko', 'Srbsko', 'Rumunsko', 'Portugalsko', 'Polsko', 'Norsko', 'Malta', 'Litva', 'Itálie', 'Chorvatsko', 'Francie', 'Španělsko', 'Estonsko', 'Německo', 'Švýcarsko' ];
  var frekvenceHodnoty = [7, 12, 3, 13, 8, 5, 8, 4, 15, 7, 4, 3, 5, 9, 7, 2, 11];
  
  for (let index = 0; index < frekvenceHodnoty.length; index++) {
      frekvenceData.push(
          {y: frekvenceHodnoty[index],
          name: frekvenceKategorie[index]}
      );    
  }

  Highcharts.chart('frekvence', {
    chart: {
        type: 'bar'
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Zažil/a jsi něco online, co tě rozrušilo?'
    },
    credits: {
        enabled: true,
        text: 'Zdroj: EU Kids Online 2020',
        href: 'https://irtis.muni.cz/news/eu-kids-online-2020-report'
    },
    xAxis: {
        type: 'category' 
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
        name: 'nikdy',
        data: [75, 66, 93, 65, 67, 78, 75, 79, 55, 77, 90, 86, 83, 66, 76, 91, 62],
        linkedTo: 'hlavni',
        showInLegend: true
    },{
        name: 'občas',
        data: [17, 23, 4, 23, 25, 17, 17, 17, 30, 16, 6, 11, 12, 24, 17, 7, 27],
        linkedTo: 'hlavni',
        showInLegend: true
    },{
        id: 'hlavni',
        name: 'pravidelně',
        data: frekvenceData,
        dataSorting: {
            enabled: true
        }
    }]
});

//grafctvrty

var sexzpravyData = [];
var dataKategorie = [ 'Evropský průměr', 'Česká republika', 'Belgie (Flandry)', 'Slovensko', 'Srbsko', 'Rumunsko', 'Portugalsko', 'Polsko', 'Norsko', 'Malta', 'Litva', 'Itálie', 'Chorvatsko', 'Francie', 'Finsko', 'Španělsko', 'Estonsko', 'Německo', 'Švýcarsko' ];
var dataHodnoty = [32, 50, 41, 15, 47, 30, 36, 24, 49, 44, 15, 12, 17, 14, 38, 45, 18, 43, 45];

for (let index = 0; index < dataHodnoty.length; index++) {
    sexzpravyData.push(
        {y: dataHodnoty[index],
        name: dataKategorie[index]}
    );    
}

Highcharts.chart('sexzpravy', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Dostal/a jsi někdy v posledním roce zprávu se sexuálním obsahem?'
    },
    credits: {
        enabled: true,
        text: 'Zdroj: EU Kids Online 2020',
        href: 'https://irtis.muni.cz/news/eu-kids-online-2020-report'
    },
    subtitle: {
        text: 'v posledním roce: zprávy, fotografie, videa'
    },
    xAxis: {
        type: 'category',
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
    series: [ {
        linkedTo: 'hlavni',
        showInLegend: true,
        name: '12-14 let',
        data: [16, 25, 36, 6, 22, 23, 15, 9, 17, 21, 8, 6, 5, 9, 14, 25, 6, 21, 25],    
    },{
        id: 'hlavni',
        name: '15-16 let',
        data: sexzpravyData,
        dataSorting: {
            enabled: true
        }
    }
       
  
    
]
  });

//grafsesty
var rodiceData = [];
  var rodiceKategorie = ['Evropský průměr', 'Česká republika', 'Slovensko', 'Srbsko', 'Rumunsko', 'Portugalsko', 'Polsko', 'Norsko', 'Malta', 'Litva', 'Itálie', 'Chorvatsko', 'Francie', 'Španělsko', 'Estonsko', 'Německo', 'Švýcarsko' ];
  var rodiceHodnoty = [ 37, 56, 31, 33, 46, 40, 54, 42, 42, 27, 26, 17, 17, 52, 41, 19, 55,];
  
  for (let index = 0; index < rodiceHodnoty.length; index++) {
      rodiceData.push(
          {y: rodiceHodnoty[index],
          name: rodiceKategorie[index]}
      );    
  }

Highcharts.chart('rodice', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Baví se s tebou rodiče o internetu?'
    },
    credits: {
        enabled: true,
        text: 'Zdroj: EU Kids Online 2020',
        href: 'https://irtis.muni.cz/news/eu-kids-online-2020-report'
    },
    xAxis: {
        type: 'category' 
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
        linkedTo: 'hlavni',
        showInLegend: true,
        name: 'často',
        data: [ 33, 16, 33, 40, 33, 32, 22, 24, 37, 33, 46, 51, 50, 27, 24, 38, 23,],
            visible:false
    }, {linkedTo: 'hlavni',
        showInLegend: true,
        name: 'občas',
        data: [ 30, 28, 37, 26, 21, 28, 24, 35, 22, 40, 27, 32, 33, 21, 35, 43, 22,],
            visible:false
    }, {
        id: 'hlavni',
        name: 'nikdy',
        data: rodiceData,
        dataSorting: {
            enabled: true
        }
    }]
});

//grafosmy

var setkaniData = [];
  var setkaniKategorie = [ 'Evropský průměr', 'Česká republika', 'Slovensko', 'Srbsko', 'Rumunsko', 'Portugalsko', 'Polsko', 'Norsko', 'Malta', 'Litva', 'Itálie', 'Chorvatsko', 'Francie', 'Španělsko', 'Estonsko', 'Švýcarsko' ];
  var setkaniHodnoty = [16, 20, 17, 25, 23, 20, 19, 21, 16, 12, 10, 10, 5, 22, 13, 14];
  
  for (let index = 0; index < setkaniHodnoty.length; index++) {
      setkaniData.push(
          {y: setkaniHodnoty[index],
          name: setkaniKategorie[index]}
      );    
  }


Highcharts.chart('setkani', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'Komunikoval jsi na internetu s někým, koho jsi dříve neznal?'
    },
    credits: {
        enabled: true,
        text: 'Zdroj: EU Kids Online 2020',
        href: 'https://irtis.muni.cz/news/eu-kids-online-2020-report'
    },
    subtitle: {
        text: 'děti, které odpověděly ano'
    },
    xAxis: {
        type: 'category',
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
        data: [37, 44, 34, 41, 38, 46, 40, 57, 34, 32, 23, 28, 25, 39, 42, 33],
        linkedTo: 'hlavni',
        showInLegend: true,
        visible: false
  
    }, {
        id: 'hlavni',
        name: 'setkali jsme se',
        data: setkaniData,
        dataSorting: {
            enabled: true
        }
    }]
  });