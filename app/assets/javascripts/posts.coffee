# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  $('.hide-comments').click (e) ->
    e.preventDefault()
    $(this).parent().hide()
    return
  return

$(document).on 'upload:start', 'form', (e) ->
  $(this).find('input[type=submit]').attr 'disabled', true
  NProgress.start()
  return
$(document).on 'upload:progress', 'form', (e) ->
# Process upload details to get the percentage complete
  uploadDetail = e.originalEvent.detail
  percentLoaded = uploadDetail.loaded
  totalSize = uploadDetail.total
  percentageComplete = Math.round(percentLoaded / totalSize * 100)
  # Reflect the percentage on the progress bar
  #  console.log(percentageComplete)
  NProgress.set(percentageComplete)
  return
$(document).on 'upload:complete', 'form', (e) ->
  if !$(this).find('input.uploading').length
    $(this).find('input[type=submit]').removeAttr 'disabled'
    NProgress.done()
  return