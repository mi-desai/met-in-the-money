var container = document.getElementById('wrapperThree');
var data = {
    categories: ['2018', '2017', '2016', '2015', '2014'],
    series: [
        {
            name: 'Admissions',
            data: [48, 42, 40, 39, 37]
        },
        {
            name: 'Membership',
            data: [30, 27, 28, 30, 29]
        },
        {
            name: 'Gifts & Donations',
            data: [107, 101, 118, 89, 76]
        },
        {
            name: 'Endowment Support',
            data: [77, 92, 96, 86, 87]
        },
        {
            name: 'NYC Utilities Grant',
            data: [15, 15, 16, 14, 16]
        },
        {
            name: 'NYC Maintenance Grant',
            data: [12, 15, 9, 11, 11]
        },
        {
            name: 'Other',
            data: [9, 6, 3, 8, 8]
        }
    ]
};

var options = {
    chart: {
        width: 700,
        height: 500,
        title: 'Met Income Breakdown',
        'format': '1,000'
    },
    yAxis: {
        title: 'Year'
    },
    xAxis: {
        title: '$, in millions',
        max: 350
    },
    series: {
        stackType: 'normal'
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