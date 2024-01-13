$(document).ready(function() {
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            telefone: {
                required: true
            },
            ProdutodeInteresse: {
                required: true
            },
            mensagem: {
                required: true
            }
        },

        submitHandler: function(form) {
            console.log(form)
        },

        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Complete os ${camposIncorretos} campos restantes`)
            }
        }
    })

    $('#phone').mask('(00) 00000-0000')

    $('.card-body a.btn').click(function(event) {
        event.preventDefault();

        var ProdutodeInteresse = $(this).closest('.card').find('.card-title').text();

        $('#produto-interesse').val(ProdutodeInteresse);

        const destino = $('#contato');
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 100);
    });
})