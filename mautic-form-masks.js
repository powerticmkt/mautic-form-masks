$(document).ready(function () {

  // Requires https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.0/jquery.mask.js

  'use strict'

  // Aplica mascara no cpf
  $('input[id*="cpf"]').mask('000.000.000-00', {reverse: true})

  // Aplica mascara no telefone
  $('input[id*="telefone"]').mask('(00) 0000-0000')

  // Aplica mascara para celular com nono digito
  var SPMaskBehavior = function (val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
    },
    spOptions = {
      onKeyPress: function (val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options)
      }
  }

  $('input[id*="celular"]').mask(SPMaskBehavior, spOptions)

});
