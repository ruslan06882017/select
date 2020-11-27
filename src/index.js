class Component {
  constructor(selector){
    this.$el = document.querySelector(selector)
    // console.log(`el`, this.$el)
  }

  show(){
    this.$el.style.display = 'block'
  }

  hide(){
    this.$el.style.display = 'none'
  }
}

class Box extends Component{
  constructor(options){
    super(options.selector)
    
    this.$el.style.width = '50px'
    this.$el.style.height = '50px'
    this.$el.style.background = options.color
  }
}

let box = new Box({
  selector: '#app',
  size: 30,
  width: 100,
  height: 50,
  color: 'red'
})






