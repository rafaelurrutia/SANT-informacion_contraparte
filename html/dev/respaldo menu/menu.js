var lastId,
    topMenu = $(".navbar"),
    topMenuHeight = topMenu.outerHeight() - 5,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

$(document).ready(function () {

    $(".navbar a").click(function (e) {
        var scrollh = $(window).scrollTop();

        if (scrollh <= 116) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight - 40;
        } else {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight;
        }
        
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);

        e.preventDefault();

    });
    
});



$(window).scroll(function () {
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
            menuItems
                .removeClass("active");
        });

        menuItems
            .parent().end().filter("[href='#" + id + "']").addClass("active");
   
    }
});