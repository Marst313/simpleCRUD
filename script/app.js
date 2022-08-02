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

function displayMovement() {
  // Daily dan monthly diclick
  dailyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '1';
    monthlyButton.style.backgroundColor = 'white';
    dailyButton.style.backgroundColor = '#38cab0';
  });
  monthlyButton.addEventListener('click', function () {
    dailyButton.style.zIndex = '0';
    monthlyButton.style.backgroundColor = '#38cab0';
    dailyButton.style.backgroundColor = 'white';
  });
  //

  // bulan Januari hingga desember diclick
  for (const bulan of seluruhBulan) {
    function bulanTransparant() {
      bulan.style.backgroundColor = 'transparent';
    }
    bulanJanuari.addEventListener('click', function () {
      bulanTransparant();
      bulanJanuari.style.backgroundColor = '#38cab0';
      bulanJanuari.style.borderRadius = '10px';
    });
    bulanFebruari.addEventListener('click', function () {
      bulanTransparant();
      bulanFebruari.style.backgroundColor = '#38cab0';
      bulanFebruari.style.borderRadius = '10px';
    });
    bulanMaret.addEventListener('click', function () {
      bulanTransparant();
      bulanMaret.style.backgroundColor = '#38cab0';
      bulanMaret.style.borderRadius = '10px';
    });
    bulanApril.addEventListener('click', function () {
      bulanTransparant();
      bulanApril.style.backgroundColor = '#38cab0';
      bulanApril.style.borderRadius = '10px';
    });
    bulanMei.addEventListener('click', function () {
      bulanTransparant();
      bulanMei.style.backgroundColor = '#38cab0';
      bulanMei.style.borderRadius = '10px';
    });
    bulanJuni.addEventListener('click', function () {
      bulanTransparant();
      bulanJuni.style.backgroundColor = '#38cab0';
      bulanJuni.style.borderRadius = '10px';
    });
    bulanJuly.addEventListener('click', function () {
      bulanTransparant();
      bulanJuly.style.backgroundColor = '#38cab0';
      bulanJuly.style.borderRadius = '10px';
    });
    bulanAgustus.addEventListener('click', function () {
      bulanTransparant();
      bulanAgustus.style.backgroundColor = '#38cab0';
      bulanAgustus.style.borderRadius = '10px';
    });
    bulanSeptember.addEventListener('click', function () {
      bulanTransparant();
      bulanSeptember.style.backgroundColor = '#38cab0';
      bulanSeptember.style.borderRadius = '10px';
    });
    bulanOktober.addEventListener('click', function () {
      bulanTransparant();
      bulanOktober.style.backgroundColor = '#38cab0';
      bulanOktober.style.borderRadius = '10px';
    });
    bulanNovember.addEventListener('click', function () {
      bulanTransparant();
      bulanNovember.style.backgroundColor = '#38cab0';
      bulanNovember.style.borderRadius = '10px';
    });
    bulanDesember.addEventListener('click', function () {
      bulanTransparant();
      bulanDesember.style.backgroundColor = '#38cab0';
      bulanDesember.style.borderRadius = '10px';
    });
  }

  // kegiatan

  tombolTambah.addEventListener('click', function () {
    const html = `    <div class="tambah-kegiatan container-fluid" id="keg">
    <button class="edit">Edit</button>
    <input type="text" placeholder="Write Your Activities" style="text-align: center" />
    <button class="minus">
      <div class="garisHorizontal"></div>
    </button>
  </div>`;
    kegiatan.insertAdjacentHTML('afterend', html);
  });
  tombolEdit.addEventListener('click', function () {});

  tombolKurang.addEventListener('click', function () {
    console.log('tombol diclick');
  });
}

displayMovement();
