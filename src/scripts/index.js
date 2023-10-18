const planBasic = document.getElementById('plan-basic')
const planStandart = document.getElementById('plan-standart')
const planPremium = document.getElementById('plan-premium')

const tabBasic = document.getElementById('tab-basic')
const tabStandart = document.getElementById('tab-standart')
const tabPremium = document.getElementById('tab-premium')

tabBasic.addEventListener('click', () => {
  planBasic.classList.add('plan-active')
  planStandart.classList.remove('plan-active')
  planPremium.classList.remove('plan-active')
  tabBasic.classList.add('tab--active')
  tabStandart.classList.remove('tab--active')
  tabPremium.classList.remove('tab--active')
})

tabStandart.addEventListener('click', () => {
  planBasic.classList.remove('plan-active')
  planStandart.classList.add('plan-active')
  planPremium.classList.remove('plan-active')
  tabBasic.classList.remove('tab--active')
  tabStandart.classList.add('tab--active')
  tabPremium.classList.remove('tab--active')
})

tabPremium.addEventListener('click', () => {
  planBasic.classList.remove('plan-active')
  planStandart.classList.remove('plan-active')
  planPremium.classList.add('plan-active')
  tabBasic.classList.remove('tab--active')
  tabStandart.classList.remove('tab--active')
  tabPremium.classList.add('tab--active')
})

const switchYearly = document.getElementById('switch-yearly')
const priceBasicElement = document.getElementById('price-basic')
const priceStandartElement = document.getElementById('price-standart')
const pricePremiumElement = document.getElementById('price-premium')
const priceBasic = Number(document.getElementById('price-basic').textContent.replace('$', ''))
const priceStandart = Number(document.getElementById('price-standart').textContent.replace('$', ''))
const pricePremium = Number(document.getElementById('price-premium').textContent.replace('$', ''))

function getYearlyPrice (price) {
  return `$${(price * 12).toFixed()}`
}

function getMonthlyPrice (price) {
  return `$${price}`
}

switchYearly.addEventListener('click', () => {
  if (switchYearly.checked) {
    priceBasicElement.textContent = getYearlyPrice(priceBasic)
    priceStandartElement.textContent = getYearlyPrice(priceStandart)
    pricePremiumElement.textContent = getYearlyPrice(pricePremium)
  } else {
    priceBasicElement.textContent = getMonthlyPrice(priceBasic)
    priceStandartElement.textContent = getMonthlyPrice(priceStandart)
    pricePremiumElement.textContent = getMonthlyPrice(pricePremium)
  }
})

const switchTheme = document.getElementById('switch-theme')
const switchThemeInput = document.getElementById('switch-theme-input')
const table = document.getElementById('table')

switchTheme.addEventListener('click', () => {
  if (switchThemeInput.checked) {
    table.classList.add('table--dark')
  } else {
    table.classList.remove('table--dark')
  }
})