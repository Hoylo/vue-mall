import {ADD_COUNTER, ADD_TO_CART, CANCEL_CHECKED} from "@/store/mutations-type"

export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [CANCEL_CHECKED](state, status) {
        state.cartList.map((item => item.checked = status))
    }

}