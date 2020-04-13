import axios from "axios"


const state = {
	categray:[],
	goods:[]
}
const mutations = {
	
	hotCategray(state, v){
		state.categray = v
	},
	hotGoods(state, v){
		state.goods = v
	},
	hotConcatGoods(state, v){
		state.goods = state.goods.concat(v)
	}
}

const actions = {
	
	queryhotCategray({state, commit, rootState}){
		return new Promise((resolve, reject)=>{
			
			axios.get("http://114.116.83.180:3000/categray")
			.then(resp=>{
				
				
				commit("hotCategray", resp.data.cates)
				resolve()
			})
			.catch(err=>{
				reject()
			})
			
		})
	},
	queryHotGoods({state, commit, rootState}, {material_id, page}){
		
		return new Promise((resolve, reject)=>{
			
			axios.get(`http://114.116.83.180:3000/hot?material_id=${material_id}&page=${page}`)
			.then(resp=>{
				console.log(resp)
				let operation = page>1?"hotConcatGoods":"hotGoods"
				// if (page > 1){operation = "hotConcatGoods"}else{operation = "hotGoods"}
				commit(operation, resp.data.result_list.map_data)
				resolve()
			})
			.catch(err=>{
				reject(err)
			})
			
		})
		
	}
	
}


export default {state, mutations, actions}







