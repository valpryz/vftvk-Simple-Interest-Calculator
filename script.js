let slider = document.querySelector("#rate");
let sliderValue = document.querySelector(".value");

slider.oninput = function () {
  sliderValue.innerHTML = slider.value;
};

function compute() {
  let amount = document.querySelector("#principal");
  let years = document.querySelector("#years");
  let result = document.querySelector("#result");
  let compute =
    Number(amount.value) * (Number(slider.value) / 100) * Number(years.value);

  if (Number(amount.value) > 0) {
    result.innerHTML = `If you deposit <mark>${amount.value}</mark>,<br />
  at an interest rate of <mark>${slider.value}%</mark>. <br />
  You will receive an amount of <mark>${compute}</mark>, <br />
  in the year <mark>${2021 + Number(years.value)}</mark>`;
  } else {
    window.alert("please enter a positive value");
  }
}
