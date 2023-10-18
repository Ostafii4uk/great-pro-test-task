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