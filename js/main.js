$(document).ready(function () {

    //EXTRAI AS INFORMAÇÕES DO ENDPOINT E ATRIBUI NA TABELA - (JSON).
    $.getJSON("http://jsonplaceholder.typicode.com/users", function (data) {

        for (let index = 0; index < data.length; index++) {

            $("#table").append(
                "<tr><td>" + data[index]['name'] +
                "</td><td>" + data[index]['username'] +
                "</td><td>" + data[index]['email'] +
                "</td><td><img src='imgs/detalhar.png' class='btnDetalhar'></td></tr>"
            );

        }

        //EXTRA: EXIBI AS INFORMAÇÕES ADICIONAIS DOS USUARIOS, CAPTURADAS ATRAVES DO ENDPOINT FORNECIDO.
        $(".btnDetalhar").click(function () {

            var resultado = $(this).closest("tr");
            var email = resultado.find("td:eq(2)").text();

            $(".endereco").empty();
            $(".geral").empty();
            $(".empresa").empty();

            $(".detalhes").show();

            for (let index = 0; index < data.length; index++) {
                
                if (email == data[index]['email']) {

                    $(".detalhes .det-body .geral").append(
                        "Nome: " + data[index]['name'] + "<br>" +
                        "Telefone: " + data[index]['phone'] + "<br>" +
                        "Website: " + data[index]['website'] + "<br>"
                    );

                    $(".detalhes .det-body .endereco").append(
                        data[index]['address']['street'] + "<br>" +
                        data[index]['address']['suite'] + "<br>" +
                        data[index]['address']['city'] + "<br>" +
                        data[index]['address']['zipcode'] + "<br>"
                    );

                    $(".detalhes .det-body .empresa").append(
                        "Nome: " + data[index]['company']['name'] + "<br>" +
                        "Bordão: " + data[index]['company']['catchPhrase'] + "<br>" +
                        "Setor: " + data[index]['company']['bs'] + "<br>"
                    );

                    break;

                }

            }

        });

    });

    //FECHAR DIV DE DETALHES DO USUARIO AO CLICAR NO BOTÃO.
    $("#btnFechar").click(function () {

        $(".detalhes").hide();

    });

    //ANIMAÇÃO DA TABELA AO CLICAR NO BOTÃO VISUALIZAR.
    $("#btnVisualizar").click(function () {

        var visivel = $(".parte2").is(":visible");

        if (visivel)
            $(this).text("VISUALIZAR!");
        else
            $(this).text("ESCONDER!");

        $(".parte2").animate({
            height: 'toggle'
        });

    });

});