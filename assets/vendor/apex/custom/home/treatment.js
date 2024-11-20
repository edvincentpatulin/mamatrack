var options = {
  chart: {
    height: 300,
    type: "line",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "solid",
    opacity: [1, 0.5],
  },
  stroke: {
    curve: "smooth",
    width: [4, 0],
  },
  series: [
    {
      name: "Experienced Mothers (Multigravida)",
      type: "line",
      data: [2, 3, 1, 1, 4, 3, 5, 2, 3, 5, 6, 1],
    },
    {
      name: "First-Time Mothers (Primigravida)",
      type: "bar",
      data: [3, 1, 3, 2, 4, 1, 5, 6, 2, 4, 8, 2],
    },
  ],
  grid: {
    borderColor: "#d8dee6",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  colors: ["#116AEF", "#327FF2", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#116AEF", "#327FF2", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 5,
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val;
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#treatment"), options);

chart.render();
