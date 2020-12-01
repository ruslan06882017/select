import imageURL from './assets/baker.png'
import {ImageBlock, TitleBlock, TextBlock, TextColumnsBlock} from './classes/blocks'

export const model = [

  new TitleBlock('Эксклюзивная и вкусная <br> выпечка в Алматы', {
    tag: 'h1',
    styles: 'color: #090909; text-align:center;'
   }),
 
  new TitleBlock('Контактный телефон: +7 (777) 5035757', {
    tag: 'h4',
    styles: 'color: #b8b8b8; text-align:center;'
   }),
 
/* 
   new TextBlock('lorem sdfsdf lsdfj sdfjsrer', {
    tag: 'p',
    styles: 'background: darkblue; color: yellow; text-align:center;'
   }), */


   new ImageBlock(imageURL, {
    imageStyles: 'width: 500px; height: auto;',
    styles: 'padding 2rem 0; display: flex; justify-content:center;'
   }),
   

   new TextColumnsBlock([
    'Мы предлагаем',
    'Самые свежие хлебобулочные изделия в городе предлагает наша пекарня. Мы «Выпечка №1», и это не просто слова, а цель, которую мы ежедневно достигаем. Наши сотрудники не первый год удовлетворяют запросы покупателей на недорогую и вкусную продукцию. Количество наших клиентов постоянно растет, и мы будем рады видеть вас в их числе.'
  ], {
    styles: 'padding: 1rem;'
  }),
 
/*    new TextBlock('lorem sdfsdf lsdfj sdfjsrer', {
    tag: 'p',
    styles: 'background: darkblue; color: yellow; text-align:center;'
   }) */

]