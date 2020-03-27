import exsample from './module';
import transactionPeriod from './transactionPeriod';
import estate from './estate';


/*
 * 不動産取引価格情報取得API
*/
let areaCode = 13;
let sample;

transactionPeriod(areaCode)
.then(response => {
    let div = document.getElementById("area1");
    for(let i of Object.keys(response.data)){
        div.innerHTML = response.data[i].id +":"+ response.data[i].name;
    }
    return response.data;
})
.then(response => {
    sample = response;
})
.catch(console.error);



/*
 * 都道府県内市区町村一覧取得
*/
// 入力時期From
let inputYearFrom = 2015;
let inputMonthFrom = 3;
// 入力時期To
let inputYearTo = 2015;
let inputMonthTo = 6;
let monthFrom = exsample(inputMonthFrom);
let periodFrom = 20999;
// 取引時期From 整形
periodFrom = inputYearFrom * 10 + monthFrom;

// 取引時期To 整形

let monthTo = exsample(inputMonthTo);
let periodTo = inputYearTo * 10 + monthTo;

console.log("from : " + periodFrom);
console.log("to : " + periodTo);

estate(periodFrom, periodTo)
  .then(response => {
      console.log(response);
      let div2 = document.getElementById("area2");
      for(let i of Object.keys(response.data)){
        let newspan = document.createElement("span");
        div2.appendChild(newspan);
        newspan.innerHTML = response.data[i].Type +":"+ response.data[i].Prefecture;
      }
})

const search = document.getElementById("search");
search.addEventListener('click', () => {
    console.log("clickされました。");
    consolelog(sample);
}, false);