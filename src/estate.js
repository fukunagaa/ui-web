/*
 * 都道府県内市区町村一覧取得API
*/
export default async (from, to, areaCode) => {
    try {
        let estate;
        await fetch(`https://www.land.mlit.go.jp/webland/api/TradeListSearch?from=${from}&to=${to}&area=${areaCode}`).then(
            response => {
                return response.json()
            }
        ).then(response => {
            estate = response;
        })
        return estate;
    } catch (e) {
        console.error(e);
    }
}