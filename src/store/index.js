import { createStore } from 'vuex'

// const filter = {
//   MyList(todos) {
//     return todos
//   },
//   UnFinished(todos) {
//     return todos.filter(todo => {
//       return !todo.complete
//     })
//   },
//   finished(todos) {
//     return todos.filter(todo => {
//       return todo.complete
//     })
//   }
// }


export default createStore({
  state: {
    todos:JSON.parse(localStorage.getItem('todos')) || []
  },
  getters: {
    todoIndex() {
      // return filter[state.route.name](state.todos).map(todo => state.todos.indexOf(todo))
      return '111'
    }   
  },
  mutations: {
    addTodo(state, todoObj){
      state.todos.push(todoObj)
    },
    checkTodo(state, id){
      state.todos.forEach((todo)=>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    updateTodo(state, payload){
      //console.log(payload.id, payload.title)
      state.todos.forEach((todo)=>{
        if(todo.id === payload.id) todo.title = payload.title
      })
    },
    deleteTodo(state, id){
      state.todos = state.todos.filter( todo => todo.id !== id )
    },
    checkAllTodo(state, done){
      state.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    //清除所有已经完成的todo
    clearAllTodo(state){
      state.todos = state.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  actions: {
    
  },
  modules: {
  }
})
