export const input = () => {
    $('input, textarea').css('outline', 'none')
    $('input, textarea').on('focus', function(){
        $(this).attr('placeholder', '')
    })
    $('input, textarea').on('blur', function(){
        $(this).attr('placeholder', $(this).data('placeholder'))
    })
}
