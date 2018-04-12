
$('.variety-wood-list').on('click','li', function() {
  $('.variety-wood-list li').removeClass('selected')
  $(this).addClass('selected')
})