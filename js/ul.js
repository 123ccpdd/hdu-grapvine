let l = 0

$('#nav li').mouseover(function() {
    $('#t_mall').css('left', $(this).position().left);
});

$('#nav li').mouseout(function() {
    $('#t_mall').css('left', l);
});


$('#nav li').click(function() {
    l = $(this).position().left
});