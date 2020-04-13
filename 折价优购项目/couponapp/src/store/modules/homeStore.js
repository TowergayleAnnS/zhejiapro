import axios from 'axios'

let state = {
    categray: [],
    goods: []
}

let mutations = {
    setCategray(state, v) {

        state.categray = v
    },
    setGoods(state, v) {
        state.goods = v
    },
    concatGoods(state, v) {
        state.goods = state.goods.concat(v)
    }
}

let actions = {

    queryCategray({ state, commit, rootState }) {

        return new Promise((resolve, reject) => {
            axios.get("http://114.116.83.180:3000/categray")
                .then(resp => {

                    commit("setCategray", resp.data.cates.slice(1, 11))
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })

    },
    queryHome({ state, commit, rootState }) {

        return new Promise((resolve, reject) => {

            axios.get("http://114.116.83.180:3000/command")
                .then(resp => {

                    commit("setGoods", resp.data.result_list.map_data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })

        })
    },
    homeLoadMore({ state, commit, rootState }, page) {

        return new Promise((resolve, reject) => {

            axios.get(`http://114.116.83.180:3000/command?page=${page}`)
                .then(resp => {

                    commit("concatGoods", resp.data.result_list.map_data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })

        })
    }

}

export default { state, mutations, actions }