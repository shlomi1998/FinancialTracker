let Rent = localStorage.getItem("totalRent");
let tRent = 0;

if (Rent) {
  tRent = parseInt(Rent);
}

let Grocories = localStorage.getItem("totalGrocories");
let tGrocories = 0;
if (Grocories) {
  tGrocories = parseInt(Grocories);
}

let Restaurants = localStorage.getItem("totalRestaurants");
let tRestaurants = 0;
if (Restaurants) {
  tRestaurants = parseInt(Restaurants);
}

let Entertainment = localStorage.getItem("totalEntertainment");
let tEntertainment = 0;
if (Entertainment) {
  tEntertainment = parseInt(Entertainment);
}

let Bills = localStorage.getItem("totalBills");
let tBills = 0;
if (Bills) {
  tBills = parseInt(Bills);
}

let General = localStorage.getItem("totalGeneral");
let tGeneral = 0;

if (General) {
  tGeneral = parseInt(General);
}

let data = [
  {
    data: [tRent, tGrocories, tRestaurants, tBills, tEntertainment, tGeneral],
    backgroundColor: [
      "#b70800",
      "#ffcd61",
      "#0049b0",
      "#ff5aa9",
      "#d2f048",
      "#4e7627",
    ],
    borderColor: "black",
  },
];

let options = {
  tooltips: {
    enabled: false,
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const datapoints = ctx.chart.data.datasets[0].data;
        const total = datapoints.reduce(
          (total, datapoint) => total + datapoint,
          0
        );
        const percentage = (value / total) * 100;
        return percentage.toFixed(2) + "%";
      },
      color: "white",
    },
  },
};

const ctx = document.getElementById("pie-chart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "Rent",
      "Grocories",
      "Restaurants",
      "Bills",
      "Entertainment",
      "General",
    ],
    datasets: data,
  },
  options: options,
  plugins: [ChartDataLabels],
});
