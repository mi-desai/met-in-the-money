var container = document.getElementById('wrapperFour');
var data = {
    categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
    series: [
        {
            name: 'Met Visitors',
            data: [6000, 6100, 6300, 6700, 7000, 7360, 7028]
        },
        {
            name: 'NYC Total Tourism',
            data: [51500, 53000, 54400, 55900, 60500, 62100, 65200]
        },
        {
            name: 'Musem of Modern Art',
            data: [2800, 2700, 3025, 3090, 3120, 3160, 3190]
        },
        {
            name: 'Museum of Natural History',
            data: [5000, 5150, 5600, 5700, 5550, 5400, 5500]
        },
        {
            name: 'Statue of Liberty and Ellis Island',
            data: [4500, 4550, 4700, 4650, 4450, 4900, 4950]
        },
    ]
};
var options = {
    chart: {
        width: 700,
        height: 500,
        title: 'Admissions Trends'
    },
    yAxis: [{
        title: 'Visitors',
        pointOnColumn: true
    }, {
        title: 'Percent (%)',
        pointOnColumn: true,
        min: 0,
        max: 100,
        suffix: '%'
    }],
    xAxis: {
        title: 'Year',
        type: 'datetime',
        dateFormat: 'YYYY'
    },
    series: {
        showDot: false,
        zoomable: true
    },
    tooltip: {
        suffix: 'visitors'
    }
};

var theme = {
    chart: {
        fontFamily: 'courier',
        fontWeight: 'bold',
        background: {
            color: '#F2EFE9',
            opacity: 0.5
        }
    },
    series: {
        colors: [
            '#BFB48F', '#B42335', '#63141D', '#9CAFB7', '#320A0F',
            '#564E58', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    },
    title: {
        fontSize: 50,
        fontFamily: 'Courier',
        fontWeight: 'bold',
        color: 'black'
    },
    xAxis: {
        title: {
            fontSize: 16,
            fontFamily: 'Courier',
            fontWeight: 'bold',
            color: 'black'
        }
    },
    yAxis: {
        title: {
            fontSize: 16,
            fontFamily: 'Courier',
            fontWeight: 'bold',
            color: 'black'
        }
    },
    legend: {
     label: {
         fontSize: 16,
         fontFamily: 'Courier',
         fontWeight: 'bold',
         color: 'black'
     }
 }
};

tui.chart.registerTheme('myTheme', theme);

// For apply theme

options.theme = 'myTheme';

var chart = tui.chart.lineChart(container, data, options);