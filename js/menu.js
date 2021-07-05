$(function(){
    $('a').on('click', function () {
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top

        $('html,body').animate({ 'scrollTop': offSetTop })

        return false
    })

    $('nav.mobile').on('click', function(){
        // $('nav.mobile').find('ul').slideToggle
        var listaMenu = $('nav.mobile ul')
        if(listaMenu.is(":hidden") == true){
            var icone = $('.botao-menu-mobile i')
            icone.removeClass('fa-bars')
            icone.addClass('fa-times')
            listaMenu.slideToggle()
        }else{
            var icone = $('.botao-menu-mobile i')
            icone.addClass('fa-bars')
            icone.removeClass('fa-times')
            listaMenu.slideToggle()
        }
    })
})