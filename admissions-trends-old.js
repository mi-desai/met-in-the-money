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
            name: 'Central Park',
            data: [51500, 53000, 54400, 55900, 60500, 62100, 65200]
        },
    ]
};
var options = {
    chart: {
        width: 700,
        height: 500,
        title: 'Admissions Trends',
        format: '1,000'
    },
    yAxis: {
        title: 'Visitors',
        max: 70000,
        pointOnColumn: true
    },
    xAxis: {
        title: 'Year'
    },
    series: {
        stackType: 'normal',
        showDot: false,
        areaOpacity: 1
    },
    tooltip: {
        grouped: true
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

tui.chart.areaChart(container, data, options);