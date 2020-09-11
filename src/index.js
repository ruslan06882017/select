import {Select} from '../select/select'
import '../src/main.scss'
const select = new Select('#select', {
  selectedId: '2',
  placeholder: 'Вывберите значение',
  data: [
    {id: '1', value: 'React'},
    {id: '2', value: 'Vue'},
    {id: '3', value: 'PHP'},
    {id: '4', value: 'CSS'},
    {id: '5', value: 'React'}
  ],
  onSelect(item){
    console.log(`Selected Item`, item)
  }
})

window.s = select