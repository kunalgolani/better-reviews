import container from 'container'

Array.from(document.querySelectorAll('.blob-code')).forEach(el => {
  el.addEventListener('mouseenter', event => {
    el.appendChild(container)
    container.style.left = el.getBoundingClientRect().left - container.getBoundingClientRect().width
  })

  el.addEventListener('mouseleave', event => {
    container.style.left = '-1000px'
  })
})
