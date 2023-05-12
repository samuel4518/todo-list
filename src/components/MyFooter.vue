<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}項</span> / 全部{{ total }}項
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成事項</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MyFooter",
  // props:['todos'],
  computed: {
    ...mapState(["todos"]),
    //總數
    total() {
      return this.todos.length;
    },
    //已完成數
    doneTotal() {
      //使用reduce方法做條件統計
      /* const x = this.todos.reduce((pre,current)=>{
					console.log('@',pre,current)
					return pre + (current.done ? 1 : 0)
				},0) */
      //簡寫
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    //控制全選框
    isAll: {
      //全選框是否勾選
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      //isAll被修改時set被調用
      set(value) {
        this.$store.commit("checkAllTodo", value);
      },
    },
  },
  methods: {
    /* checkAll(e){
				this.checkAllTodo(e.target.checked)
			} */
    //清空所有已完成
    clearAll() {
      this.$store.commit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding: 0px 20px;
  margin-top: 5px;
  border-top: 1px solid #ddd;
}

.todo-footer label {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}

.todo-footer label input {
  width: 18px;
  height: 18px;
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
