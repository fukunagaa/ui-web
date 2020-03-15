/*
 * 不動産取引価格情報取得API
*/
export default (areaCode) =>{
    return fetch(`https://www.land.mlit.go.jp/webland/api/CitySearch?area=${areaCode}`,
    {headers: {'Accept': 'application/json'}}
    ).then(response => response.json());
}