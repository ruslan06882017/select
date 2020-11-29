import image from './assets/v2.jpg'

export const model = [

  {type: 'title', value: 'Test title', 
   options:{
    tag: 'h2',
    styles: 'background: darkred; color: #fff;'
   },
  },

  {
    type: 'text', value: 'lorem', options:{
    tag: 'p',
    styles: 'background: darkblue; color: yellow; text-align:center;'
  }
  },

  {
      type: 'textColumns', value: [
      '1 text',
      '2 text',
      '3 text',
      'Lorem ipsum dolor s'
    ], options:{
      styles: 'padding: 1rem;'
    }
  },

  {type: 'image', value: image, 
   options:{
    tag: 'img',
    imageStyles: 'width: 500px; height: auto;',
    styles: 'padding 2rem 0; display: flex; justify-content:center'
   },
  }
]