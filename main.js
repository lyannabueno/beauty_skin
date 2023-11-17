$(document).ready(function() {
    $('#phone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            email: {
                email: true
            }
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(validador) {
            let camposIncorretos = validador.numberofInvalids();
            if (camposIncorretos) {
                alert(`Complete os ${camposIncorretos} campos restantes`)
            }
        }
    })
})