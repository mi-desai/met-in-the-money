var container = document.getElementById('wrapperTwo');
var data = {
    categories: ['2018', '2017', '2016', '2015', '2014'],
    series: [
        {
            name: 'Curatorial',
            data: [91, 92, 98, 88, 83]
        },
        {
            name: 'Operations & Maintenance',
            data: [46, 52, 44, 43, 43]
        },
        {
            name: 'Administrative',
            data: [27, 31, 41, 37, 35]
        },
        {
            name: 'Guardianship',
            data: [43, 43, 44, 43, 40]
        },
        {
            name: 'Membership Development',
            data: [21, 21, 22, 20, 19]
        },
        {
            name: 'Education & Libaries',
            data: [15, 15, 16, 14, 13]
        },
        {
            name: 'Special Exhibitions',
            data: [21, 12, 22, 23, 19]
        },
        {
            name: 'Met Breuer',
            data: [18, 21, 13, 0, 0]
        },
        {
            name: 'Utilities & Interest',
            data: [21, 18, 16, 17, 16]
        }
    ]
};

var options = {
    chart: {
        width: 700,
        height: 500,
        title: 'Met Expenses Breakdown',
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