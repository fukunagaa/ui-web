export default class {
    constructor(municipality, districtName, tradePrice, area, buildingYear) {
        this.municipality = municipality;
        this.tradePrice = tradePrice;
        this.area = area;
        this.buildingYear = buildingYear;
        this.districtName = districtName;
    }

    get info() {
        return `municipality:${this.municipality}  districName:${this.districtName}  tradePrice:${this.tradePrice}  area:${this.area}  buildingYear:${this.buildingYear}`;
    }
}