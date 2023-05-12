<template>
  <ul class="todo-main">
    <li v-for="todo in finishedList" :key="todo.id">
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
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        刪除
      </button>
      <button
        class="btn btn-edit"
        @click="handleEdit(todo)"
        v-show="!todo.isEdit"
      >
        編輯
      </button>
    </li>
  </ul>
  <div class="img" v-show="finishedList.length == 0">
    <img :src="src" />
    <p>尚無已完成事項</p>
  </div>
</template>
<script>
import img1 from "@/assets/writing-girl.png";
import { mapState } from "vuex";
export default {
  name: "MyFinished",
  data() {
    return {
      src: img1,
    };
  },
  computed: {
    ...mapState(["todos"]),
    finishedList() {
      return this.todos.filter((todo) => todo.done);
    },
  },
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
      this.$store.commit("updateTodo", { id: todo.id, title: e.target.value });
    },
  },
};
</script>
