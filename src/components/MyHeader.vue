<template>
	<div class="todo-header">
		<input type="text" placeholder="新增待辦事項" v-model="title" @keyup.enter="add"/>
	</div>
</template>

<script>
	import { nanoid } from 'nanoid'
	// import { mapMutations } from 'vuex'
	export default {
		name:'MyHeader',
		//接收從App傳過來的addTodo
		// props:['addTodo'],
		data() {
			return {
				//收集使用者輸入的title
				title:''
			}
		},
		methods: {
			// ...mapMutations(['addTodo']),
			add(){
				//檢驗資料
				if(!this.title.trim()) return alert('輸入不能是空的!')
				//將使用者的输入包裝成一個todo物件
				const todoObj = {id:nanoid(),title:this.title,done:false,isEdit:false}
				//通知App组件去加一個todo物件
				//this.$emit('addTodo',todoObj)
				this.$store.commit('addTodo',todoObj)
				//清空輸入
				this.title = ''
			}
		},
	}
</script>

<style scoped>
	/*header*/
	.todo-header {
		margin: 0 auto 15px;
		width: 520px;
	}
	.todo-header input {
		box-sizing: border-box;
		width: 100%;		
		height: 48px;		
		font-size: 18px;
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 4px 7px;
		
	}

	.todo-header input:focus {
		outline: none;
		border-color: rgba(82, 168, 236, 0.8);
		box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
	}
</style>