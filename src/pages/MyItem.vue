<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        type="text"
        v-show="todo.isEdit"
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">刪除</button>
    <button
      class="btn btn-edit"
      @click="handleEdit(todo)"
      v-show="!todo.isEdit"
    >
      編輯
    </button>
  </li>
</template>

<script>
// import { mapState } from "vuex";
// import { mapGetters } from 'vuex'
export default {
  name: "MyItem",
  // props:['todo','checkTodo','deleteTodo'],
  props: ["todo"],
  //   computed: {
  //     ...mapState(["todos"]),
  //     // ...mapGetters(['checkTodo', 'deleteTodo'])
  //   },
  methods: {
    //勾選/取消勾選
    handleCheck(id) {
      //通知APP組件將對應的todo物件done值取反
      this.$store.commit("checkTodo", id);
    },
    //刪除
    handleDelete(id) {
      if (confirm("確定刪除嗎?")) {
        //通知APP組件將對應的todo物件刪除
        this.$store.commit("deleteTodo", id);
      }
    },
    handleEdit(todo) {
      todo.isEdit = true;
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      // console.log("updateTodo", todo.id, e.target.value);
      // console.log(e);      
      if (!e.target.value.trim()) return alert("輸入不能是空白的!");
      this.$store.commit("updateTodo", {id:todo.id, title:e.target.value});
    },
  },
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 48px;
  line-height: 48px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
}

li label {
  float: left;
  cursor: pointer;
}

li label input {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 15px;
  position: relative;
  top: -2px;
}

li button {
  float: right;
  display: none;
  margin-top: 8px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
