import axios from 'axios'
let state = {
    Categray: [],
    SaleBookDetail: [],
    TopSaleData: [],
    BookComment: []
}
let mutations = {
    setCategray(state, v) {
        state.Categray = v
    },
    setSaleBookDetail(state, v) {
        state.SaleBookDetail = v
    },
    setTopSaleData(state, v) {
        state.TopSaleData = v
    },
    setBookComment(state, v) {
        state.BookComment = v
    }
}
let actions = {
    queryBooksaleList({ state, commit, rootState }) {
        // console.log(state)
        return new Promise((resolve, reject) => {

            axios.get(`http://127.0.0.1:3000/firstpage2?category=${category}&end=${end}`)
                .then(resp => {

                    // console.log(resp.data.data.data.saleList)
                    commit("setCategray", resp.data.data.data.saleList)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    querygoodscat({ state, commit, rootState }, { category, end }) {
        console.log(category)
        return new Promise((resolve, reject) => {
            // http://127.0.0.1:3000/firstpage2?category=" + `${category}
            axios.get(`http://127.0.0.1:3000/firstpage2?category=${category}&end=${end}`)
                .then(resp => {
                    commit("setCategray", resp.data.data.data.saleList)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    querySaleBookById({ state, commit, rootState }, { saleId }) {
        return new Promise((resolve, reject) => {
            axios.get(`http://127.0.0.1:3000/detail?saleId=${saleId}`)
                .then(resp => {

                    console.log(resp.data.data.data.mediaSale.mediaList)
                    commit("setSaleBookDetail", resp.data.data.data.mediaSale.mediaList)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    queryTopAppraise({ state, commit, rootState }) {
        return new Promise((resolve, reject) => {
            axios.get(`http://127.0.0.1:3000/topSale`)
                .then(resp => {

                    console.log(resp.data)
                    commit("setTopSaleData", resp.data.data.data.saleList)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    queryCommentById({ state, commit, rootState }, { saleId }) {
        return new Promise((resolve, reject) => {
            axios.get(`http://127.0.0.1:3000/comment?objectId=${saleId}`)
                .then(resp => {

                    console.log(resp.data.data.data)
                    commit("setBookComment", resp.data.data.data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}
export default { state, mutations, actions }