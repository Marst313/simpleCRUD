'use strict';

//selector section
const aktifitas = document.querySelectorAll('#aktifitas');
const kegiatan = document.querySelector('#keg');

// selector button
const dailyButton = document.querySelector('.dailyButton');
const monthlyButton = document.querySelector('.monthlyButton');

// selector pilihan bulan
const bulanJanuari = document.querySelector('.jan');
const bulanFebruari = document.querySelector('.feb');
const bulanMaret = document.querySelector('.mar');
const bulanApril = document.querySelector('.apr');
const bulanMei = document.querySelector('.may');
const bulanJuni = document.querySelector('.june');
const bulanJuly = document.querySelector('.july');
const bulanAgustus = document.querySelector('.aug');
const bulanSeptember = document.querySelector('.sept');
const bulanOktober = document.querySelector('.oct');
const bulanNovember = document.querySelector('.nov');
const bulanDesember = document.querySelector('.dec');

const seluruhBulan = [bulanJanuari, bulanFebruari, bulanMaret, bulanApril, bulanMei, bulanJuni, bulanJuly, bulanAgustus, bulanSeptember, bulanOktober, bulanNovember, bulanDesember];

// selector hari
const mingguPertama = document.querySelector('.pertama');
const mingguKedua = document.querySelector('.kedua');
const mingguKetiga = document.querySelector('.ketiga');
const mingguKeempat = document.querySelector('.keempat');
const mingguKelima = document.querySelector('.kelima');

// selector kegiatan
const tombolTambah = document.querySelector('.tambah');
const tombolKurang = document.querySelector('.minus');
const tombolEdit = document.querySelector('.edit');

// style
const rainbowColor = 'linear-gradient(180deg, rgba(37, 52, 160, 1) 15%, rgba(37, 118, 160, 1) 40%, rgba(37, 153, 160, 1) 65%, rgba(20, 255, 243, 1) 90%)';
const warnaPutih = 'rgb(250,250,250)';
const warnaHitam = 'rgb(0,0,0)';

function displayMovement() {
  // Daily dan monthly diclick
  dailyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '1';
    monthlyButton.style.background = warnaPutih;
    monthlyButton.style.color = warnaHitam;
    dailyButton.style.color = warnaPutih;

    dailyButton.style.background = rainbowColor;
  });
  monthlyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '0';
    monthlyButton.style.background = rainbowColor;
    dailyButton.style.background = warnaPutih;
    monthlyButton.style.color = warnaPutih;
    dailyButton.style.color = warnaHitam;
  });
  //

  // bulan Januari hingga desember diclick
  for (const bulan of seluruhBulan) {
    function bulanTransparant() {
      bulan.style.background = 'transparent';
      bulan.style.color = warnaHitam;
    }
    bulanJanuari.addEventListener('click', function () {
      bulanTransparant();
      bulanJanuari.style.background = rainbowColor;
      bulanJanuari.style.borderRadius = '10px';
      bulanJanuari.style.color = warnaPutih;
    });
    bulanFebruari.addEventListener('click', function () {
      bulanTransparant();
      bulanFebruari.style.background = rainbowColor;
      bulanFebruari.style.borderRadius = '10px';
      bulanFebruari.style.color = warnaPutih;
    });
    bulanMaret.addEventListener('click', function () {
      bulanTransparant();
      bulanMaret.style.background = rainbowColor;
      bulanMaret.style.borderRadius = '10px';
      bulanMaret.style.color = warnaPutih;
    });
    bulanApril.addEventListener('click', function () {
      bulanTransparant();
      bulanApril.style.background = rainbowColor;
      bulanApril.style.borderRadius = '10px';
      bulanApril.style.color = warnaPutih;
    });
    bulanMei.addEventListener('click', function () {
      bulanTransparant();
      bulanMei.style.background = rainbowColor;
      bulanMei.style.borderRadius = '10px';
      bulanMei.style.color = warnaPutih;
    });
    bulanJuni.addEventListener('click', function () {
      bulanTransparant();
      bulanJuni.style.background = rainbowColor;
      bulanJuni.style.borderRadius = '10px';
      bulanJuni.style.color = warnaPutih;
    });
    bulanJuly.addEventListener('click', function () {
      bulanTransparant();
      bulanJuly.style.background = rainbowColor;
      bulanJuly.style.borderRadius = '10px';
      bulanJuly.style.color = warnaPutih;
    });
    bulanAgustus.addEventListener('click', function () {
      bulanTransparant();
      bulanAgustus.style.background = rainbowColor;
      bulanAgustus.style.borderRadius = '10px';
      bulanAgustus.style.color = warnaPutih;
    });
    bulanSeptember.addEventListener('click', function () {
      bulanTransparant();
      bulanSeptember.style.background = rainbowColor;
      bulanSeptember.style.borderRadius = '10px';
      bulanSeptember.style.color = warnaPutih;
    });
    bulanOktober.addEventListener('click', function () {
      bulanTransparant();
      bulanOktober.style.background = rainbowColor;
      bulanOktober.style.borderRadius = '10px';
      bulanOktober.style.color = warnaPutih;
    });
    bulanNovember.addEventListener('click', function () {
      bulanTransparant();
      bulanNovember.style.background = rainbowColor;
      bulanNovember.style.borderRadius = '10px';
      bulanNovember.style.color = warnaPutih;
    });
    bulanDesember.addEventListener('click', function () {
      bulanTransparant();
      bulanDesember.style.background = rainbowColor;
      bulanDesember.style.borderRadius = '10px';
      bulanDesember.style.color = warnaPutih;
    });
  }

  // kegiatan
}

displayMovement();
