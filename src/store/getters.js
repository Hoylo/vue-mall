export default {
    cartListLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    checkedTotalPrice(state) {
        return state.cartList.filter(item => item.checked)
            .reduce((preValue, item) => preValue + item.realPrice * item.count, 0)
    },
    checkedLength(state) {
        return state.cartList.filter(item => item.checked).length
    },
    isCheckAll(state) {
        return state.cartList.length > 0 && !state.cartList.find(item => !item.checked)
    }
}