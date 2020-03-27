import exsample from './module';
import transactionPeriod from './transactionPeriod';
import estate from './estate';
import EstateConstructor from './EstateConstructor';
import TransactionPeriodConstructor from './TransactionPeriodConstructor';

// リストの作成
let estateList = new Array();
let transactionPeriodList = new Array();

// 表示欄
const ulArea1 = document.getElementById("return-ul-area1");
const ulArea2 = document.getElementById("return-ul-area2");

/*
 * 不動産取引価格情報取得API
*/
let areaCode = 13;
let sample;

transactionPeriod(areaCode)
.then(response => {
    for(let i of Object.keys(response.data)){
        const transactionPeriodConstructor = new TransactionPeriodConstructor(response.data[i].id, response.data[i].name);
        transactionPeriodList.push(transactionPeriodConstructor);
        creatLiElement(ulArea1, transactionPeriodConstructor.info);
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
      estateList = [];
      for(let i of Object.keys(response.data)){
          const estateConstructor = new EstateConstructor(response.data[i].Type, response.data[i].Prefecture);
          estateList.push(estateConstructor);
          creatLiElement(ulArea2, estateConstructor.info);
      }
})

const creatLiElement = (ulArea, value) => {
    const newLi = document.createElement("li");
    newLi.innerText = value;
    ulArea.appendChild(newLi);
}

const search = document.getElementById("search");
search.addEventListener('click', () => {
    console.log("clickされました。");
    consolelog(sample);
}, false);