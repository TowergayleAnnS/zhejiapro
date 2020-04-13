<template>
	<div class="login">
		
		<div class="nav">
			<span class="fa fa-chevron-left" @click="$router.back()"></span>
			
		</div>
		
		<div class="form-contrl">
			
			<input type="text" placeholder="请输入用户名" v-model="username">
			<input type="password" placeholder="请输入密码" v-model="password">
			
			<button @click="loginClick">登录</button>
			
		</div>
		<p class="register-link"><router-link to="/user/register">没有账户？前往注册-></router-link></p>
		
	</div>
</template>

<script>

export default {
	data(){
		return {
			username:"",
			password:""
		}
	},
	methods:{
		loginClick(){
			
			if (this.username && this.password){
				
				this.http.post("http://114.116.83.180:3000/users/login", this.urlcode.encode({
					username:this.username,
					password:this.password
				}))
				.then(resp=>{
					
					if (resp.data.code == 200){
						
						this.$router.push("/user")
						// 浏览器中的一个小型数据库，可以用于存储简单数据
						localStorage.setItem("user", JSON.stringify(resp.data.user))
						
					}else{
						this.$toast.fail(resp.data.msg)
					}
					
				})
				
				
			}else{
				this.$toast.fail("账号密码不能为空")
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
	height: 25vh;
}
.form-contrl>input{
	height: 10vw;
	width: 70%;
	border-radius: 2vw;
	border: none;
	outline: none;
	background-color: rgba(0,0,0,0);
	border-bottom: 1px solid #D3D3D3;
}
.form-contrl>button{
	width: 70%;
	height: 10vw;
	border: none;
	outline: none;
	background-color: green;
	line-height: 10vw;
	border-radius: 3vw;
	color: white;
	font-size: 4vw;
}
.register-link{
	text-align: center;
}
</style>
