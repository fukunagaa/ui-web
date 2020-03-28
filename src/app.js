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

const search = document.getElementById("search");
search.addEventListener('click', () => {
    // 入力時期From
    let inputYearFrom = document.getElementById("input-from-year").value;
    let inputMonthFrom = document.getElementById("input-from-month").value;
    // 入力時期To
    let inputYearTo = document.getElementById("input-to-year").value;
    let inputMonthTo = document.getElementById("input-to-month").value;

    let periodFrom = 20999;
    let periodTo = 20999;

    // 取引時期From 整形
    let monthFrom = exsample(inputMonthFrom);
    periodFrom = inputYearFrom * 10 + monthFrom;

    // 取引時期To 整形
    let monthTo = exsample(inputMonthTo);
    periodTo = inputYearTo * 10 + monthTo;

    // 入力エリア
    let areaCode = document.getElementById("input-area-code").value;
    let areaName = document.getElementById("input-area-name").value;
    let sample;
    /*
     * 不動産取引価格情報取得API
    */
    transactionPeriod(areaCode)
        .then(response => {
            transactionPeriodList = [];
            while (ulArea1.firstChild) ulArea1.removeChild(ulArea1.firstChild);
            for (let i of Object.keys(response.data)) {
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




    console.log("from : " + periodFrom);
    console.log("to : " + periodTo);

    /*
     * 都道府県内市区町村一覧取得
    */
    estate(periodFrom, periodTo, areaCode)
        .then(response => {
            estateList = [];
            while (ulArea2.firstChild) ulArea2.removeChild(ulArea2.firstChild);
            for (let i of Object.keys(response.data)) {
                const estateConstructor = new EstateConstructor(response.data[i].Municipality, response.data[i].DistrictName, response.data[i].TradePrice, response.data[i].Area, response.data[i].BuildingYear);
                estateList.push(estateConstructor);
                creatLiElement(ulArea2, estateConstructor.info);
            }
            // Array.from(document.getElementsByTagName("ul")).forEach (element => {
            //     element.classList.add("ulAnimate");
            // });
        })
}, false);

const creatLiElement = (ulArea, value) => {
    const newLi = document.createElement("li");
    newLi.innerText = value;
    ulArea.appendChild(newLi);

}