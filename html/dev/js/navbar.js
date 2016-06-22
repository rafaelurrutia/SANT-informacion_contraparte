// navbar scroll variables globales
var lastId,
    topMenu = $(".navbar"),
    //    topMenuHeight = topMenu.outerHeight() + 40,
    topMenuHeight = topMenu.outerHeight(),
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

$(window).scroll(function () {
    
    /* 
    1- ante el movimiento del scroll, si la ubicacion esta abajo y no apuntando hacia arriba 
    este ve de acuerdo a la posición de scroll si aparece o no la parte de cabecera, 
    2- se modifica el padding-top del left-side
    3- se deja en posicion fija el navbar
    4- se le deja el link de "informacion" como activo
    */
    var scrollh = $(this).scrollTop();
    if (scrollh <= 116) {
        $(".menu").removeClass('active');
        $(".left-side").removeClass('active');
        $(".navbar").removeClass("navbar-fixed-top");
        $(".navbar a").first().addClass("active");
    } else {
        $(".menu").addClass('active');
        $(".left-side").addClass('active');
        $(".navbar").addClass("navbar-fixed-top");
    }
    
    /* se agrega o quita la clase active a los link de navbar */
    var fromTop = $(this).scrollTop() + topMenuHeight + 40;
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        $('.navbar a').each(function () {
            menuItems.removeClass("active");
        });

        menuItems.parent().end().filter("[href='#" + id + "']").addClass("active");

    }

    var scrollh = $(window).scrollTop();
    if (scrollh <= 116) {
        $(".navbar a").first().addClass("active");
    }
    
});



$(document).ready(function () {

    /* 
    1- si al cargar la pagina la ubicacion esta abajo y no apuntando hacia arriba 
    este ve de acuerdo a la posición de scroll si aparece o no la parte de cabecera, 
    2- se modifica el padding-top del left-side
    3- se deja en posicion fija el navbar
    4- se le deja el link de "informacion" como activo
    */
    var scrollh = $(this).scrollTop();
    if (scrollh <= 116) {
        $(".menu").removeClass('active');
        $(".left-side").removeClass('active');
        $(".navbar").removeClass("navbar-fixed-top");
        $(".navbar a").first().addClass("active");
    } else {
        $(".menu").addClass('active');
        $(".left-side").addClass('active');
        $(".navbar").addClass("navbar-fixed-top");
    }

    // Descargar este informe en .xls
    $(".section-5")
        .mouseover(function () {
        $(".section-5 i").addClass("active");
        $(".section-5 strong").addClass("active");
    })
        .mouseout(function () {
        $(".section-5 i").removeClass("active");
        $(".section-5 strong").removeClass("active");
    });


    // Anexo de colaterales - thresold anexos colaterales boton mostrar ocultar tabla
    $("#thresold-1, #thresold-2, #activos-colateralizables-1, #activos-colateralizables-2").on("click", function (e) {
        e.preventDefault();

        if ($(this).is("#thresold-1")) {
            $("#thresold-table-1").toggle();
            $("#activos-colateralizables-table-1").hide();
            $("#thresold-table-1 .thresold-box").find(".img-1").hide();
            $("#activos-colateralizables-1").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $("#thresold-table-1 .thresold-box").find(".img-1").toggle();
        } else if ($(this).is("#thresold-2")) {
            $("#thresold-table-2").toggle();
            $("#activos-colateralizables-table-2").hide();
            $("#thresold-table-2 .thresold-box").find(".img-1").hide();
            $("#activos-colateralizables-2").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $("#thresold-table-2 .thresold-box").find(".img-1").toggle();
        } else if ($(this).is("#activos-colateralizables-1")) {
            $("#activos-colateralizables-table-1").toggle();
            $("#thresold-table-1").hide();
            $("#activos-colateralizables-table-1 .activos-colateralizables-box").find(".img-2").hide();
            $("#thresold-1").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $("#activos-colateralizables-table-1 .activos-colateralizables-box").find(".img-2").toggle();
        } else if ($(this).is("#activos-colateralizables-2")) {
            $("#activos-colateralizables-table-2").toggle();
            $("#thresold-table-2").hide();
            $("#activos-colateralizables-table-2 .activos-colateralizables-box").find(".img-2").hide();
            $("#thresold-2").find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
            $("#activos-colateralizables-table-2 .activos-colateralizables-box").find(".img-2").toggle();
        }

        if ($(this).find("i").hasClass("fa-angle-down")) {
            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
        } else {
            $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
        }

    });
    
    // evento hacer click link del navbar para quse se mueva el scroll
    $(".navbar a").click(function (e) {
        var scrollh = $(window).scrollTop();
        var positionLi = $(this).parent().index();

        if (scrollh <= 116) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 40;
        } else {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
        }

        if(positionLi!=0){
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        }

        if(positionLi==0){
            $("html, body").animate({ scrollTop: 0 }, 300);
        }
        
        e.preventDefault();

    });

});
