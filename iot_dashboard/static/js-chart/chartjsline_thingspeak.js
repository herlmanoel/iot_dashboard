function createElementGraph(idElement, count) {
  var wrapper = document.getElementById(idElement);
  var idChild = `grafico_${count}`;
  HTML = `
    <div style="width: 1000px">
      <canvas id="${idChild}"></canvas>
    </div>
    `;
  var z = document.createElement("div"); // is a node
  z.innerHTML = HTML;
  wrapper.appendChild(z);
  return idChild;
}


function criarTodosOsGraficos() {
  var mainId = "main-cards";
  var idChannel = 196384;
  var idCanvas01 = createElementGraph(mainId, 1);
  console.log(idCanvas01);
  createGrafico(
    idCanvas01,
    "#000",
    "Teste Title",
    "xTextLabel",
    "yTextLabel",
    "datasetsTextLabel",
    idChannel,
    1,
    20
  );
  var idCanvas02 = createElementGraph(mainId, 2);
  console.log(idCanvas02);
  createGrafico(
    idCanvas02,
    "#000",
    "Teste Title",
    "xTextLabel",
    "yTextLabel",
    "datasetsTextLabel",
    idChannel,
    2,
    20
  );
  var idCanvas03 = createElementGraph(mainId, 3);
  console.log(idCanvas03);
  createGrafico(
    idCanvas03,
    "#000",
    "Teste Title",
    "xTextLabel",
    "yTextLabel",
    "datasetsTextLabel",
    idChannel,
    3,
    20
  );
  var idCanvas04 = createElementGraph(mainId, 4);
  console.log(idCanvas04);
  createGrafico(
    idCanvas04,
    "#000",
    "Teste Title",
    "xTextLabel",
    "yTextLabel",
    "datasetsTextLabel",
    idChannel,
    4,
    20
  );
  var idCanvas05 = createElementGraph(mainId, 5);
  console.log("idCanvas05: ", idCanvas05);
  createGraficoPelaApi(
    idCanvas05,
    "#000",
    "Teste Title",
    "Vamos ver",
    "É agr",
    "datasetsTextLabel",
    idChannel,
    1,
    20
  );

  var idCanvas06 = createElementGraph(mainId, 6);
  console.log("idCanvas06: ", idCanvas05);
  createGraficoPelaApi(
    idCanvas06,
    "#000",
    "Teste Title",
    "Vamos ver",
    "É agr",
    "datasetsTextLabel",
    idChannel,
    2,
    20
  );
}

var dataGrafico = {
  labels: [],
  datasets: [{
    label: "My First dataset",
    fillColor: "rgba(220,220,220,0.2)",
    strokeColor: "rgba(220,220,220,1)",
    pointColor: "rgba(220,220,220,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(220,220,220,1)",
    data: []
  }, 
  {
    label: "My Second dataset",
    fillColor: "rgba(151,187,205,0.2)",
    strokeColor: "rgba(151,187,205,1)",
    pointColor: "rgba(151,187,205,1)",
    pointStrokeColor: "#fff",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "rgba(151,187,205,1)",
    data: [28, 48, 40, 19, 86, 27, 90]
  }
  ]
};

let URL2 = `http://127.0.0.1:8000/getJson/?id=1`;
console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
console.log(URL2);
// let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number}.json?results=${num_results}`;
$.getJSON(URL2, function (data) {
  // console.log("dataGraf::::::::: ", data);
  data.forEach(function (item) {
      // console.log("AAAAAAAAAAAAA:", item);
      //variavel configGraficoControllerTemperature.data.datasets[0].data eh equivalente ao eixo y
      dataGrafico.labels.push(item.y);
      //variavel configGrafico.labels eh equivalente ao eixo x
      let x_date = new Date(item.ds);
      dataGrafico.datasets[0].data.push(x_date);
  });
});

console.log("dataGrafico.labels: ", dataGrafico.labels);
console.log("dataGrafico.datasets[0]: ", dataGrafico.datasets[0].data);




// var ctx = document.getElementById("myChart").getContext("2d");



$(document).ready(function() {
  // var myNewChart = new Chart(ctx).Line(dataGrafico);

  

  // criarTodosOsGraficos();
  // function getAtualizarArquivos() {    
  //   $.getJSON('http://127.0.0.1:8000/getData/?id=1', function (data) {
  //     console.log("data::::::::::::::::: ", data);
  //   });
  //   $.getJSON('http://127.0.0.1:8000/getData/?', function (data) {
  //     console.log("data::::::::::::::::: ", data);
  //   });

  //   criarTodosOsGraficos();
  // }

  // let atualizarArquivos = setInterval(getAtualizarArquivos, 300000);
  
});