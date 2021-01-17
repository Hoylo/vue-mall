import {request} from "@/network/request";

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.des = itemInfo.des
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountdesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }

}