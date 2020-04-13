import axios from 'axios'
let state = {
    bookArray: [],
    detailMagine: {},
    MagazineCatalog: [],
    SearchMagazine: []
}
let mutations = {
    setBookArray(state, v) {
        state.bookArray = v
    },
    setdetailMagine(state, v) {
        state.detailMagine = v
    },
    setMagazineCatalog(state, v) {
        state.MagazineCatalog = v
    },
    setSearchMagazine(state, v) {
        state.SearchMagazine
    }
}
let actions = {
    queryAllBook({ state, commit, rootState }) {
        return new Promise((resolve, reject) => {
            axios.post("https://www.duzhe.com/home/reader/magazine/list", {
                    "current": 1,
                    "year": "",
                    "month": "",
                    "size": 12,
                })
                .then(resp => {
                    console.log(resp.data.data.records)
                    commit("setBookArray", resp.data.data.records)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    queryMagazineDetail({ state, commit, rootState }, { id }) {
        return new Promise((resolve, reject) => {
            axios.post("https://www.duzhe.com/home/reader/magazine/magazineHome", {
                    id: `${id}`
                })
                .then(resp => {
                    console.log(resp.data.data)
                    commit("setdetailMagine", resp.data.data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    queryMagazineCatalog({ state, commit, rootState }, { id }) {
        return new Promise((resolve, reject) => {
            axios.post("https://www.duzhe.com/home/reader/magazine/catalog", {
                    id: `${id}`
                })
                .then(resp => {
                    console.log(resp.data.data)
                    commit("setMagazineCatalog", resp.data.data)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    querySearchMagazine({ state, commit, rootState }, { year, month }) {
        return new Promise((resolve, reject) => {
            axios.post("https://www.duzhe.com/home/reader/magazine/list", {
                    year: `${year}`,
                    month: `${month}`,
                    current: "1"
                })
                .then(resp => {
                    console.log(resp.data.data.records)
                    commit("setBookArray", resp.data.data.records)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    queryNextPage({ state, commit, rootState }, { current }) {
        return new Promise((resolve, reject) => {
            axios.post("https://www.duzhe.com/home/reader/magazine/list", {

                    current: `${current}`,

                })
                .then(resp => {
                    console.log(resp.data.data.records)
                    commit("setBookArray", resp.data.data.records)
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

}
export default { state, mutations, actions }