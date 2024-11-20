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
    opacity: [0.1, 1],
  },
  stroke: {
    curve: "smooth",
    width: [0, 4],
  },
  series: [
    {
      name: "New Patients",
      type: "area",
      data: [10, 9, 12, 15, 5, 6, 8, 10, 20, 18, 30, 7],
    },
    {
      name: "Return Patients",
      type: "line",
      data: [5, 3, 2, 6, 3, 6, 3, 8, 13, 7, 15, 5],
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
  legend: {
    position: "bottom",
    horizontalAlign: "center",
  },
  colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
  markers: {
    size: 0,
    opacity: 0.3,
    colors: ["#116AEF", "#0ebb13", "#5394F5", "#75AAF9", "#96BFFC", "#B7D4FF"],
    strokeColor: "#ffffff",
    strokeWidth: 1,
    hover: {
      size: 7,
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

var chart = new ApexCharts(document.querySelector("#patients"), options);

chart.render();
