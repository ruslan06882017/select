const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropDownCitiesFrom = formSearch.querySelector('.dropdown__cities-from'),
      inputCitiesTo = formSearch.querySelector('.input__cities-to'),
      dropDownCitiesTo = formSearch.querySelector('drowdown__cities-to'),
      inputDateDepart = formSearch.querySelector('input__date-depart');

const city = ['Алматы', 'Москва', 'Тбилиси', 'Астана', 'Вашингтон', 
              'Берлин', 'Лондон', 'Киргизия', 'Владивосток', 'Питер']
      

inputCitiesFrom.addEventListener('input', () => {
  dropDownCitiesFrom.textContent = ''
  const filteredCities = city.filter((item) => {
    const fixItem = item.toLocaleLowerCase()
    return item.includes(inputCitiesFrom.value.toLocaleLowerCase())
  })
  
  filteredCities.forEach((item) => {
    const li = document.createElement('li')
    li.classList.add('dropdown__city')
    li.textContent = item
    // console.log(li)
    dropDownCitiesFrom.append(li)

  })
})
