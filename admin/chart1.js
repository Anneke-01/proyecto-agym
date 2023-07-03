var ctx = document.getElementById("lineChart").getContext("2d");

var MyChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ],
    datasets: [
      {
        label: "Ganancias en  $",
        data: [
          2050, 1900, 2100, 2800, 1800, 2000, 2500, 2600, 2450, 1950, 2300,
          2900,
        ],
        backgroundColor: ["#FC8500"],
        borderColor: "yellow",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
