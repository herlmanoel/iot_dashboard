let dataTable = [];

fetch('http://127.0.0.1:8000/getJson/?id=1')
  .then(function (response) {
    return response.json();
  })
  .then(function (responde) {

    responde.forEach(function (item, index) {
      let xDate = new Date(item.ds);
      dataTable.push([xDate, item.y]);
    });
  });

var options = {
  series: [{
    name: "Desktops",
    data: dataTable
  }],
  chart: {
    height: 350,
    type: 'line',
    stacked: false,
    zoom: {
      type: 'x',
      enabled: true,
      autoScaleYaxis: true
    },
    toolbar: {
      autoSelected: 'zoom'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },
  title: {
    text: 'Product Trends by Month',
    align: 'left'
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
    style: 'hollow',
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
  },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value;
      }
    },
  },
};
console.log(labels[0]);
var chart = new ApexCharts(document.querySelector("#chart"), options);

window.onload = function () {
  chart.render();
}