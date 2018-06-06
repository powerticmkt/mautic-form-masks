jQuery(document).ready(function() {

    jQuery('input[name*="cep"]').mask('00000-000');

    jQuery('input[name*="cnpj"]').mask('00.000.000/0000-00', {
        reverse: true
    });

    jQuery('input[id*="cpf"], input[class*="cpf"]').mask('000.000.000-00', {
        reverse: true
    });

    var SPMaskBehavior = function(val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function(val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    jQuery('input[type=tel], input[id*="telefone"], input[class*="telefone"]').mask(SPMaskBehavior, spOptions);

});