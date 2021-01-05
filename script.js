// expanding cards begins
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  // console.log(panels(0));

  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
// expanding cards ends

// send button begins
$('button').click(function () {
  $(this).toggleClass('clicked')
  $('button p').text(function (i, text) {
    return text === 'Sent!' ? 'Send' : 'Sent!'
  })
})
// send button ends
