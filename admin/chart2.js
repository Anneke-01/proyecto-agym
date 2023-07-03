var ctx2 = document.getElementById("doughnut").getContext("2d");
var myChart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    labels: ["Francia", "Alemania", "Crecia", "Reino Unido"],

    datasets: [
      {
        label: "Employees",
        data: [42, 12, 8, 6],
        backgroundColor: [
          "#209EBB",
          "#023047",
          "#FFB701",
          "#FC8500",
        ],
        // borderColor: [
        //   "#f30707",
        //   "rgb(19, 0, 230)",
        //   "rgb(252, 183, 9)",
        //   "rgb(166, 1, 237)",
        // ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
