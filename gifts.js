var container = document.getElementById('wrapperEight');
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
        title: 'Operating Expenses Breakdown',
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
    series: {
        colors: [
            '#83b14e', '#458a3f', '#295ba0', '#2a4175', '#289399',
            '#289399', '#617178', '#8a9a9a', '#516f7d', '#dddddd'
        ]
    }
};

// For apply theme

// tui.chart.registerTheme('myTheme', theme);
// options.theme = 'myTheme';

tui.chart.barChart(container, data, options);