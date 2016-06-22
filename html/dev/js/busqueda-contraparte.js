$(document).ready(function () {

    var input1 = document.getElementById('kgl');
    var input2 = document.getElementById('rut');
    var input3 = document.getElementById('razon');

    $(':radio[name="tipo-busqueda"]').change(function () {
        if ($(this).val() == '1') {
            $(".input-text input").attr("placeholder", "Ingrese código KGL");
            input1.setAttribute('placeholder', "Ingrese código KGL");
        }
        if ($(this).val() == '2') {
            $(".input-text input").attr("placeholder", "Ingresar RUT sin guión ni puntos");
            input2.setAttribute('placeholder', "Ingresar RUT sin guión ni puntos");
        }
        if ($(this).val() == '3') {
            $(".input-text input").attr("placeholder", "Ingresar Razón Social");
            input3.setAttribute('placeholder', "Ingresar Razón Social");
        }
    });

});
