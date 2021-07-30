function createGrafico(
  idCanvas,
  color,
  title,
  xTextLabel,
  yTextLabel,
  datasetsTextLabel,
  channel_id,
  field_number,
  num_results
) {
  let configGrafico = {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: datasetsTextLabel,
          data: [],
          borderWidth: 3,
          borderColor: color,
          backgroundColor: "transparent",
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: title,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            ticks: {
              minRotation: 90,
              source: "data",
            },
            distribution: "series",
            display: true,
            scaleLabel: {
              display: true,
              labelString: xTextLabel,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: yTextLabel,
            },
          },
        ],
      },
    },
  };

  function createLineGrafico(idCanvas) {
    let ctx = document.getElementById(idCanvas).getContext("2d");
    window['lineWriter'+field_number] = new Chart(
      ctx,
      configGrafico
    );
    getLastThingSpeakDataAirPressure(channel_id, field_number, num_results);
  }

  function getLastThingSpeakDataAirPressure(
    channel_id,
    field_number,
    num_results
  ) {
    // let channel_id = 357142; //id do canal
    // let field_number = 1; //numero do field
    // // let field_number2 = 2; //numero do field
    // let num_results = 20; //numero de resultados requisitados
    let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number}.json?results=${num_results}`;
    $.getJSON(URL, function (data) {
      // get the data point
      feeds = data.feeds;
      // console.log("feeds: ",feeds);
      // intera em todos os feeds recebidos e os adiciona no grafico
      for (d in feeds) {
        // console.log("d:", d);
        //variavel configGraficoControllerTemperature.data.datasets[0].data eh equivalente ao eixo y
        configGrafico.data.datasets[0].data.push(feeds[d]['field'+field_number]);
        //variavel configGrafico.labels eh equivalente ao eixo x
        let x_date = new Date(feeds[d].created_at);
        configGrafico.data.labels.push(x_date);
      }
      window['lineWriter'+field_number].update();
    });
  }

  
   return createLineGrafico(idCanvas);
}

function createGraficoPelaApi(
  idCanvas,
  color,
  title,
  xTextLabel,
  yTextLabel,
  datasetsTextLabel,
  channel_id,
  field_number,
  num_results
) {
  let configGrafico = {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: datasetsTextLabel,
          data: [],
          borderWidth: 1,
          borderColor: color,
          backgroundColor: "transparent",
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: title,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            type: "time",
            ticks: {
              minRotation: 90,
              source: "data",
            },
            distribution: "series",
            display: true,
            scaleLabel: {
              display: true,
              labelString: xTextLabel,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
              labelString: yTextLabel,
            },
          },
        ],
      },
    },
  };

  function createLineGrafico(idCanvas) {
    let ctx = document.getElementById(idCanvas).getContext("2d");
    window['lineWriter'+field_number] = new Chart(
      ctx,
      configGrafico
    );
    getLastThingSpeakDataAirPressure(channel_id, field_number, num_results);
  }

  function getLastThingSpeakDataAirPressure(
    channel_id,
    field_number,
    num_results
  ) {
    // let channel_id = 357142; //id do canal
    // let field_number = 1; //numero do field
    // // let field_number2 = 2; //numero do field
    // let num_results = 20; //numero de resultados requisitados
    let URL = `http://127.0.0.1:8000/getJson/?id=${field_number}`;
    // console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");
    // console.log(URL);
    // let URL = `https://api.thingspeak.com/channels/${channel_id}/fields/${field_number}.json?results=${num_results}`;
    $.getJSON('http://127.0.0.1:8000/getJson/?id=1', function (data) {
      // console.log("data::::::::::::::::: ", data);
      // // get the data point
      // feeds = data.feeds;
      // console.log("feeds: ",feeds);
      // // intera em todos os feeds recebidos e os adiciona no grafico
      // for (d in feeds) {
        
      // }
      data.forEach(function (item) {
        // console.log("eita:", item);
        //variavel configGraficoControllerTemperature.data.datasets[0].data eh equivalente ao eixo y
        configGrafico.data.datasets[0].data.push(item.y);
        //variavel configGrafico.labels eh equivalente ao eixo x
        let x_date = new Date(item.ds);
        configGrafico.data.labels.push(x_date);
      })
      window['lineWriter'+field_number].update();
    });
  }

  
   return createLineGrafico(idCanvas);
}