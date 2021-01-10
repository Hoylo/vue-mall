import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        students: []
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
        addStudent (state, student) {
            state.students.push(student)
        },
        delStudentById (state, ids) {
            state.students = state.students.map(student => !ids.includes(student.id))
        }
    },
    getters: {

    }
})

export default store