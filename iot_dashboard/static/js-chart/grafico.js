let labels = [];
let dataY = [];
let parar = 200;
let dataTable = [];
let primeira =  '';
fetch('http://127.0.0.1:8000/getJson/?id=1')
  .then(function (response) {
    return response.json();
  })
  .then(function (responde) {
    let item = [];
    // responde.length =;
    responde.forEach(function (item, index) {
      dataY.push(item.y);
      //variavel labels eh equivalente ao eixo x
      // let x_date = new Date(item.ds);
      if(index === 0) {
        primeira = item.ds;
      }
      let xDate = new Date(item.ds);
      labels.push(xDate);
      dataTable.push([xDate, item.y]);
      console.log([xDate, item.y]);
    });
  })

console.log(dataTable);
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
    // min: new Date('14 Nov 2012').getTime(),
    // max: new Date('14 Nov 2012').getTime(),
    tickAmount: 6,
  },
  // xaxis: {
  //   categories: labels,
  //   type: 'category',
  //   labels: {
  //     // formatter: function (value) {
  //     //   let dataAt = new Date(value);
  //     //   if(parseInt(dataAt.getHours()) === 6) {
  //     //     return dataAt;
  //     //   }
  //     //   return '';
  //     // }
  //   }
  // },
  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "$";
      }
    },
  },
};
console.log(labels[0]);
var chart = new ApexCharts(document.querySelector("#chart"), options);

window.onload = function () {
  chart.render();
}