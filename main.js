document.querySelector('#file').addEventListener('change', (function() {
  document.querySelectorAll('.myImg').forEach((img) => {
    img.setAttribute('src', window.URL.createObjectURL(this.files[0]))
  })
}))

document.querySelector('#save').addEventListener('click', function() {
  html2canvas(document.querySelector('#result'), {
    useCORS: true
  }).then(canvas => {
    // document.body.appendChild(canvas)

    document.getElementById('download').href = canvas.toDataURL()
    document.getElementById('download').download = 'image.png'
    document.getElementById('download').click()
  })
})
