let items = document.getElementsByClassName("item");
let elements = document.getElementsByClassName("element");

function less(e) {
  let amount = e.parentElement.getElementsByClassName("count")[0].innerHTML;
  amount = parseInt(amount, 10);
  if (amount != 1) {
    amount -= 1;
    e.parentElement.getElementsByClassName("count")[0].innerHTML = amount;
    recount();
  }
}

function more(e) {
  let amount = e.parentElement.getElementsByClassName("count")[0].innerHTML;
  amount = parseInt(amount, 10);
  amount += 1;
  e.parentElement.getElementsByClassName("count")[0].innerHTML = amount;
  recount();
}

function recount() {
  let total = 0.0;
  for (let i = 0; i < items.length; i++) {
    let price = items[i]
      .getElementsByClassName("prices")[0]
      .getElementsByTagName("p")[0];
    price = price.innerHTML.substring(1);
    price = parseFloat(price, 10);

    let amount = items[i].getElementsByClassName("count")[0].innerHTML;
    amount = parseInt(amount, 10);

    total += price * amount;
    total.toFixed(2);
  }

  for (let i = 0; i < elements.length - 1; i++) {
    let price = elements[i].getElementsByTagName("p")[1];
    price = price.innerHTML.substring(1);
    price = parseFloat(price, 10);
    total += price;
    total.toFixed(2);
  }

  document.getElementById("total").innerHTML =
    "$" + total.toFixed(2).toString(10);
}

function toSubmit() {}
