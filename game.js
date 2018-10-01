// Same as: $(function() {});

$( document ).ready(function() {

  function changePosition(pole){
    pole =  Math.floor(Math.random() * 100) + 30
    return pole;
  }
  // fstxer to write the selecting thw whole object using
  var container = $('#container'); //
  var bird = $('#bird'); // bird
  var wall = $('.wall');
  var p1 = $('#p1');  // uper wall
  var p2 = $('#p2'); // bottom wall
  var score = $('#score'); // score tag
  var restart = $('#restart') ;
  var speed = $('#speed');
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var p_pos = parseInt(wall.css('right'));
  var p_height = parseInt(wall.css('height'));
  var birds_left = parseInt(wall.css('left'));
  var smack = $('#hit')[0];
  var bird_height = parseInt(bird.height());
  var result = $('#result');
  var velocity = 20;
  let goUp = false ;
  var game_engine = setInterval(function(){
    if (collision(bird,p1) || collision(bird,p2)
  || parseInt(bird.css('top'))<=0 || parseInt(bird.css('top')) > container_height - bird_height) {
      stop_game();
    }
    else {
    var newWall = parseInt(wall.css('right'))
    var left =   parseInt(container.css('left'))

    // console.log('Left'+left);
    if ( newWall > container_width){ // if it passed
      // We basically want to change the width of top and bottom walls

      topPole = changePosition(p1);
      bottomPole = changePosition(p2);
      p1.css('height',topPole);
      p2.css('height',bottomPole);
      if (newWall > container_width) {
        score.text(parseInt(score.text()) + 1)
      }

      newWall = 0;
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
    if (key === 38 && goUp == false){
      goUp = setInterval(up, 50);
    }
  })


  $(document).on('keyup', function(e){
    var key = e.keyCode;
    if (key === 38){
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
    restart.slideDown('slow');
    restart.on('click', function(){
    window.location.reload();

    })
    // bird.css('display','none');
    console.log(location.protocol)
  }

  function collision(div1, div2) {
      var x1 = div1.offset().left;
      var y1 = div1.offset().top;
      var h1 = div1.outerHeight(true);
      var w1 = div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;

      var x2 = div2.offset().left;
      var y2 = div2.offset().top;
      var h2 = div2.outerHeight(true);
      var w2 = div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return true;
  }
});
