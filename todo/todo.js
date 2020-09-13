const getTemplate = () => {

  const localStore = JSON.parse(localStorage.getItem('list')) || []

  let activeItems = localStore.filter(item => {
    return item.status === false
  })

  let compltedItem = localStore.filter(item => {
    return item.status === true
  })


  // console.log(compltedItem)

  const mainTodo = [...activeItems, ...compltedItem].map((todo, key) => {
    let atr = '', status = ''
    if (todo.status) {
      atr = `checked="checked"` 
      status = `Completed`
    } else status = `Pending`
    return `
    <p>
    <label>
      <input type="checkbox" data-id="${todo.id}" class="filled-in todo-check" ${atr} />
      <span>${status}</span>
    </label>
    </p>    
     <li class="collection-item" data-id="${todo.id}">${todo.name} <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a> </li>
    `
  })
  return `
    <div class="container">
      <div class="row">
        <div class="input-field">
          <input value="" id="todoItem" type="text" class="validate">
          <label class="active" for="todoItem">Please add new task</label>
        </div>
      </div>
      <div class="row col s4">    
        <ul class="collection with-header task-list">
          <li class="collection-header"><h4>Todo list for today </h4></li>
          ${mainTodo.join('')}
        </ul>
      </div>
    </div>
  `
}

export class Todo {
  constructor(selector, options){
    this.$el = document.querySelector(selector)
    this.render()
    this.setup()
  }

  render(){
    this.$el.innerHTML = getTemplate()
  }

  setup(){
    this.$el.addEventListener('keyup', this.onEnterPress)
    this.$el.addEventListener('click', this.clickHandler)
  }

  onEnterPress(e){
    if (e.keyCode == 13){
      getItems()
      location.href = ''
    }
  }

  clickHandler(e){
    // Removing todo
    if (e.target.tagName == 'I'){
      const todoId = e.target.closest('li').dataset.id
      let localStore = JSON.parse(localStorage.getItem('list')) || []
      const todoList = localStore.filter((item) => {
        return item.id != todoId 
      })

      localStorage.removeItem('list')
      localStorage.setItem('list', JSON.stringify(todoList))
      location.href = ''
    }

    // Changing status of todo
    if (e.target.classList.contains('todo-check')){
      let id = e.target.dataset.id
      let newArr = []
      let localStore = JSON.parse(localStorage.getItem('list')) || []
      localStore.forEach((item, key) => {
        if (item.id == id) {
          newArr.push({id: item.id, name: item.name, status: !item.status})      
        } else {
          newArr.push(item)
        }

      });
      localStorage.removeItem('list')
      localStorage.setItem('list', JSON.stringify(newArr))
      location.href = ''
    }
  }


}

const getItems = () => {
  const todoItem = document.querySelector('#todoItem')
  let localStore = JSON.parse(localStorage.getItem('list')) || []
  localStore.push({id: Date.now(), name: todoItem.value, status: false})
  localStorage.setItem('list', JSON.stringify(localStore))
  todoItem.value = ''    
}