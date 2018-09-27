// Same as: $(function() {});

$( document ).ready(function() {
  // fster to write the selecting thw whole object using $
  var container = $('#container');
  var bird = $('#bird');
  var wall = $('.wall');
  var p1 = $('#p1');
  var p2 = $('#p2');
  var score = $('#score');
  var container_width = parseInt(container.width());
  var p_pos = parseInt(wall.css('right'));
  var p_height = parseInt(wall.css('height'));
  var birds_left = parseInt(wall.css('left'));
  var birds_height = parseInt(wall.height());
  var velocity = 10;
  let fall = 0.6 ;

  var game_engine = setInterval(function(){
    var newWall = parseInt(wall.css('right'))
    wall.css('right', newWall + velocity);
    bird.css('right',fall*velocity)
    bird.css('bottom',fall+velocity)
  },40);

});
