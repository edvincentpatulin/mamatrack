var options = {
  series: [
    {
      name: "Health Activity",
      data: [90, 50, 30, 40, 70, 20],
    },
  ],
  chart: {
    height: 370,
    type: "radar",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    stepSize: 20,
  },
  colors: ["#116aef", "#ced1d8"],
  xaxis: {
    categories: [
      "Walking",
      "Sleeping",
      "Yoga",
      "Tailor Sitting",
      "Squatting",
      "Pelvic Tilt",
    ],
  },
};

var chart = new ApexCharts(document.querySelector("#healthActivity"), options);
chart.render();
