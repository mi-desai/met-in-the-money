var container = document.getElementById('wrapper');
var data = {
    categories: ['2018', '2017', '2016', '2015', '2014'],
    series: [{
            name: 'Operating Budget',
            data: [305, 305, 315, 285, 266]
        },
        {
            name: 'Income',
            data: [297, 298, 310, 277, 263]
        },
        {
            name: 'Expenses',
            data: [-305, -305, -315, -285, -266]
        }
    ]
};
var options = {
    chart: {
        width: 650,
        height: 600,
        title: 'Met Operating Budget',
        format: '1,000'
    },
    yAxis: {
        title: 'Fiscal Year'
    },
    xAxis: {
        title: 'Millions of $',
        min: -500,
        max: 500
    },
    series: {
        showLabel: true
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

tui.chart.barChart(container, data, options);