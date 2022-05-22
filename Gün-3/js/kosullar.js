var hesapla = function () {
  var sayi = parseInt(document.getElementById("txtSayi").value);
  if (!isNaN(sayi)) {
    var fibo = fibonacci(sayi);
    console.log(fibo);

    var ff = faktoriel(sayi);
    console.log(ff);
  }
  if (sayi >= 1 && sayi <= 6) {
    zarAt(sayi);
  } else if (isNaN(sayi)) {
    alert("Lütfen bir sayı giriniz");
    return;
  } else {
    alert("Lütfen 1 ile 6 arasında bir sayı giriniz");
    return;
  }
};
var zarAt = function (sayi) {
  var sayac = 0;
  while (true) {
    var zar1 = Math.floor(Math.random() * 6) + 1;
    var zar2 = Math.floor(Math.random() * 6) + 1;
    //console.log(zar1 + " " + zar2);
    sayac++;
    if (zar1 == zar2 && sayi == zar1) {
      alert(sayac + ". denemede " + zar1 + " " + zar2 + " çifti geldi");
      break;
    }
  }
  return sayac;
};

function fibonacci(sayi) {
  if (sayi == 0) {
    return 0;
  } else if (sayi == 1) {
    return 1;
  } else {
    return fibonacci(sayi - 1) + fibonacci(sayi - 2);
  }
}

function faktoriel(sayi) {
  if (sayi == 0) {
    return 1;
  } else {
    return sayi * faktoriel(sayi - 1);
  }
}
