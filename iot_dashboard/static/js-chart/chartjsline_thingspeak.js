/*cria o grafico myline2 com os ultimos valores enviados#
* para o thingspeak
*/
function createLineTemperatura(IdElement) {
  let ctx = document.getElementById(IdElement).getContext('2d');
  window.myLine2 = new Chart(ctx, configGraficoTemperatura);
  getLastThingSpeakData(1293177, 3, 20);
};
// configGraficoControllerTemperature
/*
* requisita os ultimos dados enviados para o thingspeak
* e atualiza os valores no grafico
*/
function getLastThingSpeakData(channel_id, field_number1, num_results) {
  // let channel_id = 1293177; //id do canal
  // let field_number1 = 1; //numero do field
  // // let field_number2 = 2; //numero do field
  // let num_results = 20; //numero de resultados requisitados
  let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number1}.json?results=${num_results}`;
  $.getJSON(URL, function (data) {
    // get the data point
    feeds = data.feeds;
    // imprime os feeds recebidos
    console.log(data.feeds);
    // intera em todos os feeds recebidos e os adiciona no grafico
    for (d in feeds) {
      //variavel configGraficoTemperatura.data.datasets[0].data eh equivalente ao eixo y
      configGraficoTemperatura.data.datasets[0].data.push(feeds[d].field3);
      //variavel configGraficoTemperatura.labels eh equivalente ao eixo x
      let x_date = new Date(feeds[d].created_at);
      configGraficoTemperatura.data.labels.push(x_date);
    }
    window.myLine2.update();
  });

  // $.getJSON(URL, function (data) {
  //   // get the data point
  //   feeds = data.feeds;
  //   // imprime os feeds recebidos
  //   console.log(data.feeds)
  //   // intera em todos os feeds recebidos e os adiciona no grafico
  //   for (d in feeds) {
  //     //variavel configGraficoTemperatura.data.datasets[1].data eh equivalente ao eixo y
  //     configGraficoTemperatura.data.datasets[0].data.push(feeds[d].field3);
  //     //variavel configGraficoTemperatura.labels eh equivalente ao eixo x
  //     let x_date = new Date(feeds[d].created_at);
  //     configGraficoTemperatura.data.labels.push(x_date);
  //   }
  //   window.myLine2.update();
  // });
}
// =======================================================================
/*cria o grafico myline2 com os ultimos valores enviados#
* para o thingspeak
*/
function createLineControllerTemperature(IdElement) {
  let ctx = document.getElementById(IdElement).getContext('2d');
  window.linhaGraficoControllerTemperature = new Chart(ctx, configGraficoControllerTemperature);
  getLastThingSpeakDataControllerTemperature(357142, 7, 20);
};

function getLastThingSpeakDataControllerTemperature(channel_id, field_number1, num_results) {
  // let channel_id = 357142; //id do canal
  // let field_number1 = 1; //numero do field
  // // let field_number2 = 2; //numero do field
  // let num_results = 20; //numero de resultados requisitados
  let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number1}.json?results=${num_results}`;
  $.getJSON(URL, function (data) {
    // get the data point
    feeds = data.feeds;
    // imprime os feeds recebidos
    console.log(data.feeds);
    // intera em todos os feeds recebidos e os adiciona no grafico
    for (d in feeds) {
      //variavel configGraficoControllerTemperature.data.datasets[0].data eh equivalente ao eixo y
      configGraficoControllerTemperature.data.datasets[0].data.push(feeds[d].field7);
      //variavel configGraficoControllerTemperature.labels eh equivalente ao eixo x
      let x_date = new Date(feeds[d].created_at);
      configGraficoControllerTemperature.data.labels.push(x_date);
    }
    window.linhaGraficoControllerTemperature.update();
  });

  // $.getJSON(URL, function (data) {
  //   // get the data point
  //   feeds = data.feeds;
  //   // imprime os feeds recebidos
  //   console.log(data.feeds)
  //   // intera em todos os feeds recebidos e os adiciona no grafico
  //   for (d in feeds) {
  //     //variavel configGraficoControllerTemperature.data.datasets[1].data eh equivalente ao eixo y
  //     configGraficoControllerTemperature.data.datasets[0].data.push(feeds[d].field7);
  //     //variavel configGraficoControllerTemperature.labels eh equivalente ao eixo x
  //     let x_date = new Date(feeds[d].created_at);
  //     configGraficoControllerTemperature.data.labels.push(x_date);
  //   }
  //   window.linhaGraficoControllerTemperature.update();
  // });
}
// configGraficoControllerAirPressure

/*cria o grafico myline2 com os ultimos valores enviados#
* para o thingspeak
*/
function createLineAirPressure(IdElement) {
  let ctx = document.getElementById(IdElement).getContext('2d');
  window.lineWAirPressure = new Chart(ctx, configGraficoControllerAirPressure);
  getLastThingSpeakDataAirPressure(357142, 4, 20);
};

function getLastThingSpeakDataAirPressure(channel_id, field_number1, num_results) {
  // let channel_id = 357142; //id do canal
  // let field_number1 = 1; //numero do field
  // // let field_number2 = 2; //numero do field
  // let num_results = 20; //numero de resultados requisitados
  let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number1}.json?results=${num_results}`;
  console.log('URL: ', URL);
  $.getJSON(URL, function (data) {
    // get the data point
    feeds = data.feeds;
    // imprime os feeds recebidos
    console.log(data.feeds);
    // intera em todos os feeds recebidos e os adiciona no grafico
    for (d in feeds) {
      //variavel configGraficoControllerTemperature.data.datasets[0].data eh equivalente ao eixo y
      configGraficoControllerAirPressure.data.datasets[0].data.push(feeds[d].field4);
      //variavel configGraficoControllerAirPressure.labels eh equivalente ao eixo x
      let x_date = new Date(feeds[d].created_at);
      configGraficoControllerAirPressure.data.labels.push(x_date);
    }
    window.lineWAirPressure.update();
  });

  $.getJSON(URL, function (data) {
    // get the data point
    feeds = data.feeds;
    // imprime os feeds recebidos
    console.log(data.feeds)
    // intera em todos os feeds recebidos e os adiciona no grafico
    for (d in feeds) {
      //variavel configGraficoControllerAirPressure.data.datasets[1].data eh equivalente ao eixo y
      configGraficoControllerAirPressure.data.datasets[1].data.push(feeds[d].field4);
      //variavel configGraficoControllerAirPressure.labels eh equivalente ao eixo x
      let x_date = new Date(feeds[d].created_at);
      configGraficoControllerAirPressure.data.labels.push(x_date);
    }
    window.lineWAirPressure.update();
  });
}

window.onload = function () {
  createLineTemperatura('grafico-01');
  createLineControllerTemperature('grafico-02');
  createLineAirPressure('grafico-03');
};