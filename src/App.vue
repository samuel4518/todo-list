<template>
  <div id="root">
    <div class="navbar"></div>
    <MyHeader />
    <div>
      <div class="todo-wrap">
        <!-- router-link -->
        <div class="router-link">
          <router-link to="/MyList">全部</router-link> 
          <router-link to="/UnFinished">待完成</router-link>
          <router-link to="/MyFinished">已完成</router-link>
        </div>
        <router-view></router-view>
        <MyFooter />        
      </div>
    </div>
  </div>  
</template>

<script>
import MyHeader from "./components/MyHeader";
// import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter.vue";
import { mapState } from "vuex";
// import { mapGetters } from 'vuex'

export default {
  name: "App",  
  components: { MyHeader, MyFooter},
  computed: {
    ...mapState(["todos"]),
  },  
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: linear-gradient(to left, #64b3f4, #c2e59c);
}
.navbar{
  height: 100px;
}
.router-link {  
  display: flex;
  justify-content: space-around;
  border-bottom: solid 1px #ccc;
  font-size: 18px;
  height: 48px;
  line-height: 48px;
}
.router-link a{
  text-decoration: none;
  width: 100%;
  text-align: center;
}
.router-link-active{
  color:#e19c2d;
  border-bottom: 2px solid #e19c2d;  
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(103, 159, 180);
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-wrap {
  background-color: #fff;
  width: 520px;  
  margin: 0 auto;
  padding-bottom: 10px; 
  border: 1px solid transparent;
  border-radius: 10px;  
}
</style>
