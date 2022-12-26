function randomBackground() {
  var bg = document.getElementById('background')
  images = [
    'assets/images/bg-1.jpg',
    'assets/images/bg-2.jpg',
    'assets/images/bg-3.jpg',
  ]
  var imgCount = images.length
  var num = Math.floor(Math.random() * imgCount)
  bg.style.backgroundImage = 'url(' + images[num] + ')'
}
