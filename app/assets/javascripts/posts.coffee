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
$(document).on 'upload:complete', 'form', (e) ->
  if !$(this).find('input.uploading').length
    $(this).find('input[type=submit]').removeAttr 'disabled'
    NProgress.done()
  return

