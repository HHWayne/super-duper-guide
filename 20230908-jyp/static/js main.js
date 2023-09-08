let twd_jpy_line = document.getElementById('line_chart');
let twd_jpy_data = JSON.parse(document.getElementById('exchandeData').innerHTML);

let xData = [];
let yData = [];

console.log('[twd_jpy_data]', twd_jpy_data);

for (let x = 0; x < twd_jpy_data.length; x++) {
    xData.push(twd_jpy_data[x].xData);
    yData.push(twd_jpy_data[x]["twd-jpy"]);
}

let lineChartData = [
    {
        x: xData,
        y: yData
    }
];

let layout = {
    margin: {
        height:600,
        width:600,
        t: 0
    }
};

Plotly.newPlot(twd_jpy_line, lineChartData, layout);
