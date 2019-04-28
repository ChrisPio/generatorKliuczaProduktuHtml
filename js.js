function clean() {
  document.form.textview.value = "";
  location.reload();
}
function generujKod(symbol) {
  // warsztatowe

  if (
    document.getElementById("M-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "131-" + "4K-" + "230-" + "05-" + "W";
    document.getElementById("M1314K23005W").style.display = "block";
    document.getElementsByClassName("M1314K23005W").style.background.color = "#00000"
  }

  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("5k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "131-" + "5K-" + "230-" + "05-" + "W";
  }

  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("6k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "131-" + "6K-" + "230-" + "05-" + "W";
  }

  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "131-" + "4K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("5k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "131-" + "5K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("131").checked == true &&
    document.getElementById("6k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "131-" + "6K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "074-" + "4K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("5k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "074-" + "5K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("6k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "074-" + "6K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "074-" + "4K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "074-" + "4K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("4k").checked == true &&
    document.getElementById("230").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "074-" + "4K-" + "230-" + "05-" + "W";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("074").checked == true &&
    document.getElementById("3k").checked == true &&
    document.getElementById("012").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczka12vdc").checked == true
  ) {
    document.form.textview.value = "A-" + "074-" + "3K-" + "012-" + "05-" + "G";
  }
  else if (
    document.getElementById("A-").checked == true &&
    document.getElementById("049").checked == true &&
    document.getElementById("3k").checked == true &&
    document.getElementById("012").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "A-" + "049-" + "3K-" + "012-" + "05-" + "W";
  }
  else if (
    document.getElementById("M-").checked == true &&
    document.getElementById("049").checked == true &&
    document.getElementById("3k").checked == true &&
    document.getElementById("012").checked == true &&
    document.getElementById("05").checked == true &&
    document.getElementById("wtyczkaOkragla").checked == true
  ) {
    document.form.textview.value = "M-" + "049-" + "3K-" + "012-" + "05-" + "W";
  }
  else {
    document.form.textview.value = "Skontaktuj się z nami biuro@ledbecool.pl";
  }
};

