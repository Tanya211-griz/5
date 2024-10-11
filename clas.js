function click1(event) {
    event.preventDefault();
    if (document.getElementById("good").value === "") {
        alert("Выберите товар из списка!");
        return;
    }

    let good_price = parseInt(document.getElementById("good").value);
    let m = document.getElementById("amount").value.match(/^[1-9]\d*$/);
    if (m === null) {
        alert("Введите целое число больше нуля!");
        return;
    }

    let good_amount = parseInt(m);
    let res = document.getElementById("result");
    res.textContent = String("Стоимость " + good_amount +
        " шт. равна " + good_price * good_amount);
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button");
    b.addEventListener("click", click1);
});