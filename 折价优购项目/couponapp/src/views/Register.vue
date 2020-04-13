<template>
	<div class="login">
		
		<div class="nav">
			<span class="fa fa-chevron-left" @click="$router.back()"></span>
			
		</div>
		
		<div class="form-contrl">
			
			<input type="text" placeholder="请输入您的手机号" v-model="username" required>
			<input type="password" placeholder="请输入密码" v-model="password" required>
			<input type="password" placeholder="请确认密码" v-model="rpassword" required>
			
			<button disabled v-if="!isClick" >注册</button>
			<button v-if="isClick" class="btn-active" @click="loginClick">注册</button>
			
		</div>
		<p class="register-link"><router-link to="/user/login">已有账户？前往登录-></router-link></p>
		
	</div>
</template>

<script>

export default {
	data(){
		return {
			username:"",
			password:"",
			rpassword:"",
			isClick:false
		}
	},
	methods:{
		loginClick(){
			
			if (this.password == this.rpassword){
				
				let data = {
					username:this.username,
					password:this.password,
					rpassword:this.rpassword
				}
				
				data = this.urlcode.encode(data)
				
				this.http.post("http://114.116.83.180:3000/users/register", data)
				.then(resp=>{
					if (resp.data.code == 200){
						
						
						this.$router.push("/user/login")
						
					}else{
						alert(resp.data.msg)
					}
				})
				
				
				
				
			}else{
				alert("两次密码不一致！")
			}
			
			
		}
	},
	watch:{
		username(after, before){
			
			// 判断输入的是否为手机号
			let reg = /^1[356789]\d{9}/
			
			if (reg.test(after)){
				
				this.http.get(`http://114.116.83.180:3000/users/check?username=${after}`)
				.then(resp=>{
					if (resp.data.code == 0){
						this.isClick = true
						this.$toast.success("恭喜您，该手机号可以注册")
					}else{
						this.$toast.success("该手机号已被注册，请直接登录")
					}
				})
				
			}else{
				this.isClick = false
			}
		}
	}
}	

</script>

<style scoped>

.login{
	height: 100vh;
	background-color: #F2F1F1;
}	
.nav{
	height: 50px;
	width: 100%;
	margin: 0 auto;
	padding: 0 2vw;
	line-height: 50px;
	box-shadow: 0 1px 5px #D3D3D3;
}

.form-contrl{
	margin-top: 3vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	height: 30vh;
}
.form-contrl>div{
	width:100%;
	
	text-align: center;
	/* padding-left: 15%; */
}
.form-contrl>input,.form-contrl>div>input{
	height: 10vw;
	width: 70%;
	border-radius: 2vw;
	border: none;
	outline: none;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid #D3D3D3;
	padding-left: 1vw;
}
.form-contrl>button{
	width: 70%;
	height: 10vw;
	border: none;
	outline: none;
	background-color: #696969;
	line-height: 10vw;
	border-radius: 3vw;
	color: white;
	font-size: 4vw;
}

.btn-active{
	background-color: green !important;
}

.register-link{
	text-align: center;
}


</style>
