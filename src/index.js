const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropDownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
      inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropDownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
      inputDateDepart = formSearch.querySelector('.input__date-depart');

// const citiesAPI = 'http://api.travelpayouts.com/data/ru/cities.json',
const citiesAPI = './cities.json',
      proxy = 'https://cors-anywhere.herokuapp.com/',
      API_KEY = '2f06188950b6215c59639349941c759f',
      calendar = 'http://min-prices.aviasales.ru/calendar_preload'


      
let city = []          


const showCity = (input, list) => {

  list.textContent = ''

    if (input.value !== ''){  
    const filteredCities = city.filter((item) => {
      const fixItem = item.name.toLocaleLowerCase()
      return fixItem.includes(input.value.toLocaleLowerCase())
    })
    
    filteredCities.forEach((item) => {
      const li = document.createElement('li')
      li.classList.add('dropdown__city')
      li.textContent = item.name
      list.append(li)
    })
    
  }

}

// FORM 

formSearch.addEventListener('submit', (e) => {
  e.preventDefault()

  const cityFrom = city.find(item => {
    return inputCitiesFrom.value === item.name
  })

  const cityTo = city.find(item => {
    return inputCitiesTo.value === item.name
  })

  
  const formData = {
    from: cityFrom.code,
    to: cityTo.code,
    when: inputDateDepart.value
  }

  console.log(formData)
})


// FROM
inputCitiesFrom.addEventListener('input', () => {
  showCity(inputCitiesFrom, dropDownCitiesFrom)
})

dropDownCitiesFrom.addEventListener('click', (event) => {
  const target = event.target
  if (target.tagName.toLocaleLowerCase() === 'li'){
    inputCitiesFrom.value = target.textContent
    dropDownCitiesFrom.textContent = ''
  }
})


 // TO

inputCitiesTo.addEventListener('input', () => {
  showCity(inputCitiesTo, dropDownCitiesTo)
})

dropDownCitiesTo.addEventListener('click', (event) => {
  const target = event.target
  if (target.tagName.toLocaleLowerCase() === 'li'){
    inputCitiesTo.value = target.textContent
    dropDownCitiesTo.textContent = ''
  }
})

const getData = (url, cb) => {
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return

    if (request.status === 200){
      cb(request.response)
    } else {
      console.error(request.status)
    }
  })
  request.send()
}

getData(citiesAPI, (data) => {
  city = JSON.parse(data).filter(item => item.name)
})