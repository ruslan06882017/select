const getTemplate = (data = [], placeholder, selectedId) => {
  let text = ''
  console.log(selectedId)
  if (placeholder) text = placeholder; else text = 'Нифига нет'
  const items = data.map(item => {
    let cls = ''
    if (selectedId === item.id) {
      text = item.value
      cls = 'selected'
    }
    return `
      <li class="select__item ${cls}" data-type="item" data-id=${item.id}>${item.value}</li>
    `
  })

  return `
    <div class="select__input" data-type="input">
      <span data-type="value">${text}</span>
      <i class="da" data-type="arrow"></i>
     </div>
  <div class="select__dropdown">
    <ul class="select__list">
      ${items.join('')}
    </ul>
  </div>
  `
}

export class Select{
  constructor(selector, options){
    this.$el = document.querySelector(selector)
    this.options = options
    this.selectedId = options.selectedId
    this.render()
    this.setup()
  }

  render(){
    const {placeholder, data, selectedId} = this.options 
    this.$el.classList.add('select')  
    this.$el.innerHTML = getTemplate(data, placeholder, selectedId)
  }

  setup(){
    this.clickHandler = this.clickHandler.bind(this)
    this.$el.addEventListener('click', this.clickHandler)
    this.$arrow = this.$el.querySelector('[data-type="arrow"]')
    this.$value = this.$el.querySelector('[data-type="value"]')
  }

  clickHandler(e){
    const {type} = event.target.dataset
    if (type === 'input'){
      this.toggle()
    } else if (type === 'item'){
      const id = event.target.dataset.id
      // console.log('id', id)
      this.select(id)
    }
  }

  get isOpen(){
    return this.$el.classList.contains('open')
  }

  get current(){
    return this.options.data.find(item => item.id === this.selectedId)
  }

  select(id){
    this.selectedId = id
    this.$value.textContent = this.current.value
   
    const els = this.$el.querySelectorAll(`.select__item`)
    els.forEach(element => {
        element.classList.remove('selected')
    });
    
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected')
    this.options.onSelect ? this.options.onSelect(this.current) : null
    
    this.close()
  }

  toggle(){
    this.isOpen ? this.close() : this.open()
  }

  open(){
    this.$el.classList.add('open')
    this.$arrow.classList.remove('fa-chevron-down')
    this.$arrow.classList.add('fa-chevron-up')
  }

  close(){
    this.$el.classList.remove('open')
    this.$arrow.classList.add('fa-chevron-down')
    this.$arrow.classList.remove('fa-chevron-up')
  }

  destroy(){
    this.$el.removeEventListener('click', this.clickHandler)
    this.$el.innerHTML = ''
  }

}
