// Same as: $(function() {});

$( document ).ready(function() {

  function changePosition(pole){
    pole =  Math.floor(Math.random() * 130) + 60
    return pole;

  }

  // fstxer to write the selecting thw whole object using $
  var container = $('#container');
  var bird = $('#bird');
  var wall = $('.wall');
  var p1 = $('#p1');
  var p2 = $('#p2');
  var score = $('#score');
  var restart = $('#restart')
  var speed = $('#speed');
  var container_width = parseInt(container.width());
  var p_pos = parseInt(wall.css('right'));
  var p_height = parseInt(wall.css('height'));
  var birds_left = parseInt(wall.css('left'));
  var birds_height = parseInt(wall.height());
  var velocity = 10;
  let fall = 0.6 ;
  let goUp = false ;

  var game_engine = setInterval(function(){
    if (collision(bird,p1) || collision(bird,p2)) {
      console.log('Happy Accidents');

      stop_game();
    }
    else {
    var newWall = parseInt(wall.css('right'))
    if ( newWall > container_width){
      topPole = changePosition(p1);
      bottomPole = changePosition(p2);

      topPole2 = changePosition(p1);
      bottomPole1 = changePosition(p2);
      p1.css('height',topPole);
      p2.css('height',bottomPole);


      p1.css('height',topPole);
      p2.css('height',bottomPole1);
      newWall = 0;
      sp = parseInt(speed.text());
      sp = sp + 1 ;
      speed.text(sp);
    }
    // if score == 20 , then change speed. Not now thou + add a new character
    wall.css('right', newWall + velocity);

    if (goUp === false){
      goDown();
    }


    // Now, We need to deal with te keyboard events.
}
  },40);


  $(document).on('keydown', function(e){
    var key = e.keyCode;
    if (key === 32 && goUp == false){
      goUp = setInterval(up, 50);
    }
  })


  $(document).on('keyup', function(e){
    var key = e.keyCode;
    if (key === 32){
      clearInterval(goUp)
      goUp = false;
    }
  })
  function goDown(){
    // The bord will go down periodically
    bird.css('top',parseInt(bird.css('top')) + 7)
  }

  function up(){

    bird.css('top',parseInt(bird.css('top')) - 10)
  }
  function stop_game(){
    clearInterval(game_engine);
    restart.slideDown();
    bird.css('display','none');
  }

  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;

      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }
});
