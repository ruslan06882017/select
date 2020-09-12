const getTemplate = () => {

  const localStore = JSON.parse(localStorage.getItem('list')) || []  
  const todoItems = localStore.map(todo => {
    return `
     <li class="collection-item">${todo} <a href="#!" class="secondary-content"><i class="material-icons">delete</i></a> </li>
    `
  })
  return `
    <div class="row">
      <div class="input-field col s6">
        <input value="" id="todoItem" type="text" class="validate">
        <label class="active" for="todoItem">Please add new task</label>
      </div>
    </div>  
    <div class="row col s6">
    
      <ul class="collection with-header task-list">
        <li class="collection-header"><h4>Todo list for today </h4></li>
        ${todoItems.join('')}
      </ul>
    </div>
  `
}


const getItems = () => {
  const todoItem = document.querySelector('#todoItem')
  let localStore = JSON.parse(localStorage.getItem('list')) || []      
  localStore.push(todoItem.value)
  localStorage.setItem('list', JSON.stringify(localStore))
  todoItem.value = ''    
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
  }

  onEnterPress(e){
    if (e.keyCode == 13){
      getItems()
      location.href = ''
    }
  }


}