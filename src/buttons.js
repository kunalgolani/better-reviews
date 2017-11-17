import dictionary from './dictionary'

const container = document.createElement('div')
container.classList.add('better-reviews-buttons')
container.style.position = 'absolute'
container.style.left = '-1000px'

dictionary.forEach(({ emoji, title }, index) => {
  const button = document.createElement('button')
  button.type = button
  button.classList.add('btn-link', 'add-line-comment', 'js-add-line-comment', 'js-add-single-line-comment')
  button.textContent = emoji
  button.title = title
  //   button.style.left = `-${(index + 1) * 20}px`
  button.style.backgroundColor = '#eee'
  container.appendChild(button)
})

export default container
