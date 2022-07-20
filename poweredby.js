const div = document.createElement('div')
div.append('Powered by ')
Object.assign(div, {
  style: 'position: fixed; bottom: 3px; right: 5px; font-size: 1.25rem;',
  className: 'powered-by',
})
const a = document.createElement('a')
Object.assign(a, {
  style: 'color: inherit; font-weight: 600;',
  href: 'https://nikita-abaturov.ru/',
  target: '_blank',
})
a.append('Nikita Abaturov')
div.append(a)
document.body.append(div)
document.body.style.paddingBottom = '1.3rem'
