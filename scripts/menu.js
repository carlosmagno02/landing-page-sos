$(function(){
    $('a').on('click', function () {
        var href = $(this).attr('href')
        var offSetTop = $(href).offset().top

        $('html,body').animate({ 'scrollTop': offSetTop })

        return false
    })

    $('nav.mobile').on('click', function(){
        var listaMenu = $('nav.mobile ul')

        if(listaMenu.is(":hidden") == true){
            var botao =  document.getElementsByClassName("botao-menu-mobile")
            listaMenu.slideToggle()
        }else{
            
            var icone = $('.botao-menu-mobile i')
            icone.addClass('fa-bars')
            icone.removeClass('fa-times')
            listaMenu.slideToggle()
        }
    })
})