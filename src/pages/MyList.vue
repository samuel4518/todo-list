<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
    <!-- :checkTodo="checkTodo"
      :deleteTodo="deleteTodo" -->
  </ul>
  <div class="img" v-show="todos.length == 0">
    <img :src="src" />
    <p>尚無待辦事項</p>
  </div>
</template>

<script>
import img1 from "@/assets/writing-girl.png";
import MyItem from "./MyItem";
import { mapState } from "vuex";
// import { mapState } from 'vuex'

export default {
  name: "MyList",
  data() {
    return {
      src: img1,
    };
  },
  components: { MyItem },
  // props:['todos', 'checkTodo','deleteTodo'],
  computed: {
    ...mapState(["todos"]),
  },
};
</script>

<style>
/*main*/
.todo-main {
  margin-left: 0px;
  margin-top: 0px;
  /* border-bottom: 1px solid #ddd; */
  border-radius: 2px;
  padding: 10px 15px 0px;
  max-height: 350px;
  overflow: auto;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 0px;
}
.img{
  width: 100%;
  text-align: center;
}
.img img {
  width: 50%;
  margin: 0 auto;
}
.img p {
  text-align: center;
  color: #ccc;
}
</style>
