//configuracao do grafico 2
let configGraficoTemperatura = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Temperatura',
            data: [],
            borderWidth: 3,
            borderColor: '#0c4af4',
            backgroundColor: 'transparent',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Temperatura [°C]'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                type: 'time',
                ticks: {
                    minRotation: 90,
                    source: 'data'
                },
                distribution: 'series',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Horas'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Temperatura'
                }
            }]
        }
    }
};

//configuracao do grafico 2
let configGraficoControllerTemperature = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Controller temperature [C]',
            data: [],
            borderWidth: 3,
            borderColor: '#0c4af4',
            backgroundColor: 'transparent',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Controller temperature [C]'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                type: 'time',
                ticks: {
                    minRotation: 90,
                    source: 'data'
                },
                distribution: 'series',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Controller temperature [C]'
                }
            }]
        }
    }
};

//configuracao do grafico 2
let configGraficoControllerAirPressure = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Air pressure 300m a.s.l. [hPa]',
            data: [],
            borderWidth: 3,
            borderColor: '#0c4af4',
            backgroundColor: 'transparent',
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Air Pressure'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                type: 'time',
                ticks: {
                    minRotation: 90,
                    source: 'data'
                },
                distribution: 'series',
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Air pressure 300m a.s.l. [hPa]'
                }
            }]
        }
    }
};


