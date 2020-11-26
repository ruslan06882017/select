const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropDownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
      inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropDownCitiesTo = formSearch.querySelector('.dropdown__cities-to'),
      inputDateDepart = formSearch.querySelector('.input__date-depart');

// const citiesAPI = 'http://api.travelpayouts.com/data/ru/cities.json',
const citiesAPI = './cities.json',
      PROXY = 'https://cors-anywhere.herokuapp.com/',
      API_KEY = '2f06188950b6215c59639349941c759f',
      CALENDAR = 'http://min-prices.aviasales.ru/calendar_preload'


      
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

  const requestData = `?depart_date=${formData.when}&origin=${formData.from}&destination=${formData.to}&one_way=true&token=${API_KEY}`
  // console.log(PROXY + CALENDAR + requestData)

/*   getData(CALENDAR + requestData, (response) => {
    renderCheap(response, formData.when)
  }) */

  const flightList = document.querySelector('.flight-list')
 

  getData(CALENDAR + requestData, (response) => {
    const data = JSON.parse(response).best_prices

    data.forEach(item => {
      console.log(item)
      let cargoInfo = {
        fromCity: getCityName(item.origin),
        toCity: getCityName(item.destination)
      }      
      
      flightList.insertAdjacentHTML('afterbegin', renderCard(cargoInfo))

    })
      
     
  })

})


const renderCard = (data) => {
  return `
      <h3 class="agent">Aviakassa</h3>
      <div class="ticket__wrapper">
        <div class="left-side">
          <a href="https://www.aviasales.ru/search/SVX2905KGD1" class="button button__buy">Купить
            за 19700₽</a>
        </div>
        <div class="right-side">
          <div class="block-left">
            <div class="city__from">Вылет из города
              <span class="city__name">${data.fromCity}</span>
            </div>
            <div class="date">29 мая 2020 г.</div>
          </div>
      
          <div class="block-right">
            <div class="changes">Без пересадок</div>
            <div class="city__to">Город назначения:
              <span class="city__name">${data.toCity}</span>
            </div>
          </div>
        </div>
      </div>    
    `
}

const getCityName = (code) => {
  const objCity = city.find((item) => item.code === code)
  return objCity.name
}



const renderCheap = (data, date) => {
  const cheapTicketMonth = JSON.parse(data)
  console.log(cheapTicketMonth)

}


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

