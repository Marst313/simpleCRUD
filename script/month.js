'use strict';

// do
const date = new Date();
const bulan = Number(date.getMonth() + 1);
const tanggal = date.getDate();
const hari = date.getDay();

let initMonth = () => {
  console.log(bulan);
  for (let i = 0; i < 12; i++) {
    if (i === bulan) {
      document.querySelector(`.b${i}`).style.background = rainbowColor;
      document.querySelector(`.b${i}`).style.color = warnaPutih;
      document.querySelector(`.b${i}`).style.borderRadius = '10px';
    } else {
      console.log('eror');
    }
  }
};
initMonth();

const initDay = () => {
  for (let i = 0; i < 31; i++) {
    if (i === tanggal) {
      document.querySelector(`#t${i}`).style.color = 'blue';
      document.querySelector(`#t${i}`).style.border = '5px solid black';
    } else {
      //   document.getElementById(`#t${i}`).style.color = 'white';
      //   document.getElementById(`#t${i}`).style.border = 'none';
    }
  }
};

initDay();
