define(['modules/controller', 'jquery'], function(controller, $) {
  controller.controller('snakeCtrl', ['$scope', function($scope) {
     /*
    * Constant
    */
    var LEFT = -1,
      RIGHT = 1,
      UP = -20,
      DOWN = 20,
      PAUSE = 80;

    var oContext = document.getElementById('can').getContext('2d'),
      snake = [42, 41],
      iDirection = RIGHT,
      iNext = null,
      iFood = ~~(Math.random() * 400),
      fnTimer = null,
      bPause = false,
      bIsPlaying = false;
    document.onkeydown = keydown;

    /*
    * keydown
    * pause: keyCode is 80.
    * left arrow: keyCode is 37.
    * up arrow: keyCode is 38.
    * right arrow: keyCode is 39.
    * down arrow: keyCode is 40.
    * anonymous direction array is [-1, -20, 1, 20]
    */
    function keydown(e) {
      if (e.keyCode == PAUSE) {
        $scope.togglePause();
      }
      var curDirection = snake[0] - snake[1];
      iDirection = (Number([LEFT, UP, RIGHT, DOWN][e.keyCode - 37])) || iDirection;
      if (iDirection == -curDirection) {
        iDirection = curDirection;
      }
    }

    /*
    * draw rectangle according to the iCoordinate
    * iCoord: the order of the rectangle
    * sStyle: css color style
    */
    function drawRec(iCoord, sStyle) {
      oContext.fillStyle = sStyle;
      oContext.fillRect((iCoord % 20) * 20 + 1, ~~ (iCoord / 20) * 20 + 1, 18, 18);
    }

    /*
    * Clear canvas via fill in the black rectangle
    */
    function clearCanvas() {
      oContext.fillStyle='gray';
      oContext.fillRect(0, 0,400,400);
    }

    /*
    * Detect if there occurs the collision
    */
    function isCollision(iPos) {
        var bBorder = (iPos % 20 == 0 && iDirection == RIGHT)
          || (iPos % 20 == 19 && iDirection == LEFT)
          || (iPos < 0 || iPos > 399),
        bSelf = snake.indexOf(iPos) >= 0;
      return bBorder || bSelf;
    }

    $scope.togglePause = function() {
      bPause = !bPause;
      if (bPause) {
        bIsPlaying = false;
        $('#btn-pause>span').removeClass('glyphicon-pause').addClass('glyphicon-step-forward');
      } else {
        bIsPlaying = true;
        $('#btn-pause>span').removeClass('glyphicon-step-forward').addClass('glyphicon-pause');
      }
    }

    /*
    * Reset the parameters of the game
    */
    function reset() {
      bIsPlaying = false;
      bPause = false;
      snake = [42, 41];
      iDirection = RIGHT;
      iNext = null;
      iFood = ~~(Math.random() * 400);
      clearInterval(fnTimer);
      fnTimer = null;
    }

    /*
    * start the game
    */
    $scope.start = function() {
      if (bIsPlaying || bPause) {
        return;
      }
      bIsPlaying = true;
      clearCanvas();
      drawRec(iFood, 'Yellow');
      snake.forEach(function(iPos, index) {
        drawRec(iPos, 'Lime');
      });
      fnTimer = setInterval(play, 195);
    }

    function play() {
      if (bPause) {
        return;
      }
      iNext = snake[0] + parseInt(iDirection);
      if (isCollision(iNext)) {
        reset();
        clearCanvas();
        oContext.fillStyle='white';
        oContext.font='20px Arial';
        oContext.fillText('Oops! Game Over ^.^', 50, 50);
        return;
      }
      snake.unshift(iNext);
      drawRec(iNext, 'lime');

      if (iNext == iFood) {
        do {
          iFood = (~~(Math.random() * 400))
        } while(snake.indexOf(iFood) >= 0)
        drawRec(iFood, 'yellow');
      } else {
        drawRec(snake.pop(), 'gray');
      }
    }

  }]);
});