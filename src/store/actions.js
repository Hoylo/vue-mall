import {ADD_COUNTER, ADD_TO_CART, CANCEL_CHECKED} from "@/store/mutations-type"

export default {
    addCart(context, payload) {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
            context.commit(ADD_COUNTER, oldProduct)
        } else {
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
        localStorage.setItem('cartList', JSON.stringify(context.state.cartList))
    },
    cancelCheckedAll(context, status) {
        context.commit(CANCEL_CHECKED, status)
    }
}