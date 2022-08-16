import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {

}

const mutations = {
    CHANGEITEMNUMBER(state, value){
        state.itemNumber = value
    },
}

const state = {
    itemNumber:0
}

const getters = {

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})